const db = wx.cloud.database()//初始化数据库
const fellow43 = db.collection('fellow43');
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  addvalue(e){
    // console.log(e.detail.value);
    this.setData({
      bye: e.detail.value,
      hello: '你好',
    })
  },
  add(){
    fellow43.add({//添加数据
      data: {
        bye: this.data.bye,//记得加上data
        hello: this.data.hello,
      }
    }).then(res => {
      console.log(res);
    })
  },
  select(){
    /*fellow43.get().then(res => {//查询全部
      console.log(res);
    })*/
    /*
    fellow43.where({//获取多个记录的数据,按条件查询
      bye: '再见'
    }).get().then(res => {
      console.log(res);
    })*/
    
    //获取一个记录的数据
    // fellow43.doc("b00064a7602a135d050ed8de66a6385d").get().then(res => {
    //   console.log(res);
    // })
    //
  
    fellow43.where({//查询指令
      bye: _.in(['ss']),
    }).get().then(res => {
      console.log(res)
    })
  },
  update(){//更新数据update(替换更新一个记录set)
    fellow43.doc("b00064a7602a1bfa05105c9a57f98cce").update({
     data: {
      num: _.inc(10)
     }
    }).then(res => {
      console.log(res)
    })
  },
  delete(){//删除一条记录
    fellow43.doc("28ee4e3e602a11ef0559228f6c6888ab").remove().then(res => {
      console.log(res);
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