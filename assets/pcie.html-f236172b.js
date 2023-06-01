import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-5974d0f8.js";const d={},a=s(`<h2 id="_1-pcie使用" tabindex="-1"><a class="header-anchor" href="#_1-pcie使用" aria-hidden="true">#</a> 1. pcie使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>rk3568 处理器支持 3 路 pcie 控制器，pcie3.0x2、pcie3.0x1、pcie2.0 各一路，其中 pcie3.0x2 可拆分为两路 pcie3.0x1。pcie3.0x2 控制器具有 DMA 功能，通过系统 DMA 接口来使用，通道16用于读，通道17用于写。</p><h3 id="_1-2-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动注册" aria-hidden="true">#</a> 1.2 驱动注册</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*********************************************************************************************************
  PCIe 控制器资源信息结构
*********************************************************************************************************/
typedef struct pcie_resource {
    INT     iIndex;                                                     /*  控制器索引                  */
    INT     iFirstBus;                                                  /*  控制器起始总线号            */
    INT     iLastBus;                                                   /*  控制器结束总线号            */
    UINT    uiRstGpio;                                                  /*  控制器复位引脚              */
    UINT    uiVccSupplyGpio;                                            /*  控制器供电引脚              */
    UINT    uiVccStartupDelayUs;                                        /*  控制器供电延时              */
    BOOL    bIsBifurcation;                                             /*  控制器是否拆分              */
} PCIE_RESOURCE_CONFIG;

INT  pciDrvInit(PCIE_RESOURCE_CONFIG  *pResCfg3X2,
                PCIE_RESOURCE_CONFIG  *pResCfg3X1,
                PCIE_RESOURCE_CONFIG  *pResCfg2X0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构体 struct pcie_resource 对 pcie 控制器资源进行配置，包括控制器索引、起始/结束总线号、复位引脚、供电引脚/延时等等。</p><p>使用示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VOID  bspBoardDrvInit (VOID)
{
    PCIE_RESOURCE_CONFIG  pResCfg3X2;

    /*
     *  指定每个控制器可用的总线号范围,
     *  这里的分法参考了 Linux 下默认的总线号配置
     *  注：供电和复位引脚查看设备树文件 pcie3x2 节点里的 reset-gpios 和 vpcie3v3-supply
     *      供电延时查看设备树中 startup-delay-us
     */
    pResCfg3X2.iFirstBus            = 0x0;
    pResCfg3X2.iLastBus             = 0xf;
    pResCfg3X2.uiRstGpio            = RK_GPIO_2_PORT_D_6;
    pResCfg3X2.uiVccSupplyGpio      = RK_GPIO_0_PORT_D_4;
    pResCfg3X2.uiVccStartupDelayUs  = 10000;
    pResCfg3X2.bIsBifurcation       = 0;

    pciDrvInit(&amp;pResCfg3X2, LW_NULL, LW_NULL);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[a];function c(r,v){return e(),n("div",null,l)}const p=i(d,[["render",c],["__file","pcie.html.vue"]]);export{p as default};
