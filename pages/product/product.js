const data = [
  {
  product: '产品1',
  salenum: 38
}, {
  product: '产品2',
  salenum: 90
}, {
  product: '产品3',
  salenum: 15
}, {
  product: '产品4',
  salenum: 66
}, {
  product: '产品5',
  salenum: 139
}, {
  product: '产品6',
  salenum: 45
}, {
  product: '产品7',
  salenum: 104
}
];

Page({
  data: {},
  onLoad() {},
  onLoad() {},
  onDraw(ddChart){
        ddChart.clear()
        ddChart.source(data, {
          sales: {
            tickCount: 5
          }
        })
        ddChart.tooltip(false)
        ddChart.axis('date', {
            label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
                textCfg.textAlign = 'left';
            }
            if (index === total - 1) {
                textCfg.textAlign = 'right';
            }
            return textCfg;
            }
        })
        ddChart.interval().position('product*salenum')
        ddChart.render()
    },
    onChange(e) {
    this.setData({
      value: e.detail.value,
    });
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
