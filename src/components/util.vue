<template>
    <div>
        <div class="margin">
            <div class="margin-div">时间格式化</div>
            formatDate = {{ formatDate }}
        </div>
        <div class="margin">
            <div class="margin-div">以“天”为单位获取响应的时间戳</div>
            setDate = {{ setDate }}
        </div>
        <div class="margin">
            <div class="margin-div">根据当前时间后推date月数</div>
            getMonthDate = {{ getMonthDate }}
        </div>
        <div class="margin">
            <div class="margin-div">获取 URL 中的参数</div>
            getUrlParams = {{ getUrlParams }}
        </div>
        <div class="margin">
            <div class="margin-div">数组降维</div>
            arrayFlat = 二维数组 {{ arrayFlat }} 多维数组 {{ arrayFlats }}
        </div>
        <div class="margin">
            <div class="margin-div">深拷贝</div>
            deepClone = {{ deepClone }}
        </div>
        <div class="margin">
            <div class="margin-div">去除数组中的空值</div>
            trimNull = {{ trimNull }}
        </div>
        <div class="margin">
            <div class="margin-div">节流函数</div>
            throttle
        </div>
        <div class="margin">
            <div class="margin-div">函数防抖</div>
            debounce
        </div>
        <div class="margin">
            <div class="margin-div">获取数组极值</div>
            minApply = {{ minApply }} maxApplys = {{ maxApplys }}
        </div>
        <div class="margin">
            <div class="margin-div">判断小数是否相等</div>
            epsEqu = {{ epsEqu }}
        </div>
        <div class="margin">
            <div class="margin-div">数组排序</div>
            arraySort = {{ arraySort }}
        </div>
        <div class="margin">
            <div class="margin-div">字母排序</div>
            letterSort = {{ letterSort }}
        </div>
        <div class="margin">
            <div class="margin-div">获取当前时间 all 年-月-日 时-分-秒 | ymdhm 年-月-日 时-分 | ymd 年-月-日 | ym 年-月 | hm 时-分 | y 年 | m 月 | d 日</div>
            formatDateInfo = {{ formatDateInfo }}
        </div>
    </div>
</template>

<script>
    import util from 'npm-assembly/src/lib/util'

    export default {
        name: 'util',
        data () {
            return {
                formatDate: util.formatDate(new Date(), 'yyyy年MM月dd hh分mm秒'),
                setDate: util.setDate(util.setDate(3), 'yyyy年MM月dd hh分mm秒'),
                getMonthDate: util.getMonthDate(3),
                getUrlParams: util.getUrlParams('b'),
                arrayFlat: util.arrayFlat([ [1], [2], [3] ], true),
                arrayFlats: util.arrayFlat([1, 2, [3], [[4]]], false),
                deepClone: util.deepClone({a:'1', b:'2'}),
                trimNull: util.trimNull([1, 2, '', undefined, 3]),
                minApply: util.mathApply([0, 1, 2.2, 3.3], 'min'),
                maxApplys: util.mathApply([0, 1, 2.2, 3.3], 'max'),
                epsEqu: util.epsEqu(0.1 + 0.2, 0.3),
                arraySort: util.arraySort([1, 10, 5, 150, 15]),
                letterSort: util.letterSort(['ef', 'cd', 'xy', 'hi', 'ab']),
                formatDateInfo: util.formatDateInfo(new Date(), 'ym')
            }
        },
        created () {
            this.init()
        },
        methods: {
            init () {

            }
        }
    }
</script>

<style scoped>
    .margin {
        margin: 30px 10px;
    }
    .margin-div {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>