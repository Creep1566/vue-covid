import echarts from 'echarts'
import '../utils/map'
import country from '../utils/country.js';
const install = function (Vue) {

    Object.defineProperties(Vue.prototype, {
        $myChart: {
            get() {
                return {
                    demo(id) {
                        console.log(id)
                    },
                    chinaMap(id, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true,
                                formatter(data) {
                                    return "<a href='#/citys/" + data.name + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + (data.value > 0 ? data.value : 0) + "</p></div></a>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 9,
                                        color: "#faebd2"
                                    },
                                    {
                                        min: 10,
                                        max: 99,
                                        color: "#e9a188"
                                    },
                                    {
                                        min: 100,
                                        max: 499,
                                        color: "#d56355"
                                    },
                                    {
                                        min: 500,
                                        max: 999,
                                        color: "#bb3937"
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: "#772526"
                                    },
                                    {
                                        min: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map",
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                                // data: [
                                //     { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#f00' } } }
                                // ]
                            }]
                        }
                        myChart.setOption(option);
                    },
                    WorldMap(id, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        max: 10000000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "国",
                                type: "map",
                                map: "world",
                                roam: true,
                                zoom: 1.2,
                                nameMap: country,//自定义地区的名称映射
                                layoutCenter: ['5%', '5%'],
                                top: 60,
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data

                            }]
                        }
                        myChart.setOption(option);
                    },
                    cityMap(id, cityName, data) {

                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true,
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        max: 100000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "国",
                                type: "map",
                                map: cityName, // 城市的名称
                                roam: false,//是否允许自动缩放
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                                // data:[
                                //     {name:'朝阳区',value:'200'}
                                // ]
                            }]
                        }
                        myChart.setOption(option);
                    }
                }
            }
        }
    })
}

export default install
