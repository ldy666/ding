const chartDataNew = [{
  kpi: '已完成',
  name: '产品1',
  value: 263,
  percent: 0.53
}, {
  kpi: '未完成',
  name: '产品1',
  value: 237,
  percent: 0.47
}, {
  kpi: '已完成',
  name: '产品2',
  value: 200,
  percent: 0.6
}, {
  kpi: '未完成',
  name: '产品2',
  value: 300,
  percent: 0.4
}, {
  kpi: '已完成',
  name: '产品3',
  value: 110,
  percent: 0.37
}, {
  kpi: '未完成',
  name: '产品3',
  value: 190,
  percent: 0.63
}, {
  kpi: '已完成',
  name: '产品4',
  value: 90,
  percent: 0.3
}, {
  kpi: '未完成',
  name: '产品4',
  value: 210,
  percent: 0.7
}, {
  kpi: '已完成',
  name: '产品5',
  value: 150,
  percent: 0.7
}, {
  kpi: '未完成',
  name: '产品5',
  value: 50,
  percent: 0.3
}, {
  kpi: '已完成',
  name: '产品6',
  value: 100,
  percent: 0.24
}, {
  kpi: '未完成',
  name: '产品6',
  value: 300,
  percent: 0.75
}]

Page({
  onLoad() {},
  onDraw(ddChart){
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        ddChart.clear()
        ddChart.source(chartDataNew, {
          percent: {
            min: 0,
            formatter: function formatter(val) {
              return (val * 100).toFixed(0) + '%';
            }
          }
        })
        ddChart.tooltip({
          custom: true, // 自定义 tooltip 内容框
          onChange: function onChange(obj) {
            var legend = chart.get('legendController').legends.top[0];
            var tooltipItems = obj.items;
            var legendItems = legend.items;
            var map = {};
            legendItems.map(function(item) {
              map[item.name] = _.clone(item);
            });
            tooltipItems.map(function(item) {
              var name = item.name;
              var value = item.value;
              if (map[name]) {
                map[name].value = value;
              }
            });
            legend.setItems(_.values(map));
          },
          onHide: function onHide() {
            var legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().kpi);
          }
      })
      ddChart.interval().position('name*percent').color('kpi').adjust('stack');
      ddChart.render();
    },
    startDate(e){
        dd.datePicker({
        format: 'yyyy-MM-dd',
        startDate: '2012-12-10',
        endDate: '2030-12-31',
        success: (res) => {
            this.setData({
            startDate: res.date,
            })
        },
        fail:()=>{
            dd.alert({
            content:"日期错误，请重新选择",
            })
        }
        });
    },
    endDate(e){
        dd.datePicker({
        format: 'yyyy-MM-dd',
        startDate: '2012-12-10',
        endDate: '2030-12-31',
        success: (res) => {
            this.setData({
            endDate: res.date,
            })
        },
        fail:()=>{
            dd.alert({
            content:"日期错误，请重新选择",
            })
        }
        });
    }

});
