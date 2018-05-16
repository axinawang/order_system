Page({
  data:{
    "orderList" : null,//轮播头信息
    "icon_list" : null, //icon
    "sec_kill_round_info" : null,//秒杀
    "host_good_list":null,//热卖商品列表
    
  },
  toCreate:function(){
    //打开创建订单页面
    wx.navigateTo({
      url: '/pages/newOrder/newOrder'
    })
  },
  onLoad:function(options){
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    console.log("order on show" + getApp().globalData.serverUrl);
    var that = this;
    //
    wx.request({
      url: getApp().globalData.serverUrl + 'orderAction_listJson.action',
      header: {
        'Cookie': getApp().globalData.header.Cookie
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          orderList: res.data
        });
      }
    })
  }
  
})