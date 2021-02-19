const db = wx.cloud.database();
const schedule = db.collection('schedule');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swithState: false,
    state: false,
    inputValue: "",
    info: [],
  },
  input(e) {
    console.log(e.detail.value);
    this.setData({
      inputValue: e.detail.value
    });
  },
  add() {
    schedule.add({
      data: {
        info: this.data.inputValue,
        state: this.data.state
      }
    }).then(res => {
      console.log(res);
    })
  },
  select() {
    schedule.get().then(res => {
      console.log(res);
      this.setData({
        info: res.data
      })
    })
  },
  switchChange(e) {

  },
  finish() {
    schedule.update({
      
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
    this.select();
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