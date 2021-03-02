const db = wx.cloud.database();
const _ = db.command;
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
    this.select()
  },
  select() {
    console.log(this.data.idList)
    if (this.data.swithState == true) {
      schedule.where({
        state: false
      }).get().then(res => {
        // console.log(res);
        this.setData({
          allInfo: res.data
        })
      })
    } else {
      schedule.get().then(res => {
        // console.log(res);
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
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    schedule.doc(id).update({
      data: {
        state: true //点击完成state为true
      },
    }).then(res => {
      console.log(res)
    })
    this.select()
  },
  delet(e) {
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    schedule.doc(id).remove().then(res => {
      console.log(res)
    })
    this.select()
  },
  isCheck() {
    this.setData({
      isCheck: !this.data.isCheck
    })
  },
  check(e) {
    console.log(e)
    this.setData({
      idList: e.detail.value
    })
  },
  group(e) {
    console.log(e)
    if (e.target.dataset.groupstate == 'finish') {
      schedule.where({
        _id: _.in(this.data.idList)
      }).update({
        data: {
          state: true
        }
      }).then(res => {
        console.log(res)
      })
    } else {
      schedule.where({
        _id: _.in(this.data.idList)
      }).remove().then(res => {
        console.log(res)
      })
    }
    this.select()
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