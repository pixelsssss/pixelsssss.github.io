import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as l,a,d as e,b as c,e as d}from"./app-5974d0f8.js";const s={},o=d(`<h2 id="_1-rtc-使用" tabindex="-1"><a class="header-anchor" href="#_1-rtc-使用" aria-hidden="true">#</a> 1. RTC 使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>AIO-3568J 开发板采用 HYM8563 作为 RTC( <em>Real Time Clock</em> )，HYM8563 是一款低功耗 CMOS 实时时钟/日历芯片,它提供一个可编程的时钟输出,一个中断 输出和一个掉电检测器,所有的地址和数据都通过 I2C 总线接口串行传递。最大总线速度为 400Kbits/s,每次读写数据后,内嵌的字地址寄存器会自动递增</p><ul><li>可计时基于 32.768kHz 晶体的秒,分,小时,星期,天,月和年</li><li>宽工作电压范围:1.0~5.5V</li><li>低休眠电流:典型值为 0.25μA(VDD =3.0V, TA =25°C)</li><li>内部集成振荡电容</li><li>漏极开路中断引脚</li></ul><h3 id="_1-2-rtc驱动" tabindex="-1"><a class="header-anchor" href="#_1-2-rtc驱动" aria-hidden="true">#</a> 1.2 RTC驱动</h3><p>调用驱动接口 hym8563RtcGetFuncs 获取 RTC 驱动操作函数集。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PLW_RTC_FUNCS  hym8563RtcGetFuncs(CPCHAR  pcI2cBusName, UINT32  uiSlaveAddr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设备挂载的总线名称</li><li>设备地址</li></ul><p>调用系统接口 rtcDevCreate 创建 RTC 设备</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LW_API INT          rtcDevCreate(PLW_RTC_FUNCS    prtcfuncs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>prtcfuncs：rtc 操作函数集</li></ul><p>使用示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VOID  bspBoardTimeInit (VOID)
{
    PLW_RTC_FUNCS       prtcfuncHandle;                                 /*  RTC 驱动方法                */

    rtcDrv();                                                           /*  安装 RTC 设备驱动程序       */
    prtcfuncHandle = hym8563RtcGetFuncs(&quot;/bus/i2c/5&quot;, 0x51);            /*  获得 RTC 驱动方法           */
    rtcDevCreate(prtcfuncHandle);                                       /*  创建 RTC 设备               */
    rtcToSys();                                                         /*  将 RTC 时间同步到系统时间   */
    rtcToRoot();                                                        /*  将 RTC 时间同步到根文件系统 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-接口使用" tabindex="-1"><a class="header-anchor" href="#_1-3-接口使用" aria-hidden="true">#</a> 1.3 接口使用</h3><p>可使用 ioctl 控制 /dev/rtc。</p>`,15),u={href:"https://docs.acoinfo.com/sylixos/shell/time/date.html",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const i=t("ExternalLinkIcon");return r(),l("div",null,[o,a("p",null,[e("也可以在进入 SylixOS 系统后使用命令去操作 RTC，详细操作方法参考"),a("a",u,[e("设置系统时间"),c(i)]),e("。")])])}const C=n(s,[["render",v],["__file","rtc.html.vue"]]);export{C as default};
