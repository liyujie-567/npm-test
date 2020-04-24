<template>
    <div id="app">
        <echart :id="one.Id" :eStyle="one.eStyle" :option="one.Option" />

        <echart :id="two.Id" :eStyle="two.eStyle" :option="two.Option" />
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            one: {
                Id: '',
                eStyle: {},
                Option: {}
            },
            two: {
                Id: '',
                eStyle: {},
                Option: {}
            },
        }
    },
    created () {
        this.initOne()
        this.initTwo()
    },
    methods: {
        initOne () {
            this.one.Id = 'one'
            this.one.eStyle = {height: '310px'}
            this.one.Option = {
                grid: {
                    top: '3%',
                    left: '3%',
                    right: '3%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    name:'日',
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '3', '5', '7', '9', '11', '13']
                },
                yAxis: {
                    type: 'value',
                    name: '百分比',
                    min: 0,
                    max: 100,
                },
                series: [{
                    type: 'line',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#1181ec', //改变折线点的颜色
                            lineStyle: {
                                color: '#1181ec' //改变折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#2e64b5'
                        },
                    },
                    data: [60, 68, 66, 67, 50, 89, 30]
                }]
            }
        },
        initTwo () {
            this.two.Id = 'two'
            this.two.eStyle = {height: '310px'}
            this.two.Option = {
                grid: {
                    top: '3%',
                    left: '3%',
                    right: '3%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    name:'日',
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '3', '5', '7', '9', '11', '13']
                },
                yAxis: {
                    type: 'value',
                    name: '百分比',
                    min: 0,
                    max: 100,
                },
                series: [{
                    type: 'line',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#1ccea1', //改变折线点的颜色
                            lineStyle: {
                                color: '#1ccea1' //改变折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#157a6e'
                        },
                    },
                    data: [20, 80, 40, 10, 70, 55, 68]
                }]
            }
        }
    }
}
</script>

<style>
</style>