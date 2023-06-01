import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as d}from"./app-5974d0f8.js";const s={},l=d(`<h2 id="_1-wdt使用" tabindex="-1"><a class="header-anchor" href="#_1-wdt使用" aria-hidden="true">#</a> 1. WDT使用</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>看门狗（watchdog）实际是一个定时器，启动之后会开始计时，系统或者软件需要在规定时间内与看门狗通信（俗称喂狗）重置计时，如此反复下去，以此来确定系统和软件正常运行。</p><p>如果规定时间内没有喂狗，看门狗超时，说明系统或应用陷入循环、卡死，此时看门狗会发出复位信号让主控复位，脱离卡死。</p><h3 id="_1-2-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动注册" aria-hidden="true">#</a> 1.2 驱动注册</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INT  rkWdtInit(VOID);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rkWdtInit 用于初始化控制器并创建对应的设备节点。看门狗一旦开启后，无法停止，需要定时喂狗。</p><h3 id="_1-3-使用方法" tabindex="-1"><a class="header-anchor" href="#_1-3-使用方法" aria-hidden="true">#</a> 1.3 使用方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;
/*********************************************************************************************************
  看门狗 I/O 命令
*********************************************************************************************************/
#define RK_GWDT_START                       (101)                       /*  启动看门狗                  */
#define RK_GWDT_STOP                        (102)                       /*  关闭看门狗                  */
#define RK_GWDT_FEED                        (103)                       /*  喂狗操作                    */
#define RK_GWDT_TIMELEFT                    (104)                       /*  获取剩余计数                */

static const char   *_G_cWdtDevName = &quot;/dev/rk_wdt&quot;;
static unsigned long _G_ulWdtTimeOut = 10;
static BOOL          _G_bIfFeedWdt   = 1;
static const char   *_G_cpcHelpStr   = &quot;watchdog test help &gt;&gt;\\n&quot;
                                       &quot; -d set wdt device name to test\\n&quot;
                                       &quot; -t set wdt time out\\n&quot;
                                       &quot; -f choose feed wdt or not\\n&quot;;
#define OPT_STR                        &quot;hd:t:f:&quot;
static void parse_option (int argc, char **argv)
{
    int  c;
    int  ret;
    unsigned long  tmp;

    while (1) {
        c = getopt(argc, argv, OPT_STR);
        if (c == -1) {
            break;
        }

        switch(c) {
        case &#39;d&#39;:
            _G_cWdtDevName = optarg;
            break;

        case &#39;t&#39;:
            ret = sscanf(optarg, &quot;%lu&quot;, &amp;tmp);
            if (ret &lt;= 0) {
                printf(&quot;invalid timeout, use default!\\n&quot;);
                _G_ulWdtTimeOut = 10;
                break;
            }

            _G_ulWdtTimeOut = tmp;
            break;

        case &#39;f&#39;:
            ret = sscanf(optarg, &quot;%lu&quot;, &amp;tmp);
            if (ret &lt;= 0) {
                printf(&quot;invalid choice, use default!\\n&quot;);
                break;
            }

            _G_bIfFeedWdt = tmp;
            break;

        case &#39;h&#39;:
            printf(_G_cpcHelpStr);
            break;

        default:
            printf(&quot;function not implemented!\\n&quot;);
            break;
        }
    }

    return;
}
/*********************************************************************************************************
** 函数名称: main
** 功能描述: 主函数
** 输　入  : argc     参数个数
**           argv     参数列表
** 输　出  : ERROR_CODE
** 全局变量:
** 调用模块:
*********************************************************************************************************/
int main (int argc, char **argv)
{
    int fd;
    int i = 0;
    int test_cnt = 20;
    unsigned long time_left  = 0;

    parse_option(argc, argv);

    printf(&quot;watch dog %s testing...time out %lus.\\n&quot;, _G_cWdtDevName, _G_ulWdtTimeOut);

    fd = open(_G_cWdtDevName, O_RDWR, 0666);
    if (fd &lt; 0) {
        printf(&quot;open device error, fd = %d\\r\\n&quot;, fd);
        return  (-1);
    }

    ioctl(fd, RK_GWDT_START, _G_ulWdtTimeOut);                                      /*  启动                        */

    while (test_cnt--) {
        sleep(1);
        i++;
        printf(&quot;time pass %d s\\n&quot;, i);
        ioctl(fd, RK_GWDT_TIMELEFT, &amp;time_left);
        printf(&quot;watch dog time left %lu.\\n&quot;, time_left);

        if (_G_bIfFeedWdt == 1) {
            if (i == _G_ulWdtTimeOut - 1) {
                printf(&quot;time will out, feed wdt now.\\n&quot;);
                i = 0;
                ioctl(fd, RK_GWDT_FEED, 0);
            }
        }
    }

    return  (0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=[l];function a(t,r){return n(),e("div",null,v)}const m=i(s,[["render",a],["__file","wdt.html.vue"]]);export{m as default};
