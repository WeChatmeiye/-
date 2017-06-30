// pages/levelPages/newAddress/newAddress.js
Page({

  data: {
    uuid:1,
    items: [
      {title: "默认地址"},
    ], 
  },
  checkboxChange: function (e) {
    var checked = e.detail.value;
    var changed = {};
    for (var i = 0; i < this.data.items.length; i++) {
      if (checked.indexOf((this.data.uuid).toString()) !== -1) {
        changed['items[' + i + '].checked'] = true;

      } else {
        changed['items[' + i + '].checked'] = false
      }
    }

    this.setData(changed)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

})