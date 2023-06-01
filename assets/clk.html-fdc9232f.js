import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c,e as l}from"./app-5974d0f8.js";const t={},n=l(`<h2 id="_1-clk使用" tabindex="-1"><a class="header-anchor" href="#_1-clk使用" aria-hidden="true">#</a> 1. clk使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>clk 驱动目前支持 linux 标准的时钟操作接口，如 clk_get/clk_put、clk_enable/clk_disable、clk_get_rate/clk_set_rate、clk_set_parent/clk_get_parent、clk_prepare_enable/clk_disable_unprepare 等。</p><h3 id="_1-2-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动注册" aria-hidden="true">#</a> 1.2 驱动注册</h3><p>驱动提供一个外部接口，用于初始化时钟相关资源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VOID  rkClkInit (VOID)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-接口使用" tabindex="-1"><a class="header-anchor" href="#_1-3-接口使用" aria-hidden="true">#</a> 1.3 接口使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct clk *clk_gmac;
struct clk *clk_parent;
struct clk *clk_gmac_rx_tx;

clk_gmac = clk_get(NULL, &quot;clk_gmac1&quot;);
clk_parent = clk_get(NULL, &quot;clk_mac1_2top&quot;);
clk_set_parent(clk_gmac, clk_parent);
clk_gmac_rx_tx = clk_get(NULL, &quot;clk_gmac1_rx_tx&quot;);
clk_set_rate(clk_gmac_rx_tx, 25000000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[n];function i(d,_){return a(),c("div",null,r)}const k=e(t,[["render",i],["__file","clk.html.vue"]]);export{k as default};
