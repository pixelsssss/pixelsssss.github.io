import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as v,a as e,d as i,b as d,w as c,e as t}from"./app-5974d0f8.js";const o={},u=t('<h2 id="_1-sdk-内容" tabindex="-1"><a class="header-anchor" href="#_1-sdk-内容" aria-hidden="true">#</a> 1. SDK 内容</h2><table><thead><tr><th>目录/内容</th><th>简介</th><th>备注</th></tr></thead><tbody><tr><td>docs/处理器数据手册</td><td>处理器软件编程手册</td><td>可选</td></tr><tr><td>docs/标准硬件资料</td><td>硬件板卡的介绍资料等</td><td>可选</td></tr><tr><td>docs/测试报告</td><td>标准 bsp 各外设模块功能、性能及整板稳定性测试报告</td><td>必选</td></tr><tr><td>docs/others</td><td>其他必要文档材料</td><td>可选</td></tr><tr><td>images/</td><td>基于标准硬件的试用镜像，包括 bsp、测试工具等</td><td>必选</td></tr><tr><td>driver_library/</td><td>通用外设库，如兼容层、网卡库等</td><td>可选</td></tr><tr><td>bsp/</td><td>bsp 工程代码</td><td>必选</td></tr><tr><td>base/</td><td>当前发布的 bsp 版本对应的 SylixOS 内核源码及版本信息</td><td>必选</td></tr><tr><td>tools/</td><td>bsp 调试及使用过程中可能用到的工具集</td><td>可选</td></tr><tr><td>test_suite/</td><td>bsp 测试集及相关文档</td><td>可选</td></tr></tbody></table><h2 id="_2-sdk-使用" tabindex="-1"><a class="header-anchor" href="#_2-sdk-使用" aria-hidden="true">#</a> 2 SDK 使用</h2><h3 id="_2-1-sylixos-开发基础" tabindex="-1"><a class="header-anchor" href="#_2-1-sylixos-开发基础" aria-hidden="true">#</a> 2.1 SylixOS 开发基础</h3>',4),b={href:"https://docs.acoinfo.com/sylixos/about.html",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_2-2-sylixos-量产",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2-sylixos-量产","aria-hidden":"true"},"#"),i(" 2.2 SylixOS 量产")],-1),_=t(`<h3 id="_2-3-sylixos-启动" tabindex="-1"><a class="header-anchor" href="#_2-3-sylixos-启动" aria-hidden="true">#</a> 2.3 SylixOS 启动</h3><p>烧录完成后，上电启动信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysname  : sylixos
nodename : sylixos
release  : Enterprise
version  : 3.0.1
machine  : RK3568(ARMv8-A, 4 Core, Up to 2.0GHz, Current 1.8GHz)

                          [[                          (R)
 [[[[           [[[[      [[             [[[[    [[[[ 
[[  [[            [[                    [[  [[  [[  [[
[[      [[  [[    [[    [[[[    [[  [[  [[  [[  [[  
 [[     [[  [[    [[      [[    [[  [[  [[  [[   [[   
  [[    [[  [[    [[      [[     [[[[   [[  [[    [[  
   [[   [[  [[    [[      [[      [[    [[  [[     [[ 
    [[  [[  [[    [[      [[     [[[[   [[  [[      [[
[[  [[  [[  [[    [[      [[    [[  [[  [[  [[  [[  [[
 [[[[    [[[[   [[[[[[  [[[[[[  [[  [[   [[[[    [[[[ 
           [[                       
          [[    KERNEL: LongWing(C) 3.0.1
       [[[[   COPYRIGHT ACOINFO Co. Ltd. 2006 - 2023

SylixOS license: Commercial &amp; GPL.
SylixOS kernel version: 3.0.1 Code name: Enterprise

CPU     : RK3568(ARMv8-A, 4 Core, Up to 2.0GHz, Current 1.8GHz)
CACHE   : 64KBytes L1-Cache(D-32K/I-32K), 0 Bytes L2-Cache, 512KBytes L3-Cache
PACKET  : AIO-3568J Packet
ROM SIZE: 0x00200000 Bytes (0x00000000 - 0x001fffff)
RAM SIZE: 0xe6bf0000 Bytes (0x09400000 - 0xeffeffff)
BSP     : BSP Version 2.2.1 (Release) for Enterprise (Build May 23 2023 15:48:25)
[root@sylixos:/root]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={href:"https://docs.acoinfo.com/sylixos/reference/",target:"_blank",rel:"noopener noreferrer"},p=t(`<h2 id="_3-更新系统镜像" tabindex="-1"><a class="header-anchor" href="#_3-更新系统镜像" aria-hidden="true">#</a> 3 更新系统镜像</h2><h3 id="_3-1-工程导入及替换" tabindex="-1"><a class="header-anchor" href="#_3-1-工程导入及替换" aria-hidden="true">#</a> 3.1 工程导入及替换</h3><p>① 新建 SylixOS Base 工程，工程属性配置如下：</p><table><thead><tr><th>操作系统位数</th><th>base 选项</th></tr></thead><tbody><tr><td>64 位</td><td><em><strong>Toolchain</strong> : aarch64-sylixos-toolchain</em> <br><strong>CPU</strong> <strong>Type</strong> : generic<br><strong>FPU Type</strong> : default</td></tr><tr><td>32 位</td><td><em><strong>Toolchain</strong> : arm-sylixos-toolchain</em> <strong>CPU</strong> <strong>Type</strong> : cortex-a57<br><strong>FPU Type</strong> : disable</td></tr></tbody></table><p>注：将新建工程中的 libsylixos 文件夹替换为 SDK 中 <code>base</code> 目录下的 libsylixos。</p><p>② SDK 中需要导入 IDE 工作区的工程列表如下：</p><table><thead><tr><th>工程名</th><th>目录</th></tr></thead><tbody><tr><td>bsprk3568</td><td>bsp/</td></tr><tr><td>libdrv_linux_compat</td><td>driver_library/</td></tr></tbody></table><p>bsprk3568 和 libdrv_linux_compat 的工程属性中选择依赖的 Base 为新建的 SylixOS Base 工程。</p><h3 id="_3-2-编译" tabindex="-1"><a class="header-anchor" href="#_3-2-编译" aria-hidden="true">#</a> 3.2 编译</h3><p>按顺序编译新建的 SylixOS Base 工程、libdrv_linux_compat 和 bsprk3568。</p><p>以 64 位操作系统为例，编译完成后，bsprk3568 中会生成相应的目标文件，如 bsprk3568_aio_x64.bin。</p><h3 id="_3-3-网络启动" tabindex="-1"><a class="header-anchor" href="#_3-3-网络启动" aria-hidden="true">#</a> 3.3 网络启动</h3><p>设置 tftp server 路径，在 u-boot 命令行中参考启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setenv ipaddr 202.197.66.223;setenv serverip 202.197.66.156;tftp 0x9400000 bsprk3568_aio_x64.bin;go 0x9400000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 ipaddr 是指板卡的 ip 地址，serverip 是指主机的 ip 地址，根据实际情况修改设置。</p><p>启动过程示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; setenv ipaddr 202.197.66.223;setenv serverip 202.197.66.156;tftp 0x9400000 bsprk3568_aio_x64.bin;go 0x9400000
ethernet@fe010000 Waiting for PHY auto negotiation to complete. done
Using ethernet@fe010000 device
TFTP from server 202.197.66.156; our IP address is 202.197.66.223
Filename &#39;bsprk3568_aio_x64.bin&#39;.
Load address: 0x9400000
Loading: #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         ###################################################
         589.8 KiB/s
done
Bytes transferred = 4586432 (45fbc0 hex)
## Starting application at 0x09400000 ...
Linux compatibility layer version: 1.0.9-beta.
Linux compatibility layer top half init finished.
Block device /dev/blk/sdcard-0 part 0 mount to /media/sdcard0 use vfat file system.
Block device /dev/blk/sdcard-0 part 1 mount to /media/sdcard1 use vfat file system.
Block device /dev/blk/sdcard-0 part 2 mount to /media/sdcard2 use vfat file system.
Block device /dev/blk/sdcard-0 part 3 mount to /media/sdcard3 use vfat file system.
Block device /dev/blk/sdcard-0 part 4 mount to /media/sdcard4 use vfat file system.
Block device /dev/blk/sdcard-0 part 5 mount to /media/sdcard5 use vfat file system.
Block device /dev/blk/sdcard-0 part 6 mount to /media/sdcard6 use vfat file system.
Block device /dev/blk/sdcard-0 part 7 mount to /media/sdcard7 use vfat file system.
Block device /dev/blk/sdcard-0 part 8 mount to /media/sdcard8 use vfat file system.
Block device /dev/blk/sdcard-0 part 9 mount to /media/sdcard9 use vfat file system.
Block device /dev/blk/sdcard-0 part 10 mount to /media/sdcard10 use tpsfs file system.
Block device /dev/blk/nvme-0 part 0 mount to /media/nvme0 use vfat file system.
Block device /dev/blk/nvme-0 part 1 mount to /media/nvme1 use tpsfs file system.
rockchip_clk_register_branches: unknown clock type 11

mount sd memory card successfully.
environment variables load from /etc/profile fail, error: No such file or directory
[ifparam]No network parameter for [dw_1] from /etc/ifparam.ini, default parameters will be used.
I/TC: Secondary CPU 1 initializing
I/TC: Secondary CPU 1 switching to normal world boot
I/TC: Secondary CPU 2 initializing
I/TC: Secondary CPU 2 switching to normal world boot
I/TC: Secondary CPU 3 initializing
I/TC: Secondary CPU 3 switching to normal world boot
: Failed to reset the dma
stmmac_hw_setup: DMA engine initialization failed
stmmac_init: Hw setup failed
dwProbe: netdev_add error!
Linux compatibility layer bottom half init finished.
cpu current freq 1800000000 Hz, voltage 1125000 uV.
Press &lt;n&gt; to NOT execute /etc/startup.sh (timeout: 1 sec(s))
default shell stack: 1200000
sysname  : sylixos
nodename : sylixos
release  : Enterprise
version  : 2.3.8
machine  : RK3568(ARMv8-A, 4 Core, Up to 2.0GHz, Current 1.8GHz)


                          [[                          (R)
 [[[[           [[[[      [[             [[[[    [[[[ 
[[  [[            [[                    [[  [[  [[  [[
[[      [[  [[    [[    [[[[    [[  [[  [[  [[  [[  
 [[     [[  [[    [[      [[    [[  [[  [[  [[   [[   
  [[    [[  [[    [[      [[     [[[[   [[  [[    [[  
   [[   [[  [[    [[      [[      [[    [[  [[     [[ 
    [[  [[  [[    [[      [[     [[[[   [[  [[      [[
[[  [[  [[  [[    [[      [[    [[  [[  [[  [[  [[  [[
 [[[[    [[[[   [[[[[[  [[[[[[  [[  [[   [[[[    [[[[ 
           [[                             
          [[    KERNEL: LongWing(C) 2.3.8
       [[[[   COPYRIGHT ACOINFO Co. Ltd. 2006 - 2022

SylixOS license: Commercial &amp; GPL.
SylixOS kernel version: 2.3.8 Code name: Enterprise

CPU     : RK3568(ARMv8-A, 4 Core, Up to 2.0GHz, Current 1.8GHz)
CACHE   : 64KBytes L1-Cache(D-32K/I-32K), 0 Bytes L2-Cache, 512KBytes L3-Cache
PACKET  : AIO-3568J Packet
ROM SIZE: 0x00100000 Bytes (0x00000000 - 0x000fffff)
RAM SIZE: 0x72c00000 Bytes (0x09400000 - 0x7bffffff)
BSP     : BSP Version 2.1.0 (Release) for Enterprise (Build Nov 16 2022 17:29:50)
[root@sylixos:/root]# dw: en2 NIC Link is Up 1000 Mbps Full Duplex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-更新及重启" tabindex="-1"><a class="header-anchor" href="#_3-4-更新及重启" aria-hidden="true">#</a> 3.4 更新及重启</h3><p>通过 FTP 工具连接板卡，将 <code>/boot</code> 目录下的 bsprk3568_aio_x64.bin 替换为新编译的系统镜像，执行 sync 后，重启板卡即完成系统更新。</p><h2 id="_4-sdk-开发" tabindex="-1"><a class="header-anchor" href="#_4-sdk-开发" aria-hidden="true">#</a> 4 SDK 开发</h2><h3 id="_4-1-bsp-目录结构" tabindex="-1"><a class="header-anchor" href="#_4-1-bsp-目录结构" aria-hidden="true">#</a> 4.1 bsp 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bsprk3568
|  bsprk3568.mk
│  CHANGELOG
│  config.mk
│  Makefile
│  
└─SylixOS
    │  bspbuild.mk
    │  config.ld
    │  driver-library.mk
    │  libdrv.mk
    │  Makefile
    │  srcs.mk
    │  SylixOSBSP32.ld
    │  SylixOSBSP64.ld
    │  
    ├─bsp
    │  │  board.h
    │  │  bspInit.c
    │  │  bspLib.c
    │  │  bspMap.h
    │  │  libstartup.mk
    │  │  startup.S
    │  │  
    │  └─ aio
    │         aio.c
    │         aio.h
    │         aio.mk
    │         README.md
    │  
    ├─driver
    │  ├─ahci  
    │  ├─audio  
    │  ├─can
    │  ├─clk  
    │  ├─component
    │  ├─display 
    │  ├─dma 
    │  ├─emmc
    │  ├─fan
    │  ├─gpio
    │  ├─i2c 
    │  ├─include  
    │  ├─irq  
    │  ├─lamp  
    │  ├─net   
    │  ├─norflash  
    │  ├─nvme  
    │  ├─pci  
    │  ├─phy   
    │  ├─pmic 
    │  ├─psci
    │  ├─pwm 
    │  ├─regulator   
    │  ├─rkflash   
    │  ├─sdmmc 
    │  ├─spi
    │  ├─switchchip
    │  ├─thermal
    │  ├─timer 
    │  ├─uart
    │  ├─usb  
    │  ├─video   
    │  └─wdt   
    │ 
    ├─lib
    │  ├─arm 
    │  ├─arm64
    │  └─include
    │  
    ├─res 
    │  ├─dts
    │  │  └─aio
    │  │  
    │  └─tools
    │  
    ├─test
    │  
    └─user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-详细介绍" tabindex="-1"><a class="header-anchor" href="#_4-2-详细介绍" aria-hidden="true">#</a> 4.2 详细介绍</h3>`,23),S=e("thead",null,[e("tr",null,[e("th",null,"目录/文件"),e("th",null,"说明")])],-1),f={href:"http://bsprk3568.mk",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"IDE 配置文件",-1),A=e("tr",null,[e("td",null,"CHANGELOG"),e("td",null,"bsp 更新记录，包括新功能支持、bug 修复等，同时记录当前 bsp 版本号。")],-1),P={href:"http://config.mk",target:"_blank",rel:"noopener noreferrer"},k=e("td",null,"最外层配置文件，用于配置 Makefile 功能：① SYLIXOS_BASE_PATH 为 bsp 依赖的 base 工程路径，根据工程属性配置自动生成，无需手动更改；② LINUX_COMPAT_LAYER_PATH 为 bsp 依赖的 Linux 兼容层工程路径，一般自动索引当前工作空间下的兼容层工程，无需手动更改，bsp 工程和兼容层工程需要处于同一工作空间中；③ DEBUG_LEVEL 为当前编译等级，可选 debug 或 release，根据工程属性配置自动生成，无需手动更改；④ FPU_TYPE 为浮点类型配置，根据工程属性配置自动生成，无需手动更改；其他编译配置可手动添加。",-1),B=e("td",null,"Makefile",-1),C={href:"http://config.mk",target:"_blank",rel:"noopener noreferrer"},y=e("tr",null,[e("td",null,"SylixOS/bspbuild.mk"),e("td",null,"被当前目录下的 Makefile 包含，主要定义如下内容：① BSP_BASE_NAME 和 BSP_POST_NAME 表示目标文件名前后缀；② LOCAL_DSYMBOL 表示 bsp 中宏定义配置；③ LOCAL_INC_PATH 表示 bsp 源文件中头文件路径定义；④ LOCAL_DEPEND_LIB 和 LOCAL_DEPEND_LIB_PATH 表示 bsp 依赖的静态库名称及所在路径；⑤ LOCAL_DEPEND_TARGET 表示编译依赖的目标文件，这些目标文件发生改变时，会重新链接生成最终的 bsp 镜像文件，无需 rebuild 整个 bsp 工程；⑥ LOCAL_LD_SCRIPT 表示编译链接脚本文件，根据编译选项选择 32 位或者 64 位。其他暂未用到，不做介绍。")],-1),E=e("tr",null,[e("td",null,"SylixOS/config.ld"),e("td",null,"定义 bsp 的代码段和数据段地址信息、启动栈大小和堆内存结束地址，用于配置链接脚本。")],-1),O=e("td",null,"SylixOS/driver-library.mk",-1),g={href:"http://kernel-library.mk",target:"_blank",rel:"noopener noreferrer"},R={href:"http://libdrv.mk",target:"_blank",rel:"noopener noreferrer"},I={href:"http://kernel-library.mk",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"$(target)_DSYMBOL += $(TOOLCHAIN_DEF_SYMBOL)SYLIXOS_EXPORT_KSYMBOL",-1),M=e("tr",null,[e("td",null,"SylixOS/libdrv.mk"),e("td",null,"被当前目录下 Makefile 包含，定义了需要编译的外设驱动静态库。")],-1),F=e("tr",null,[e("td",null,"SylixOS/Makefile"),e("td",null,"当前目录的 Makefile 文件，定义了最终生成的 bsp 镜像名，包含了静态库编译 Makefile、源文件编译 Makefile 等，同时还可以选择是否编译设备树。")],-1),G=e("tr",null,[e("td",null,"SylixOS/srcs.mk"),e("td",null,"该文件定义需要编译的源文件。")],-1),L=e("tr",null,[e("td",null,"SylixOS/SylixOSBSP32.ld"),e("td",null,"32 位链接脚本文件。")],-1),D=e("tr",null,[e("td",null,"SylixOS/SylixOSBSP64.ld"),e("td",null,"64 位链接脚本文件。")],-1),K=e("td",null,"SylixOS/bsp",-1),N={href:"http://libstartup.mk",target:"_blank",rel:"noopener noreferrer"},H={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},U=e("tr",null,[e("td",null,"SylixOS/driver"),e("td",null,"该目录下为所有外设驱动目录，每个驱动目录下都有对应的 Makefile 用于生成独立的静态库。")],-1),V=e("tr",null,[e("td",null,"SylixOS/lib"),e("td",null,"该目录为 bsp 依赖的静态库存放目录：① 按架构分为 SylixOS/lib/arm 和 SylixOS/lib/arm64；② bsp 外设驱动静态库存放在 SylixOS/lib/(ARCH)/libdrv 目录下，其他的外部静态库，如网卡、rtc 等存放在 SylixOS/lib/(ARCH) 下；③ 外部静态库的头文件统一存放在 SylixOS/lib/include 目录下，如网卡、rtc 等。")],-1),Z=e("tr",null,[e("td",null,"SylixOS/res"),e("td",null,"该目录存放设备树、设备树编译工具等资源文件。")],-1),w=e("tr",null,[e("td",null,"SylixOS/test"),e("td",null,"该目录存放测试程序。")],-1),z=e("tr",null,[e("td",null,"SylixOS/user"),e("td",null,"用户目录。")],-1),Y=e("h3",{id:"_4-3-适配新板卡步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-适配新板卡步骤","aria-hidden":"true"},"#"),i(" 4.3 适配新板卡步骤")],-1),X={href:"http://demo.mk",target:"_blank",rel:"noopener noreferrer"},J={href:"http://demo.mk",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,"板卡上电，按 ctrl+c 进入 uboot 命令行（不同板卡进入 uboot 命令行方式可能有区别，根据实际情况操作），执行如下命令：",-1),q=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; bdinfo
arch_number = 0x00000000
boot_params = 0x00000000
DRAM bank   = 0x00000000
-&gt; start    = 0x00200000
-&gt; size     = 0x08200000
DRAM bank   = 0x00000001
-&gt; start    = 0x09400000
-&gt; size     = 0x76C00000
baudrate    = 1500000 bps
TLB addr    = 0x7FFF0000
relocaddr   = 0x7DD55000
reloc off   = 0x7D355000
irq_sp      = 0x7B9F9140
sp start    = 0x7B9F9140
FB base     = 0x00000000
Early malloc usage: 32a0 / 80000
fdt_blob = 000000000a100000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 Core-3568J 板卡为例，可以看到 DRAM BANK 分为两部分，当前系统内存布局如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  DDR 内存空间分布: 2G
  |  ATF  |  Bank0  |  OP-TEE  |                Bank1                 |
  ---------------------------------------------------------------------
  |       |  APP0   |          |  Kernel (TEXT + DATA + DMA) |  APP1  |
  0       2M      132M       148M                            ?     2048M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实测 Core-3568J 板卡内存末端还需预留 64KB 空间，否则内存测试时会出现系统卡死现象，在 u-boot 下也是同样的现象。</p><p>需要注意的是，每个硬件板卡的 DRAM BANK 可能不同，对应的板级头文件中需要根据实际情况调整内存划分。</p><ul><li>板级头文件内容介绍如下，根据实际需要修改：</li></ul><table><thead><tr><th>文件内容</th><th>含义</th></tr></thead><tbody><tr><td>BSP_CFG_SWITCH_CODE</td><td>是否需要 AARCH64 切换 AARCH32 的机器码，运行 32 位系统使用，无需修改。</td></tr><tr><td>BSP_CFG_BOOT_MODE</td><td>启动模式选择，当前一般均使用 bin 文件启动，无需修改</td></tr><tr><td>BSP_CFG_PLATFORM_PACKET</td><td>板级名称，根据需要修改</td></tr><tr><td>BSP_CFG_STD_FILE</td><td>标准输入输出使用的串口设备名，根据需要修改</td></tr><tr><td>BSP_CFG_TTY_BAUD</td><td>标准输入输出使用的串口波特率，根据需要修改</td></tr><tr><td>BSP_CFG_CACHE_BARRIER_EN</td><td>是否使能 cache 同步，多核启动时使用，一般无需修改</td></tr><tr><td>BSP_CFG_LICENSE_EN</td><td>是否使能限时控制，默认开启，用于试用镜像，若已有 bsp 源码并需要进行长期稳定性测试，需要注意关闭该选项</td></tr><tr><td>BSP_CFG_EXPIRE_HOUR</td><td>试用镜像限时重启倒计时，默认设置为 24h</td></tr><tr><td>BSP_CFG_ROM_BASE</td><td>无需修改</td></tr><tr><td>BSP_CFG_ROM_SIZE</td><td>无需修改</td></tr><tr><td>BSP_CFG_RAM_BANK0_START</td><td>BANK0 起始地址，根据实际情况修改</td></tr><tr><td>BSP_CFG_RAM_BANK0_SIZE</td><td>BANK0 大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_TAIL_RESERVED_SIZE</td><td>内存空间末尾保留空间，根据实际情况修改</td></tr><tr><td>BSP_CFG_RAM_BANK1_START</td><td>BANK1 起始地址，根据实际情况修改</td></tr><tr><td>BSP_CFG_RAM_BANK1_SIZE</td><td>BANK1 大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_APP0_START</td><td>APP0 起始地址，根据实际情况修改</td></tr><tr><td>BSP_CFG_APP0_SIZE</td><td>APP0 内存大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_RAM_BASE</td><td>内存基址，根据编程手册，为 0 + BSP_CFG_HEAD_RESERVED_SIZE</td></tr><tr><td>BSP_CFG_RAM_SIZE</td><td>可用内存大小，总内存大小减去 BSP_CFG_HEAD_RESERVED_SIZE 和 BSP_CFG_TAIL_RESERVED_SIZE</td></tr><tr><td>BSP_CFG_TEXT_SIZE</td><td>代码段大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_DATA_SIZE</td><td>数据段大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_DMA_SIZE</td><td>DMA 内存大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_APP_SIZE</td><td>APP 内存大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_BOOT_STACK_SIZE</td><td>启动栈大小，链接脚本中使用，根据实际情况修改。当前每个核启动栈设置为 64KB，四核共计 256KB</td></tr><tr><td>BSP_CFG_VAPP_START_ARM32</td><td>32 位系统 APP 虚拟空间基址，根据实际情况修改</td></tr><tr><td>BSP_CFG_VAPP_SIZE_ARM32</td><td>32 位系统 APP 虚拟空间大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_VIO_START_ARM32</td><td>32 位系统 IOREMAP 虚拟空间基址，根据实际情况修改</td></tr><tr><td>BSP_CFG_VIO_SIZE_ARM32</td><td>32 位系统 IOREMAP 虚拟空间大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_VAPP_START_ARM64</td><td>64 位系统 APP 虚拟空间基址，根据实际情况修改</td></tr><tr><td>BSP_CFG_VAPP_SIZE_ARM64</td><td>64 位系统 APP 虚拟空间大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_VIO_START_ARM64</td><td>64 位系统 IOREMAP 虚拟空间基址，根据实际情况修改</td></tr><tr><td>BSP_CFG_VIO_SIZE_ARM64</td><td>64 位系统 IOREMAP 虚拟空间大小，根据实际情况修改</td></tr><tr><td>BSP_CFG_ROOTFS_TYPE</td><td>根文件系统挂载设备配置，根据实际情况修改</td></tr><tr><td>BSP_CFG_BOOT_PARAM</td><td>启动参数，根据实际情况修改</td></tr><tr><td>BSP_CFG_TICK_CHAN</td><td>tick 使用的外部定时器对应的控制器通道号，默认为 0，根据实际情况修改</td></tr><tr><td>BSP_CFG_TICK_INT_VECTOR</td><td>tick 使用的外部定时器对应的控制器中断号</td></tr><tr><td>BSP_CFG_TICK_USE_PRIV_TIMER</td><td>tick 是否使用私有定时器，默认开启</td></tr><tr><td>BSP_CFG_TICK_PRIV_TIMER_VECTOR</td><td>tick 是否使用私有定时器的中断号</td></tr><tr><td>BSP_CFG_GIC_ITS_EN</td><td>是否使能对 ITS 支持，用于 PCIe 驱动中 msi 中断支持</td></tr><tr><td>BSP_CFG_GIC_ITS_MAP_BASE</td><td>ITS 中断映射基地址</td></tr></tbody></table><ul><li>板级源文件中，根据实际需要，结合 <a href="../%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91">驱动开发</a> 驱动接口及特性，调用对应的驱动初始化接口，可参考已有的 <code>aio</code> 板级文件内容，此处不做详细介绍。</li><li>最外层 Makefile 中添加 BOARD_LIST += demo。</li><li>编译后会生成对应的板级二进制文件，根据板卡实际情况，通过 u-boot 引导启动即可。</li></ul>`,8);function $(j,Q){const n=l("ExternalLinkIcon"),s=l("RouterLink");return a(),v("div",null,[u,e("p",null,[i("首先，开发者需要通过 "),e("a",b,[i("在线学习"),d(n)]),i(" 具备 SylixOS 开发基础。")]),m,e("p",null,[i("参考 "),d(s,{to:"/open_source_docs/sdk/rockchip/rk3568/%E4%B8%8A%E6%89%8B%E6%95%99%E7%A8%8B/%E9%87%8F%E4%BA%A7%E6%96%B9%E6%A1%88/"},{default:c(()=>[i("量产方案")]),_:1}),i(" 烧录 SylixOS 环境。")]),_,e("p",null,[i("此时，开发者可以参考 "),e("a",h,[i("SylixOS 用户手册"),d(n)]),i(" 基于该板卡进行应用开发工作。")]),p,e("table",null,[S,e("tbody",null,[e("tr",null,[e("td",null,[e("a",f,[i("bsprk3568.mk"),d(n)])]),x]),A,e("tr",null,[e("td",null,[e("a",P,[i("config.mk"),d(n)])]),k]),e("tr",null,[B,e("td",null,[i("最外层 Makefile，用于配置需要编译的板级包，导出 "),e("a",C,[i("config.mk"),d(n)]),i(" 中定义的配置，同时调用 SylixOS 目录下的 Makefile 执行最终的编译操作。为了节约编译时间，可以在 BOARD_LIST 中只选择需要编译的板级，其他的通过 # 注释。")])]),y,E,e("tr",null,[O,e("td",null,[i("内核静态库类目标 Makefile 模板，从 libsylixos 中的 "),e("a",g,[i("kernel-library.mk"),d(n)]),i(" 修改而来，被当前目录下 "),e("a",R,[i("libdrv.mk"),d(n)]),i(" 包含，用于将 bsp 中的外设驱动单独预编译生成静态库文件，再次编译时可删除对应外设驱动源文件，适用于不方便提供源码的场景。部分外设驱动静态库编译时需要包含 symbol.h，所以该文件在 "),e("a",I,[i("kernel-library.mk"),d(n)]),i(" 基础上新增 "),T,i("，用于生成 symbol.h。")])]),M,F,G,L,D,e("tr",null,[K,e("td",null,[i("该目录下包含板级目录和 bspInit.c、bspLib.c、startup.S 等启动文件。其中启动文件由 "),e("a",N,[i("libstartup.mk"),d(n)]),i(" 编译生成 libstartup.a，板级目录下包含板级源文件和头文件、板级 Makefile、"),e("a",H,[i("README.md"),d(n)]),i("。")])]),U,V,Z,w,z])]),Y,e("ul",null,[e("li",null,[i("新建板卡对应的板级目录，快捷方法是拷贝已有的板级目录如 aio 到同一目录下，例如重命名为 demo，将 demo 目录下的文件分别重命名为 demo.c、demo.h、"),e("a",X,[i("demo.mk"),d(n)]),i("；")]),e("li",null,[i("修改 demo.c、demo.h、"),e("a",J,[i("demo.mk"),d(n)]),i(" 文件中的文件信息、头文件包含宏定义等；")]),W]),q])}const de=r(o,[["render",$],["__file","SDK使用.html.vue"]]);export{de as default};
