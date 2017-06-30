// pages/store/store.js
Page({
  data: {
    currentTab: 0,
    isNo:false,
    composite: [
    { img: "../../img/picture.png", name: "夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head:"../../img/card.png",personName:"安迪"},
    { img: "../../img/picture.png", name: "夏日显白清新白色恋人爆钻款夏日显白清新白色恋人爆钻款", xz: "258", yl: "366", like: "200", head: "../../img/card.png", personName: "关雎尔" },
    { img: "../../img/picture.png", name: "夏日清凉！显白人鱼蓝亮片钻甲", xz: "258", yl: "366", like: "200", head: "../../img/card.png", personName: "曲筱绡" }
    ],
  },
//综合销量评价切换
  navbarTap: function (e) {
    this.setData({
      currentTab: e.target.dataset.idx
    })
  },
  onLoad: function (options) {
  
  }



})