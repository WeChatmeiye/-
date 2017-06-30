// pages/levelPages/Address/Address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    checked: null,
    address:'',
    items:[
      { uuid: 300, title: "coffee(罗蒙环球城店111)", address:"浙江省宁波市罗蒙环球城银泰城5F"},
      { uuid: 400, title: "VOX.coffee(南部商务区店222)", address: "浙江省宁波市南部商务区汇港大厦1F" }
    ],
    addss:[
      { uuid: 300, title: "coffee(罗蒙环球城店111)", address: "浙江省宁波市罗蒙环球城银泰城5F" },
      { uuid: 400, title: "VOX.coffee(南部商务区店222)", address: "浙江省宁波市南部商务区汇港大厦1F" }    
    ],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  
  checkboxChange: function (e) {
    var checked = e.detail.value;
    var changed = {};
    var address = '';
    for (var i = 0; i < this.data.items.length; i++) {     
      if (checked.indexOf((this.data.items[i].uuid).toString()) !== -1) {
        changed['items[' + i + '].checked'] = true;
        address = this.data.items[i].title
      } else {
        changed['items[' + i + '].checked'] = false
      }
    }
    console.log(address)    
    this.setData(changed)
    this.setData({ address: address})
  },
  onLoad: function (options) {
  
  },



})