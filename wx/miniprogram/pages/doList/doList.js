const db = wx.cloud.database();
// const _ = db.command;
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
    idList: [],
    allInfo: [],
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
        state: this.data.state,
      }
    }).then(res => {
      this.select()
    })
  },
  select() {
    if (this.data.swithState == true) {
      schedule.where({
        state: false
      }).get().then(res => {
        this.setData({
          allInfo: res.data
        })
      })
    } else {
      schedule.get().then(res => {
        this.setData({
          allInfo: res.data
        })
      })
    }
  },
  switchChange(e) {
    this.setData({
      swithState: e.detail.value,
    })
    this.select();
  },
  finish(e) {
    schedule.doc(e.target.dataset.id).update({
      data: {
        state: true //点击完成state为true
      },
    }).then(res => {
      this.select()
    })
    // this.select()放这里为什么不执行???
  },
  delet(e) {
    schedule.doc(e.target.dataset.id).remove().then(res => {
      this.select()
    })
  },
  isCheck() {
    this.setData({
      isCheck: !this.data.isCheck
    })
  },
  check(e) {
    this.setData({
      idList: e.detail.value
    })
  },
  group(e) {
    wx.cloud.callFunction({
      name: 'group',
      data: {
        type: e.target.dataset.groupstate,
        idList: this.data.idList
      }
    }).then(res => {
      console.log(res);
      this.select()
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