<template>
    <div id="app">
        <echart
        :id="Id"
        :eStyle="columnOne.style"
        :titleText="columnOne.title"
        :legend="columnOne.barName"
        :seriesData="columnOne.data"
        :xA="columnOne.barX"
        :yA="columnOne.barY" />

        <echart
        :id="Ids"
        :eStyle="columnOne.style"
        :titleText="columnOne.title"
        :legend="columnOne.barName"
        :seriesData="columnOne.data"
        :xA="columnOne.barX"
        :yA="columnOne.barY" />

    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            // 数据源
            columnData: {
                title: '动态统计one',
                min: '0',
                max: '3000',
                interval: 500,
                barName: 'right',
                barXName: '年',
                barXMeasure: 'y',
                barYName: '升',
                barYMeasure: 'ml',
                list: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        stack: '总量',
                        xAxis: '2019/03/01',
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        xAxis: '2019/03/02',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack: '总量',
                        xAxis: '2019/03/03',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack: '总量',
                        xAxis: '2019/03/04',
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        xAxis: '2019/03/05',
                        itemStyle: {
                            normal: {
                                color: '#1f8dfc'
                            }
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            },
            // 图表定义参数
            columnOne: {
                // 样式
                style: {
                    height: ''
                },
                // 标题
                title: '',
                // legend
                barName: {
                    left: '',
                    data: []
                },
                // X轴
                barX: {
                    name: '',
                    measure: '',
                    data: []
                },
                // Y轴
                barY: {
                    name: '', // 单位
                    min: '', // 最小值
                    max: '', // 最大值
                    interval: '', // 等比例
                    measure: '' // 值单位
                },
                // 数据源
                data: [],
            },
            // 图表ID
            Id: 'one',
            Ids: 'two'
        }
    },
    created () {
        this.columnOne.style.height = 320 + 'px'
        this.init()
    },
    methods: {
        init () {
            this.columnOne.title = this.columnData.title
            this.columnOne.barName.left = this.columnData.barName
            this.columnOne.barX.name = this.columnData.barXName
            this.columnOne.barX.measure = this.columnData.barXMeasure
            this.columnOne.barY.min = this.columnData.min
            this.columnOne.barY.max = this.columnData.max
            this.columnOne.barY.interval = this.columnData.interval
            this.columnOne.barY.name = this.columnData.barYName
            this.columnOne.barY.measure = this.columnData.barYMeasure
            this.columnData.list.forEach((v) => {
                this.columnOne.barName.data.push(v.name)
                this.columnOne.barX.data.push(v.xAxis)
            })
            this.columnOne.data = this.columnData.list
        }
    }
}
</script>

<style>
</style>