// pages/actors/manicurist/manicurist.js
Page({

  data: {
    currentTab:0,
    wrap: [
      { head: "../../img/head1.png", name: "席友梅", job: "美甲师", star: "../../img/start1.png",count:3, },
      { head: "../../img/head2.png", name: "席友梅", job: "美甲师", star: "../../img/start1.png", count: 5,},
      { head: "../../img/head3.png", name: "席友梅", job: "美甲师", star: "../../img/start1.png", count: 4,},
    ],
    grade:["初级","一般","优秀","卓越","顶级"],//评价等级
    sort: ["综合排序", "好评由高到低","价格由高到低"],//排序
    sorts:0,//默认排序
    sortShow:false,//排序列表是否显示
    navs: ["综合排序", "销量","筛选"],
    filtrate: ["项目类型", "销量", "匠星","性别"],
    filtrates:0,
    filtrateType: ["不限", "美甲师", "美容师", "美睫师", "造型师", "美发师", "健身教练"],
    filtrateTypes:0,
    filtrateShow:false,
    currentTabs:false,
    currentTab:0
  },
  navbarTap: function (e) { //点击头部类别
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
    })
  },
  SalesSort(e){
  	 this.setData({
      currentTab: e.currentTarget.dataset.idx,
      currentTabs:!this.data.currentTabs
    })
  },
  screen(e){
  	 this.setData({
      filtrateShow:!this.data.filtrateShow
    })
  },
  onLoad: function (options) {
  
  },
  sort(e){ //排序
    const navs = this.data.navs,
      sort = this.data.sort;
    var inx = e.currentTarget.dataset.index;
    navs[0] = sort[inx]
    this.setData({
      sorts:inx,
      sortShow:false,
      navs: navs
    })
  },
  filtrates(e){  //点击筛选类别
    var inx = e.currentTarget.dataset.index;
    this.setData({
      filtrates: inx,
    })
  },
  filtrateTypes(e){
    var inx = e.currentTarget.dataset.index;
    this.setData({
      filtrateTypes: inx,
    })
  },
  empty(e){
    this.setData({
      filtrateShow:false //筛选清空
    })
  },
  submit(e){
    this.setData({
    	currentTab: 2,
      filtrateShow: false //筛选点击确定
    })
  },
  close(e){
    this.setData({
      filtrateShow: false//筛选清空
    })
  },
  //个人详情
  toManicuristIndex:function(){
    wx.navigateTo({
      url: '../manicuristIndex/manicuristIndex'
    }) 
  }
})