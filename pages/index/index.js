//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:[
      { uuid: "1", img: "../img/picture.png", name: "席友梅", job: "美甲师", star: "../img/picture.png" },
      { uuid: "1", img: "../img/picture.png", name: "席友梅", job: "美甲师", star: "../img/picture.png" },
      { uuid: "1", img: "../img/picture.png", name: "席友梅", job: "美甲师", star: "../img/picture.png" },
    ],
    currentTab: 0,
    composite: [
      { img: "../img/picture.png", name: "夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head: "../img/card.png", personName: "安迪" },
      { img: "../img/picture.png", name: "夏日显白清新白色恋人爆钻款夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head: "../img/card.png", personName: "关雎尔" },
      { img: "../img/picture.png", name: "夏日清凉！显白人鱼蓝亮片钻甲", xz: "258", yl: "366", like: "200", head: "../img/card.png", personName: "曲筱绡" }
    ],
    mendTitle:"Bullet韩式美甲",
    mendMatter:"buller韩式美甲，韩国保植物catsby甲油胶，透光性好，欢迎各位小主前来韩式美甲小店！我的小店开业啦！我将以五星的服务和技术出现在我的小主面前，擅长光疗延长甲，损坏免费上门修补！",
    recommendDisplay:false,
    vipCard:false
  },
  //综合销量评价切换
  navbarTap: function (e) {   
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //店铺介绍
  clickRecommend:function(){
    this.setData({ recommendDisplay:true})
  },
  clickRecommendClose:function(){
    this.setData({ recommendDisplay: false })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
//跳转我的会员
  clickCard:function(){
    wx.navigateTo({
      url: '../secondPages/card/card'
    })    
  },
  //跳转更多商户
  clickLookover:function(){
    wx.navigateTo({
      url: '../secondPages/store/store'
    })
  },
  //跳转收藏
  clickCollect:function () {
    wx.navigateTo({
      url: '../secondPages/collect/collect'
    })
  },

})
