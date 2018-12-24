const data = [
  {
    year: '2018-6',
    sales: 123
  },
  {
    year: '2018-7',
    sales: 97
  },
  {
    year: '2018-8',
    sales: 38
  }, 
  {
    year: '2018-9',
    sales: 52
  }, 
  {
    year: '2018-10',
    sales: 61
  },
  {
    year: '2018-11',
    sales: 145
  }
];

Page({
  data: {},
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
        ddChart.interval().position('year*sales')
        ddChart.render()
    },
    onChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  startDate(e){
    dd.datePicker({
      format: 'yyyy-MM',
      startDate: '2012-12',
      endDate: '2030-12',
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
      format: 'yyyy-MM',
      startDate: '2012-12',
      endDate: '2030-12',
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
