import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as t}from"./app-5974d0f8.js";const n="/assets/1685073527235-e26f7aaf.png",s={},l=t('<h2 id="_1-uart使用" tabindex="-1"><a class="header-anchor" href="#_1-uart使用" aria-hidden="true">#</a> 1. UART使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>AIO-3568J支持UART、RS232、RS485接口</p><ul><li>UARTx2</li><li>RS485x2</li><li>RS232x2</li><li>TTL 调试串口x1</li></ul><p>其中开发板的 RS232 接口由主控的 uart3 和 uart4 扩展出来，而 UART 和 RS485 则由 SPI 桥接/扩展芯片 wk2124 扩展出来。AIO-3568J 开发板的串口接口图如下：</p><div align="center"><img src="'+n+`" style="zoom:70%;"></div><h3 id="_1-2-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动注册" aria-hidden="true">#</a> 1.2 驱动注册</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SIO_CHAN  *sioCreate(UINT  uiChannel);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sioCreate 用于初始化串口控制器，返回 struct sio_chan * 类型的串口操作集；</p><ul><li>uiChannel：串口通道号】</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LW_API 
INT  API_TtyDevCreate (PCHAR     pcName,
                       SIO_CHAN *psiochan,
                       size_t    stRdBufSize,
                       size_t    stWrtBufSize)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API_TtyDevCreate 用于创建 tty 设备</p><ul><li>pcName：设备名</li><li>psiochan：同步 I/O 函数集</li><li>stRdBufSize：输入缓冲区大小</li><li>stWrtBufSize：输出缓冲区大小</li></ul><p>使用示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SIO_CHAN            *psio;

psio = sioCreate(2);                                                	 /*  创建串口 2 通道             */
API_TtyDevCreate (&quot;/dev/ttyS2&quot;, psio, 1024, 1024);                       /*  创建 tty 设备               */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-串口使用" tabindex="-1"><a class="header-anchor" href="#_1-3-串口使用" aria-hidden="true">#</a> 1.3 串口使用</h3><p>驱动提供 rk3568SioPutChar 接口，用于直接输出字符串到指定串口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INT  rk3568SioPutChar(INT  iIndex, CHAR  cChar);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>iIndex：通道索引</li><li>cChar：字符信息</li></ul>`,19),d=[l];function r(c,u){return i(),a("div",null,d)}const h=e(s,[["render",r],["__file","uart.html.vue"]]);export{h as default};
