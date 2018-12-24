Page({
  data: {
    bonuslist:[
      {
        startday: '2018-11-1',
        endday: '2018-11-30',
        examineproduct:'产品1',
        examinetypes: '销售额',
        bonus: 10,
        status: '执行中',
        leader: '领导姓名',
        myname: '张三',
        note:'备注1'
      },
      {
        startday: '2018-9-3',
        endday: '2018-10-3',
        examineproduct: '产品2',
        examinetypes: '销售额',
        bonus: 100,
        status: '执行中',
        leader: '领导姓名',
        myname: '张三',
        note: '备注2'
      },
    ]
  },
  onLoad() {
    // 获取本人姓名
    dd.getStorage({
      key: 'userinfo',
      success: function(res) {
        const myname = res.data.info.name;
        // console.log(myname);
        // this.setData({ name: myname })
      }
    });
    // this.setData({ name: myname })
    //获取当月第一天和最后一天
    // const date = new Date();
    // const y = date.getFullYear();
    // const m = date.getMonth();
    // const firstDay = new Date(y, m, 1);
    // const lastDay = new Date(y, m + 1, 0);
    // const year = firstDay.getFullYear();
    // const month = firstDay.getMonth() + 1;
    // const FirstDay = year + "-" + month + "-" + firstDay.getDate();
    // const LastDay = year + "-" + month + "-" + lastDay.getDate();
    // this.setData({ firstDay: FirstDay, lastDay: LastDay });
  }, 
  // startDate(e){
  //   dd.datePicker({
  //   format: 'yyyy-MM',
  //   startDate: '2012-12-10',
  //   endDate: '2030-12-31',
  //   success: (res) => {
  //     const newdate = res.date.split('-');
  //     const newyear = newdate[0];
  //     const newmonth = newdate[1];
  //     const lastDay = new Date(newyear, newmonth , 0);
  //     this.setData({
  //       startDate: res.date,
  //       firstDay: res.date+"-"+"1",
  //       lastDay: res.date + "-" + lastDay.getDate()
  //     })
      
  //   },
  //   fail:()=>{
  //       dd.alert({
  //       content:"日期错误，请重新选择",
  //       })
  //   }
  //   });
  // },
  
  

});
