// pages/newProduct/newProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
/**
 * 提交新商品信息到服务器
 */
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    console.log("new product info :"+formData);
     
    wx.request({
      url: getApp().globalData.serverUrl + 'productAction_insert.action',
      data: formData,
      header: {
        'Content-Type': 'application/json',
        'Cookie': getApp().globalData.header.Cookie
      },
      success: function (res) {
        wx.switchTab({
          url: '/pages/product/product'
        })

      }
    })
  }
})