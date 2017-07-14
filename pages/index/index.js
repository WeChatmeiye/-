//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:[
      { uuid: "1", img: "../img/head1.png", name: "席友梅", job: "美甲师", star: "../img/start1.png", count: 3,},
      { uuid: "1", img: "../img/head2.png", name: "席友梅", job: "美甲师", star: "../img/start1.png", count: 4, },
      { uuid: "1", img: "../img/head3.png", name: "席友梅", job: "美甲师", star: "../img/start1.png", count: 5, },
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
    vipCard:false,
    userStatus:0,
    cardNumber: "1776 7375 0074",
    menu:[
      {id:0,title:'综合',checked:true,sort:-1},//默认第一个,sort：-1:不存在,0-向下，1-向上
      { id: 1, title: '销量', checked: false, sort: 0 },
      { id: 2, title: '评价', checked: false, sort: -1 },
    ],
  },
  //综合销量评价切换
  navbarTap: function (e) {
    var menu=this.data.menu;
    var id = e.currentTarget.dataset.idx;
    for(var i=0,len=menu.length;i<len;i++){
      if (menu[i].id==id){//当前点击item
        if (menu[i].checked){//原本就是选中item
          if (menu[i].sort == 0 || menu[i].sort==1){//需切换上下
            menu[i].sort = menu[i].sort ==1?0:1;
          }
        }
        else
        {
          menu[i].checked = true;
        }
      }else{
        menu[i].checked = false;
      }
    }
    this.setData({
      currentTab: id,
      menu: menu
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
  toCollect:function () {
    wx.navigateTo({
      url: '../secondPages/collect/collect'
    })
  },
  //跳转订单
  toOrder:function(){
    wx.navigateTo({
      url: '../orderPages/order/order'
    })    
  },
  //跳转会员卡
  toClubcard:function(){
    wx.navigateTo({
      url: '../clubCard/clubCard'
    })       
  },
  //美甲师列表
  toManicurist:function(){
    wx.navigateTo({
      url: '../actors/manicurist/manicurist'
    }) 
  },
  //门店列表
  toShopList:function(){
    wx.navigateTo({
      url: '../actors/shopList/shopList'
    })    
  },
  // 领取会员卡
  vipCard(e){
    if (!this.data.vipCard){
      this.setData({
        vipCard: true
      })
    }
     
  },
  vipCard_confirm(e){
    this.setData({
      vipCard: false
    })
  }
})
