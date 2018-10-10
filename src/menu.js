const item = [
    {
        title: '个人中心',
        icon: 'el-icon-info',
        index: '/personal'
    },
    {
        title: '软文中心',
        icon: 'el-icon-date',
        index: '/ruanwen',
        children: [
            {
                title: '开始发布',
                icon: 'el-icon-edit',
                index: '/ruanwen/create'
            },
            {
                title: '进度查询',
                icon: 'el-icon-question',
                index: '/ruanwen/item'
            },
            {
                title: '媒体查询',
                icon:  'el-icon-tickets',
                index: '/ruanwen/meiti'
            }
        ]
    },
    {
        title: '订单中心',
        icon: 'el-icon-edit',
        index: '/orders'
    },
    {
        title: '我的资源',
        icon: 'el-icon-document',
        index: '/resource'
    },
    {
        icon: "el-icon-menu",
        index: "haha",
        title: "数据统计",
        children: [
            {
                index: "/monitor",
                title: "客流展示"
            },
            {
                index: "/monitor/device",
                title: "设备采集"
            },
            {
                index: "/monitor/tv",
                title: "监控视频"
            }
        ]
    }    
]
export default item