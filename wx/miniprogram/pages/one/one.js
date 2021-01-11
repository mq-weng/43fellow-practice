// miniprogram/pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },
add1(){//小程序逻辑层与数据层分开，要调用setData方法进行同步
  this.setData({
    num:this.data.num + 1,
  });
},
add5(e){
  this.setData({
    num:this.data.num + Number.parseInt(e.target.dataset.step),//step时string类型需要强制转换
    // num:this.data.num + e.target.dataset.step,
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  /*获取传过来的数据 */
  onLoad: function (options) {
    console.log(options)//id=111
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