const chartDataNew = [
  {
  kpi: '已完成',
  name: '赵',
  value: 263,
  percent: 0.53
}, {
  kpi: '未完成',
  name: '赵',
  value: 237,
  percent: 0.47
}, {
  kpi: '已完成',
  name: '钱',
  value: 200,
  percent: 0.6
}, {
  kpi: '未完成',
  name: '钱',
  value: 300,
  percent: 0.4
}, {
  kpi: '已完成',
  name: '孙',
  value: 110,
  percent: 0.37
}, {
  kpi: '未完成',
  name: '孙',
  value: 190,
  percent: 0.63
}, {
  kpi: '已完成',
  name: '李',
  value: 90,
  percent: 0.3
}, {
  kpi: '未完成',
  name: '李',
  value: 210,
  percent: 0.7
}
];

const details= [
  {
    name: '赵',
    product: '产品1',
    product_kind: '类别1',
    price: 10,
    salenum: 26,
    sales: 260,
    examinetypes: '销售额',
    examine: 1000,
    examinecycle: '每月',
    finish: '26%',
    bonus: 20,
    brokerage_fee: 10,
  },
  {
    name: '钱',
    product: '产品1',
    product_kind: '类别1',
    price: 1,
    salenum: 263,
    sales: 263,
    examinetypes: '销售额',
    examine: 500,
    examinecycle: '每月',
    finish: '53%',
    bonus: 10,
    brokerage_fee: 20,
  },
  {
    name: '孙',
    product: '产品1',
    product_kind: '类别1',
    price: 10,
    salenum: 26,
    sales: 260,
    examinetypes: '销售额',
    examine: 1000,
    examinecycle: '每月',
    finish: '26%',
    bonus: 20,
    brokerage_fee: 10,
  },
  {
    name: '李',
    product: '产品1',
    product_kind: '类别1',
    price: 1,
    salenum: 263,
    sales: 263,
    examinetypes: '销售额',
    examine: 500,
    examinecycle: '每月',
    finish: '53%',
    bonus: 10,
    brokerage_fee: 20,
  },
];
const name_array=['全部'];
Page({
  data: {
    items: [
      {
        title: '赵',
        brief: '2018-10销售额：1000元',
        extra:'第1名',
      },
      {
        title: '钱',
        brief: '2018-10销售额：800元',
        extra:'第2名',
      },
      {
        title: '孙',
        brief: '2018-10销售额：500元',
        extra:'第3名',
      },
      {
        title: '李',
        brief: '2018-10销售额：300元',
        extra:'第4名',
      },
    ],
    chart: null,
    details:details,
  },
  onLoad() {
    for (let i = 0; i < details.length;i++)
    {
      name_array.push(details[i].name);
    }
    this.setData({
      array: name_array,
    })
  },
  bindObjPickerChange(e) {
    const index = e.detail.value;
    const array = new Array(); 
    array.push(details[index-1]);
    if (index==0){
      this.setData({
        index: e.detail.value,
        details: details,
      });
    }else{
      this.setData({
        index: e.detail.value,
        details: array,
      });
    }
  },
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
    }
});
