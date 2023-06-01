import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-5974d0f8.js";const d="/assets/1685007485388-88164cad.png",a={},l=s('<h2 id="_1-ethernet-使用" tabindex="-1"><a class="header-anchor" href="#_1-ethernet-使用" aria-hidden="true">#</a> 1. Ethernet 使用</h2><h3 id="_1-1-双以太网的使用" tabindex="-1"><a class="header-anchor" href="#_1-1-双以太网的使用" aria-hidden="true">#</a> 1.1 双以太网的使用</h3><p>此设备有两个网口，分别是 en1 和 en2。</p><div align="center"><img src="'+d+`" style="zoom:70%;"></div><h3 id="_1-2-查看ip地址" tabindex="-1"><a class="header-anchor" href="#_1-2-查看ip地址" aria-hidden="true">#</a> 1.2 查看IP地址</h3><p>双以太网口接入网络，可以通过调试串口或者adb来查看IP地址，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@sylixos:/root]# ifconfig en1
en1       Link encap: Ethernet HWaddr: 82:b0:c4:f8:43:94
          Dev: dw_0 Ifidx: 2 DHCP: D4 D6 Spd: N/A
          inet addr: 10.9.0.18 netmask: 255.255.0.0
          gateway: 10.9.3.1 broadcast: 10.9.255.255
          inet6 addr: fe80::80b0:c4ff:fef8:4394 Scope:Link&lt;T0&gt;
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          collisions:0 txqueue:0 tcpaf:2 tcpwnd:131070
          RX ucast packets:0 nucast packets:0 dropped:0
          TX ucast packets:0 nucast packets:0 dropped:0
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@sylixos:/root]# ifconfig en2
en2       Link encap: Ethernet HWaddr: da:36:d5:6e:6c:86
          Dev: dw_1 Ifidx: 3 DHCP: D4 D6 Spd: 1000 Mbps
          inet addr: 10.9.1.177 netmask: 255.255.255.0
          gateway: 192.168.128.1 broadcast: 10.9.1.255
          inet6 addr: fe80::d836:d5ff:fe6e:6c86 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          collisions:0 txqueue:0 tcpaf:2 tcpwnd:131070
          RX ucast packets:0 nucast packets:77 dropped:0
          TX ucast packets:0 nucast packets:9 dropped:0
          RX bytes:5250 (5.1 KB)  TX bytes:622 (622.0 B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-连通性测试" tabindex="-1"><a class="header-anchor" href="#_1-3-连通性测试" aria-hidden="true">#</a> 1.3 连通性测试</h3><ul><li>en1</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@sylixos:/root]# ping 10.9.1.178
Pinging 10.9.1.178

Reply from 10.9.1.178: bytes=32 time=2.497ms TTL=64
Reply from 10.9.1.178: bytes=32 time=0.973ms TTL=64
Reply from 10.9.1.178: bytes=32 time=1.012ms TTL=64
Reply from 10.9.1.178: bytes=32 time=1.176ms TTL=64

Ping statistics for 10.9.1.178:
    Packets: Send = 4, Received = 4, Lost = 0(0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0.973ms, Maximum = 2.497ms, Average = 1.414ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>en2</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@sylixos:/root]# ping 10.9.1.178
Pinging 10.9.1.178

Reply from 10.9.1.178: bytes=32 time=1.141ms TTL=64
Reply from 10.9.1.178: bytes=32 time=1.136ms TTL=64
Reply from 10.9.1.178: bytes=32 time=1.070ms TTL=64
Reply from 10.9.1.178: bytes=32 time=0.921ms TTL=64

Ping statistics for 10.9.1.178:
    Packets: Send = 4, Received = 4, Lost = 0(0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0.921ms, Maximum = 1.141ms, Average = 1.067ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-驱动注册" tabindex="-1"><a class="header-anchor" href="#_1-4-驱动注册" aria-hidden="true">#</a> <strong>1.4 驱动注册</strong></h3><p>rk3568 网卡控制器为 dw 网卡，驱动提供注册接口，使用示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VOID  bspBoardNetifAttch (VOID)
{
    PCHAR   pcCfgStr0 =
            &quot;compatible = rockchip,rk3568-gmac, snps,dwmac-4.20a;&quot;      /*  兼容名称                    */
            &quot;reg = 0xfe2a0000;&quot;                                         /*  寄存器基地址                */
            &quot;dev_name = dw_0;&quot;
            &quot;ethernet = 0;&quot;                                             /*  网卡编号                    */
            &quot;macirq = 59;&quot;                                              /*  中断号                      */
            &quot;rockchip,grf = 0xfdc60000;&quot;                                /*  引脚寄存器基地址            */
            &quot;phy_mode = rgmii;&quot;
            &quot;aneg_delay = 1;&quot;                                           /*  phy 自协商单次延时(ms)      */
            &quot;aneg_retry = 1000;&quot;                                        /*  phy 自协商重试次数          */
            &quot;rst_en = 1;&quot;                                               /*  需要硬件复位 phy            */
            &quot;rst_gpio = 91;&quot;                                            /*  硬件复位 phy gpio 引脚      */
            &quot;rst_mode = 0;&quot;                                             /*  硬件复位 phy 引脚低电平有效 */
            &quot;snps,axi-config = &amp;gmac0_stmmac_axi_setup;&quot;
            &quot;snps,wr_osr_lmt = 4;&quot;
            &quot;snps,rd_osr_lmt = 8;&quot;
            &quot;snps,blen = 0,0,0,0,16,8,4;&quot;
            &quot;tx_delay = 0x3c;&quot;
            &quot;rx_delay = 0x2f;&quot;
            &quot;clock_in_out = input;&quot;
            ;
    PCHAR   pcCfgStr1 =
            &quot;compatible = rockchip,rk3568-gmac, snps,dwmac-4.20a;&quot;      /*  兼容名称                    */
            &quot;reg = 0xfe010000;&quot;                                         /*  寄存器基地址                */
            &quot;ethernet = 1;&quot;                                             /*  网卡编号                    */
            &quot;dev_name = dw_1;&quot;
            &quot;macirq = 64;&quot;                                              /*  中断号                      */
            &quot;rockchip,grf = 0xfdc60000;&quot;                                /*  引脚寄存器基地址            */
            &quot;phy_mode = rgmii;&quot;
            &quot;aneg_delay = 1;&quot;                                           /*  phy 自协商单次延时(ms)      */
            &quot;aneg_retry = 1000;&quot;                                        /*  phy 自协商重试次数          */
            &quot;rst_en = 1;&quot;                                               /*  需要硬件复位 phy            */
            &quot;rst_gpio = 89;&quot;                                            /*  硬件复位 phy gpio 引脚      */
            &quot;rst_mode = 0;&quot;                                             /*  硬件复位 phy 引脚低电平有效 */
            &quot;snps,axi-config = &amp;gmac1_stmmac_axi_setup;&quot;
            &quot;snps,wr_osr_lmt = 4;&quot;
            &quot;snps,rd_osr_lmt = 8;&quot;
            &quot;snps,blen = 0,0,0,0,16,8,4;&quot;
            &quot;tx_delay = 0x4f;&quot;
            &quot;rx_delay = 0x26;&quot;
            &quot;clock_in_out = input;&quot;
            ;

    gmacInit(pcCfgStr0);
    gmacInit(pcCfgStr1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[l];function r(u,c){return i(),n("div",null,t)}const o=e(a,[["render",r],["__file","gmac.html.vue"]]);export{o as default};
