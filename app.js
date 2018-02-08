//app.js

App({
  // 全局变量
  globalData:{
    header: { 'Cookie': '' }, //这里还可以加入其它需要的请求头，比如'x-requested-with': 'XMLHttpRequest'表示ajax提交，微信的请求时不会带上这个的
    serverUrl :'http://127.0.0.1:8080/jk_web/',
    userInfo:null,//用户信息
    location:null,//经纬度信息
    city:{"city":"郑州","province":"河南","district":""},//用户城市信息
    bid:null,//用户bid
    systemInfo : null,//系统信息
    shopCarGoods:{},//购物车商品
    islogin : false//是否登录

  },
  onLaunch: function () {    
    var that = this;
    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：  ' + code);

          // --------- 发送凭证 ------------------
          wx.request({
            url: that.globalData.serverUrl+'loginFromWeixin.action',
            data: { weixincode: code },
            success:function(res){
              console.log(res.data);
              getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data;
            }
          })
          // ------------------------------------

        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });


  },
  onShow:function(){
    var that = this;
      wx.getStorage({
      key: 'globalData',
      success: function(res){
        that.globalData = res.data;
        console.log(that.globalData);
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  onHide:function(){
    var that = this;
    wx.setStorage({
      key: 'globalData',
      data: that.globalData,
      success: function(res){
        console.log(res);
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  onError:function(){
    var that = this;
    wx.setStorage({
      key: 'shopCarGoods',
      data: that.globalData.shopCarGoods,
      success: function(res){
        console.log(res)
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  }  
})