// pages/secondPages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    noRecord:false,
    noCoupons:false,
    composite:[
      { title: "罗蒙环球城银泰城店", time: "2017-05-03", record:[
        { name:"夏日清凉！美人鱼钻石钻甲",num:"1",price:"100"},
        { name: "夏日清凉！美人鱼钻石钻甲", num: "1", price: "100" },

      ]
      },
      {
        title: "罗蒙环球城银泰城店", time: "2017-05-31", record: [
          { name: "夏日清凉！美人鱼钻石钻甲", num: "1", price: "100" },
        ]
      },
      {
        title: "罗蒙环球城银泰城店", time: "2017-05-03", record: [
          { name: "夏日清凉！美人鱼钻石钻甲", num: "1", price: "100" },
          { name: "夏日清凉！美人鱼钻石钻甲", num: "1", price: "100" },
        ]
      },            
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.target.dataset.idx
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