// pages/clubCard/clubCard.js

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1900; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
     man:true,
     provinces:["北京","上海","浙江"],
     citys:["宁波","杭州"],
    countys: ["慈溪","鄞州","江东","江北"],
    cityShow:false,
    value:[2,1,1],
    city:'请选择所在省份、城市',
    birthday:"生日",
    years: years,
    months: months,
    days: days,
    values:[117,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  phone: function () {
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  gender: function (e) {
     this.setData({
       man:!this.data.man
     })
  },
  bindChange: function (e) {
    const val = e.detail.value
    const vals = this.data.value
    if (vals[0] != val[0]){
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
  birthday: function (e) { //选择生日的操作
    const val = e.detail.value
    console.log(val)
    this.setData({
      values: val
    })
  },
  birthdayConfirm: function (e) {//选择生日的确定操作
    let val = this.data.values
    this.setData({
      birthday: this.data.years[val[0]] + "年" + this.data.months[val[1]] + "月" + this.data.days[val[2]] + "日",
      birthdayshow: false,
    })
  },
  birthdayCancel(e) {//选择生日的取消操作
    this.setData({
      birthdayshow: false,
    })
  },
  birthdayshow(e) {//点击生日的操作
    this.setData({
      birthdayshow: true,
    })
  },
  cityConfirm:function(e){
    const val = this.data.value
    this.setData({
     city: this.data.provinces[val[0]] + this.data.citys[val[1]] + this.data.countys[val[2]],
     cityShow: false,
    })
  },
  cityCancel(e){
    this.setData({
      cityShow: false,
    })
  },
  
  cityProvince(e){
    this.setData({
      cityShow: true,
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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