Page({
    data: {
      items: [
        {
          name: '周',
          fee: '500',
        },
        {
          name: '吴',
          fee: '300',
        },
        {
          name: '郑',
          fee: '200',
        },
        {
          name: '王',
          fee: '100',
        },
      ],
    },
    onLoad() {},
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
