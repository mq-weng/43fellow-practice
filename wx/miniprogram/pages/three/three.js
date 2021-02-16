// miniprogram/pages/three/three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  get() {
    wx.cloud.callFunction({
        // 云函数名称
        name: 'cloudFn',
        data: {
          param: "select"
        }
      })
      .then(res => {
        console.log(res.result)
      })
      .catch(console.error)
  },
  set() {
    wx.cloud.callFunction({//调用云函数
      name: "cloudFn",
      data: {
        param: "set"
      }
    }).then(res => {
      console.log(res);
    })
  },
  add(){
    wx.cloud.callFunction({
      name: "cloudFn",
      data:{
        param: "add"
      }
    })
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

  }
})