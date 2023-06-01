import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-5974d0f8.js";const a={},l=d(`<h2 id="_1-thermal使用" tabindex="-1"><a class="header-anchor" href="#_1-thermal使用" aria-hidden="true">#</a> 1. thermal使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>控制器提供了 cpu 和 gpu 温度监控方法。</p><h3 id="_1-2-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动注册" aria-hidden="true">#</a> 1.2 驱动注册</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INT  rkThermalInit (VOID)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>温度传感器初始化函数，同时创建对应设备节点：/dev/thermal。</p><h3 id="_1-3-使用示例" tabindex="-1"><a class="header-anchor" href="#_1-3-使用示例" aria-hidden="true">#</a> 1.3 使用示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;

/*********************************************************************************************************
  设备 IO 控制操作
*********************************************************************************************************/
#define THERMAL_GET_CPU_TEMP         200
#define THERMAL_GET_GPU_TEMP         201

int main (int argc, char **argv)
{
    int fd;
    int val;

    fd = open(&quot;/dev/thermal&quot;, O_RDWR, 0666);
    if (fd &lt; 0) {
        printf(&quot;open device error, fd = %d\\r\\n&quot;, fd);
        return  (-1);
    }

    while (1) {
        ioctl(fd, THERMAL_GET_CPU_TEMP, &amp;val);
        printf(&quot;cpu temperature %d\\r\\n&quot;, val);

        ioctl(fd, THERMAL_GET_GPU_TEMP, &amp;val);
        printf(&quot;gpu temperature %d\\r\\n&quot;, val);

        sleep(1);
    }

    return  (0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[l];function s(v,t){return i(),n("div",null,r)}const m=e(a,[["render",s],["__file","thermal.html.vue"]]);export{m as default};
