import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as d,e as t}from"./app-5974d0f8.js";const a={},n=t(`<h2 id="_1-i2c-使用" tabindex="-1"><a class="header-anchor" href="#_1-i2c-使用" aria-hidden="true">#</a> 1. I2C 使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>AIO-3568J开发板上有 6 个片上 I2C 控制器，各个 I2C 的使用情况如下表：</p><table><thead><tr><th>Port</th><th>Pin name</th><th>Device</th></tr></thead><tbody><tr><td>I2C0</td><td>GPIO0_B1/I2C0_SCL<br>GPIO0_B2/I2C0_SDA</td><td>RK809</td></tr><tr><td>I2C1</td><td>GPIO0_B3/I2C1_SCL<br>GPIO0_B4/I2C1_SDA</td><td>TP</td></tr><tr><td>I2C2_M0</td><td>GPIO0_B5/I2C2_SCL_M0<br>GPIO0_B6/I2C2_SDA_M0</td><td>复用为其他功能</td></tr><tr><td>I2C2_M1</td><td>GPIO4_B5/I2C2_SCL_M1<br>GPIO4_B4/I2C2_SDA_M1</td><td>复用为其他功能</td></tr><tr><td>I2C3_M0</td><td>GPIO1_A1/I2C3_SCL_M0<br>GPIO1_A0/I2C3_SDA_M0</td><td>BAT</td></tr><tr><td>I2C3_M1</td><td>GPIO3_B5/I2C3_SCL_M1<br>GPIO3_B6/I2C3_SDA_M1</td><td>复用为其他功能</td></tr><tr><td>I2C4_M0</td><td>GPIO4_B3/I2C4_SCL_M0<br>GPIO4_B2/I2C4_SDA_M0</td><td>TP</td></tr><tr><td>I2C4_M1</td><td>GPIO2_B2/I2C4_SCL_M1<br>GPIO2_B1/I2C4_SDA_M1</td><td>复用为其他功能</td></tr><tr><td>I2C5_M0</td><td>GPIO3_B3/I2C5_SCL_M0<br>GPIO3_B4/I2C5_SDA_M0</td><td>MC3230/HYM8563</td></tr><tr><td>I2C5_M1</td><td>GPIO4_C7/I2C5_SCL_M1<br>GPIO4_D0/I2C5_SDA_M1</td><td>MC3230/HYM8563</td></tr></tbody></table><p>本文主要描述如何在该开发板上配置 I2C。</p><p>配置 I2C 可分为两大步骤：</p><ul><li>定义和注册 I2C 驱动</li><li>定义和注册 I2C 设备</li></ul><h3 id="_1-2-定义和注册-i2c-总线驱动" tabindex="-1"><a class="header-anchor" href="#_1-2-定义和注册-i2c-总线驱动" aria-hidden="true">#</a> 1.2 定义和注册 I2C 总线驱动</h3><p>在注册 I2C 驱动时，需要结构体 LW_I2C_FUNCS 来描述 I2C 驱动。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>typedef struct lw_i2c_funcs {
    INT                    (*I2CFUNC_pfuncMasterXfer)(PLW_I2C_ADAPTER   pi2cadapter,
                                                      PLW_I2C_MESSAGE   pi2cmsg,
                                                      INT               iNum);
                                                                        /*  适配器数据传输              */
    INT                    (*I2CFUNC_pfuncMasterCtl)(PLW_I2C_ADAPTER   pi2cadapter,
                                                     INT               iCmd,
                                                     LONG              lArg);
                                                                        /*  适配器控制                  */
} LW_I2C_FUNCS;
typedef LW_I2C_FUNCS        *PLW_I2C_FUNCS;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册流程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PLW_I2C_FUNCS  rkI2cBusFuns(UINT32  uiChannel, UINT32  uiBusFreq);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rkI2cBusFuns 函数用来获取 I2C 驱动函数接口</p><ul><li>iChannel：i2c 控制器通道号；</li><li>uiBusFreq：i2c 总线波特率。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LW_API INT                   API_I2cAdapterCreate(CPCHAR           pcName, 
                                                  PLW_I2C_FUNCS    pi2cfunc,
                                                  ULONG            ulTimeout,
                                                  INT              iRetry);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API_I2cAdapterCreate 用来注册I2C驱动</p><ul><li>pcAdapterName：适配器名称（总线）</li><li>pcDeviceName：操作函数组</li><li>ulTimeout：操作超时时间 (ticks)</li><li>iRetry：重试次数</li></ul><p>使用示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> PLW_I2C_FUNCS  pI2cFuns;  
 API_I2cLibInit();

 pI2cFuns = rkI2cBusFuns(0, 100000);
 API_I2cAdapterCreate(&quot;/bus/i2c/0&quot;, pI2cFuns, 1000, 1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-定义和注册-i2c-设备" tabindex="-1"><a class="header-anchor" href="#_1-3-定义和注册-i2c-设备" aria-hidden="true">#</a> 1.3 定义和注册 I2C 设备</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LW_API PLW_I2C_DEVICE        API_I2cDeviceCreate(CPCHAR  pcAdapterName,
                                                 CPCHAR  pcDeviceName,
                                                 UINT16  usAddr,
                                                 UINT16  usFlag);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API_I2cDeviceCreate 用来注册 I2C 设备</p><ul><li>pcAdapterName：适配器名称</li><li>pcDeviceName：设备名称</li><li>usAddr：设备地址</li><li>usFlag：设备标志</li></ul><h3 id="_1-4-通过-i2c-收发数据" tabindex="-1"><a class="header-anchor" href="#_1-4-通过-i2c-收发数据" aria-hidden="true">#</a> 1.4 通过 I2C 收发数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LW_API INT                   API_I2cDeviceTransfer(PLW_I2C_DEVICE   pi2cdevice, 
                                                   PLW_I2C_MESSAGE  pi2cmsg,
                                                   INT              iNum);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API_I2cDeviceTransfer 用来通过 I2C 收发数据</p><ul><li>pi2cdevice：指定的 i2c 设备控制块（即 API_I2cDeviceCreate 函数返回值）</li><li>pi2cmsg：传输消息控制块组</li><li>iNum：控制消息组中消息的数量</li></ul>`,27),r=[n];function l(s,c){return i(),d("div",null,r)}const u=e(a,[["render",l],["__file","i2c.html.vue"]]);export{u as default};