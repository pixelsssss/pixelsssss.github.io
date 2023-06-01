import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as n}from"./app-5974d0f8.js";const t={},l=n(`<h2 id="_1-pwm使用" tabindex="-1"><a class="header-anchor" href="#_1-pwm使用" aria-hidden="true">#</a> 1. PWM使用</h2><h3 id="_1-1-前言" tabindex="-1"><a class="header-anchor" href="#_1-1-前言" aria-hidden="true">#</a> 1.1 前言</h3><p>rk3568 共 4 个 pwm 控制器，每个控制器包含 4 个 channel，共 16 个 channel。驱动初始化、配置时，以 channel 为单位，0-15。</p><h3 id="_1-2-接口说明" tabindex="-1"><a class="header-anchor" href="#_1-2-接口说明" aria-hidden="true">#</a> 1.2 接口说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INT  rkPwmInit(UINT32  uiChan);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于对某一 channel 进行初始化</p><ul><li>uiChan：通道号</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INT  rkPwmApply(struct pwm_state  *pState, UINT32  uiChan);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于设置某一 channel pwm 的周期、占空比、极性、是否使能等</p><ul><li>pState：pwm 状态结构</li><li>uiChan：pwm 通道号</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VOID rkPwmGetState(struct pwm_state  *hState, UINT32  uiChan);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于获取某一 channel pwm 的周期、占空比、极性、是否使能等</p><ul><li>hState：pwm 状态结构</li><li>uiChan：pwm 通道号</li></ul><h3 id="_1-3-使用示例" tabindex="-1"><a class="header-anchor" href="#_1-3-使用示例" aria-hidden="true">#</a> 1.3 使用示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rkPwmInit(3);  

struct pwm_state  pwmstate;

pwmstate.ullDutyCycle = 250;                                        /*  设置 pwm 占空比             */
pwmstate.ePolarity    = PWM_POLARITY_NORMAL;                        /*  设置 pwm 极性               */
pwmstate.ullPeriod    = plampdevparam-&gt;LAMPDEVPARAM_ullPeriod;      /*  设置 pwm 周期               */
pwmstate.bEnabled     = 1;                                          /*  使能 pwm 控制器             */

return  (rkPwmApply(&amp;pwmstate, plampdevparam-&gt;LAMPDEVPARAM_uiPwmChan));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function s(r,c){return a(),i("div",null,d)}const p=e(t,[["render",s],["__file","pwm.html.vue"]]);export{p as default};
