// pages/levelPages/goods/goods.js
Page({
  data: {

    slider: [
      { url: "../../img/Bitmap1.png" },
      { url: "../../img/Bitmap2.png" },
      { url: "../../img/Bitmap3.png" },
    ],
    indicatorDots: true,
    autoplay: true,
    indicatorColor: 'rgba(255,76,144,1)',
    indicatorActiveColor: '#ffffff',
    interval: 5000,
    duration: 1000,
    wrap: [
      { head: "../../img/head1.png", name: "席友梅", job: "美甲师", star: "../../img/picture.png" },
    ],
    time: [
      {
        date:"今天",times:[
          { shij: 8, isable: false }, { shij: 9, isable: false }, { shij: 10, isable: true }, { shij: 11, isable: true }, { shij: 12, isable: true }, 
          { shij: 13, isable: true }, { shij: 14, isable: true }, { shij: 15, isable: false }, { shij: 16, isable: false }, { shij: 17, isable: true },
          { shij: 18, isable: true }, { shij: 19, isable: false }, { shij: 20, isable: true }, { shij: 21, isable: true }, { shij: 22, isable: false },           { shij: 23, isable: false }, { shij: 24, isable: true }
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
  onLoad: function (options) {
  
  },
  clickTimgood:function(){
    wx.navigateTo({
      url: '../timGood/timGood'
    })
  }

})