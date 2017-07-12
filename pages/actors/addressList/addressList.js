// pages/actors/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityShow: false,
    provinces: ["北京", "上海", "浙江"],
    citys: ["宁波", "杭州"],
    countys: ["慈溪", "鄞州", "江东", "江北"],
    cityShow: false,
    value: [2, 1, 1],
    list: [
      { name: "宁波银泰城店", ress: "鄞州区罗蒙环球城77号",icon: "../../img/right.png",},
      { name: "宁波银泰城店", ress: "鄞州区罗蒙环球城77号",icon: "../../img/right.png",},

    ]  
  },
  bindChange: function (e) {
    const val = e.detail.value
    const vals = this.data.value
    if (vals[0] != val[0]) {
      console.log("省变化")
    }
    if (vals[1] != val[1]) {
      console.log("城市变化")
    }
    if (vals[2] != val[2]) {
      console.log("县变化")
    }

    this.setData({
      province: this.data.provinces[val[0]],
      city: this.data.citys[val[1]],
      county: this.data.countys[val[2]],
      value: val
    })
    console.log(e)
  },
  cityConfirm: function (e) {
    const val = this.data.value
    this.setData({
      city: this.data.provinces[val[0]] + this.data.citys[val[1]] + this.data.countys[val[2]],
      cityShow: false,
    })
  },
  cityCancel(e) {
    this.setData({
      cityShow: false,
    })
  },

  cityProvince(e) {
    this.setData({
      cityShow: true,
    })
  },
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