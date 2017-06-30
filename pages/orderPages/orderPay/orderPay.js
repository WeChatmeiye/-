// pages/orderPages/orderPay/orderPay.js
// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
var total_micro_second = 900 * 1000;
/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }, 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - Math.floor(second / 3600) * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - Math.floor(second / 3600) * 3600 - min * 60));
  // 毫秒位，保留2位
  var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return min + ":" + sec + " ";
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}
Page({
  data: {
    clock: '',
    items: [
      { uuid: 300, title: "余额支付(当前余额￥49)", img:"../../img/balance.png"},
      { uuid: 400, title: "微信支付", img: "../../img/wechat.png"}
    ],
  },
  checkboxChange: function (e) {
    var checked = e.detail.value;
    var changed = {};
    var address = '';
    for (var i = 0; i < this.data.items.length; i++) {
      if (checked.indexOf((this.data.items[i].uuid).toString()) !== -1) {
        changed['items[' + i + '].checked'] = true;
      } else {
        changed['items[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  onLoad: function () {
    count_down(this);
  }

})