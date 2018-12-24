Page({
  data: {
    array: ['全部','赵', '钱', '孙', '李'],
    items: [
      {
        name: '赵',
      },
      {
        name: '钱',
      },
      {
        name: '孙',
      },
      {
        name: '李',  
      },
    ],
  },
  onLoad() {},
  handleSubmit(e) {
    this.setData({
      keywords: e,
    })
  },
  salesDetail(){
    dd.navigateTo({
      url: '/pages/salesDetail/salesDetail'
    })
  }
});
