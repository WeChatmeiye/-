// pages/orderPages/orderAppraise/orderAppraise.js

// const qiniuUploader = require("../../../utils/qiniuUploader");
Page({

  data: {
    current:-1,
    level:"满意度" ,
    files:[]  //评价图片 
  },
  clickImg:function(e){


    this.setData({ current: e.currentTarget.dataset.item})
    switch (this.data.current) {
      case '0':{
        return this.setData({ level: "不满意"});
      }
      case '1':{
        return this.setData({ level: "不满意" });
      }
      case '2': {
        return this.setData({ level: "基本满意" });
      }
      case '3': {
        return this.setData({ level: "很满意" });
      }
      case '4': {
        return this.setData({ level: "超出期待" });
      }
    }

  },

  onLoad: function (options) {
  
  },

  // uuid: function () {
  //   var s = [];
  //   var hexDigits = "0123456789abcdef";
  //   for (var i = 0; i < 36; i++) {
  //     s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  //   }
  //   s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  //   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  //   s[8] = s[13] = s[18] = s[23] = "-";

  //   var uuid = s.join("");
  //   return uuid;
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  chooseImage: function (e) {

    var that = this;
    // initQiniu(that)
    if (that.data.files.length <= 4) {
      wx.chooseImage({
        count: 5 - that.data.files.length,
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            files: that.data.files.concat(res.tempFilePaths),
            url: res.tempFilePaths[0]
          });
          var filePath = res.tempFilePaths[0]
          console.log(that.data.files)
          var datas = that.data.datas
          //上传七牛
          // that.uuid()
          // var uuid = that.uuid()
          // qiniuUploader.upload(filePath, (res) => {

          //   datas.push(res.key)

          //   that.setData({
          //     'imageURL': res.imageURL,
          //     datas: datas
          //   })
          //     ;
          // }, (error) => {
          // }, {
          //     region: 'ECN',
          //     uploadURL: 'https://up.qbox.me',

          //     domain: 'http://assets.vdongchina.com', // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
          //     key: "tmp/study/" + uuid, // 自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
          //     // 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
          //     uptoken: that.data.token, // 由其他程序生成七牛 uptoken
          //   });
        }
      })
    } else {
      wx.showToast({
        title: '您上传的图片太多了',
        icon: 'loading',
        duration: 2000
      })
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 删除上传图片
   */
  remove: function (e) {
    var index = e.currentTarget.dataset.index;
    var files = this.data.files;
    var array = [];
    for (var i = 0; i < files.length; i++) {
      if (i != index) {
        array.push(files[i])
      }
      this.setData({
        files: array
      })
    }
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