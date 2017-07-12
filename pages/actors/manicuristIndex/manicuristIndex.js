// pages/actors/manicuristIndex/manicuristIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    addTab: 0,
    isTime:false,
    composite: [
      { img: "../../img/picture.png", name: "夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head: "../../img/card.png", personName: "安迪" },
      { img: "../../img/picture.png", name: "夏日显白清新白色恋人爆钻款夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head: "../../img/card.png", personName: "关雎尔" },
      { img: "../../img/picture.png", name: "夏日清凉！显白人鱼蓝亮片钻甲", xz: "258", yl: "366", like: "200", head: "../../img/card.png", personName: "曲筱绡" }
    ],
    items: [
      { status: '全部',num:"100" },
      { status: '待付款', num: "110"  },
      { status: '待服务', num: "150"  },
      { status: '进行中', num: "160"  },
      { status: '待评价', num: "190"  },
    ],
    time: [
      {
        date: "今天", times: [
          { shij: 8, isable: false }, { shij: 9, isable: false }, { shij: 10, isable: true }, { shij: 11, isable: true }, { shij: 12, isable: true },
          { shij: 13, isable: true }, { shij: 14, isable: true }, { shij: 15, isable: false }, { shij: 16, isable: false }, { shij: 17, isable: true },
          { shij: 18, isable: true }, { shij: 19, isable: false }, { shij: 20, isable: true }, { shij: 21, isable: true }, { shij: 22, isable: false }, { shij: 23, isable: false }, { shij: 24, isable: true }
        ]
      },
      {
        date: "明天", times: [
          { shij: 8, isable: true }, { shij: 9, isable: true }, { shij: 10, isable: true }, { shij: 11, isable: false }, { shij: 12, isable: true },
          { shij: 13, isable: true }, { shij: 14, isable: true }, { shij: 15, isable: true }, { shij: 16, isable: false }, { shij: 17, isable: true },
          { shij: 18, isable: false }, { shij: 19, isable: false }, { shij: 20, isable: true }, { shij: 21, isable: true }, { shij: 22, isable: true },
          { shij: 23, isable: true }, { shij: 24, isable: true }
        ]
      },
      {
        date: "后天", times: [
          { shij: 8, isable: true }, { shij: 9, isable: true }, { shij: 10, isable: false }, { shij: 11, isable: true }, { shij: 12, isable: true },
          { shij: 13, isable: false }, { shij: 14, isable: true }, { shij: 15, isable: true }, { shij: 16, isable: false }, { shij: 17, isable: false },
          { shij: 18, isable: true }, { shij: 19, isable: true }, { shij: 20, isable: true }, { shij: 21, isable: true }, { shij: 22, isable: true },
          { shij: 23, isable: true }, { shij: 24, isable: false }
        ]
      },
    ]    

  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  navitemTap: function (e) {
    this.setData({
      addTab: e.currentTarget.id
    });
  },
  showTime:function(){
    this.setData({ isTime:true})
  },
  hideTime:function(){
    this.setData({ isTime: false })
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