// import Config from "../../config" ;
// let domain = "http://action.melindahealth.com/admin#/login";
// php替换成login地址
// let url = domain + '/login.php';
//access_token
let tokenurl ="https://oapi.dingtalk.com/gettoken?appkey=ding57ccs1w7198jphjz&appsecret=X_D3rF_nVwQrQr4Kp2fkOVxTO0BqBgUlKeAZ77mz5jbVCzigMJ2X_G7bOfq8Wh3b";


Page({
  data:{leader:true},
  onLoad(query) {
    //access_token 
    // dd.httpRequest({
    //   url: tokenurl,
    //   method: 'GET',
    //   data: {},
    //   dataType: 'json',
    //   success: function(res) {
    //     let access_token = res.data.access_token;
    //     //免登授权码
    //     dd.getAuthCode({
    //       success: (res) => {
    //         let authCode = res.authCode;
    //         //userid
    //         dd.httpRequest({
    //           url: "https://oapi.dingtalk.com/user/getuserinfo?access_token=" + access_token + "&code=" + authCode,
    //           method: "GET",
    //           success: function(res) {
    //             let userid = res.data.userid;
    //             //userinfo
    //             dd.httpRequest({
    //               url: "https://oapi.dingtalk.com/user/get?access_token=" + access_token + "&userid=" + userid,
    //               method: "GET",
    //               success: function(res) {
    //                 console.log(res);
    //                 //储存信息
    //                 dd.setStorage({
    //                   key: 'userinfo',
    //                   data: {
    //                     info: res.data,
    //                   },
    //                   success: function() {
    //                     dd.alert({ content: '写入成功' });
    //                   }
    //                 });
    //               },
    //             })
    //           },
    //         })
    //       },
    //       fail: (err) => {
    //         // dd.alert({ content: JSON.stringify(err) })
    //       }
    //     })
    //   },
    //   fail: function(res) {
    //     // dd.alert({ content: 'access_token fail' });
    //   }
    // });

    //userinfo------------------
    // dd.httpRequest({
    //   url: access_token_url,
    //   method: 'POST',
    //   success: function(res) {
    //     let access_token = res.data.access_token;
    //     //免登授权码
    //     dd.getAuthCode({
    //       success: (res) => {
    //         let authCode = res.authCode;
    //         //userid
    //         dd.httpRequest({
    //           url: userinfo_url,
    //           method: "POST",
    //           data: { 
    //             authCode: authCode, 
    //             access_token: access_token
    //             },
    //           dataType: "json",
    //           success: function(res) {
    //             let userinfo = res.userinfo;
    //             //储存信息
    //             // dd.setStorage({
    //             //   key: 'userinfo',
    //             //   data: {
    //             //      userinfo = res.userinfo;
    //             //   },
    //             //   success: function() {
    //             //     // dd.alert({ content: '写入成功' });
    //             //   }
    //             // });
    //           },
    //         })
    //       },
    //       fail: (err) => {
    //         dd.alert({ content: JSON.stringify(err) })
    //       }
    //     })

    //   },
    //   fail: function(res) {
    //     dd.alert({ content: 'access_token fail' });
    //   }
    // });




  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

});