// pages/newOrder/newOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productListIndex: 0,
    productList: [] ,
    buyerListIndex:0,
    buyerList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //获取商品列表
    wx.request({
      url: getApp().globalData.serverUrl + 'productAction_listJson.action',
      header: {
        'Cookie': getApp().globalData.header.Cookie
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          productList: res.data
        });
      }
    });

    //获取买家列表

    wx.request({
      url: getApp().globalData.serverUrl + 'buyerAction_listJson.action',
      header: {
        'Cookie': getApp().globalData.header.Cookie
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          buyerList: res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //响应买家的选择
  buyerChange: function (e) {
    this.setData({
      buyerListIndex: e.detail.value
    })
  }  ,
  //响应商品的选择
  productChange: function (e) {
    this.setData({
      productListIndex: e.detail.value
    })
  },
  /**
 * 提交新订单信息到服务器
 */
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    console.log("new order info :" + formData);

    wx.request({
      url: getApp().globalData.serverUrl + 'orderAction_insert.action',
      data: formData,
      header: {
        'Content-Type': 'application/json',
        'Cookie': getApp().globalData.header.Cookie
      },
      success: function (res) {
        wx.switchTab({
          url: '/pages/home/home'
        })

      }
    })
  }  
})