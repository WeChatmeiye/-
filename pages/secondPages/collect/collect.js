// pages/secondPages/collect/collect.js
Page({
  data: {
    currentTab: 1,
    noItem:true,
    composite:[
      { img: "../../img/Bitmap1.png", shop: "买衡力瘦脸送光子嫩肤", head: "../../img/head1.png", name: "安迪",xz: "258", yl: "366", like: "200", },
      { img: "../../img/Bitmap2.png", shop: "夏日清凉！显白人鱼蓝亮片钻甲", head: "../../img/head2.png", name: "曲筱绡", xz: "258", yl: "366", like: "200",  },
      { img: "../../img/Bitmap3.png", shop: "“网红”自然芭比妆", head: "../../img/head3.png", name: "关雎尔", xz: "258", yl: "366", like: "200", },
    ],
    wrap:[
      { head: "../../img/head1.png",name: "席友梅", job: "美甲师", star: "../../img/picture.png"},
      { head: "../../img/head2.png", name: "席友梅", job: "美甲师", star: "../../img/picture.png" },
      { head: "../../img/head3.png", name: "席友梅", job: "美甲师", star: "../../img/picture.png" },
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.target.dataset.idx
    })
  },
  onLoad: function (options) {
  
  },

})