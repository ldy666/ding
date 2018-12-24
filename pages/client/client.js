Page({
  data: {
    items: [
      {
        name: '客户1',
      },
      {
        name: '客户2',
      },
      {
        name: '客户3',
      },
    ],
  },
  onLoad() {},
  clientDetail(){
    dd.navigateTo({
      url: '/pages/clientDetail/clientDetail'
    })
  },
  handleSubmit(e){
    this.setData({
      keywords: e,
    })
  }
});
