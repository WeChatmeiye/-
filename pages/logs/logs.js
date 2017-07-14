//logs.js
Page({
  data: {
    nodes: ''
    // [
    //   {
    //     name: 'p',
    //     attrs: {
    //       class: 's',
    //       style: 'box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(64, 64, 64); white-space: normal; background-color: rgb(255, 255, 255); padding: 0px;'
    //     },
    //     children: [
    //       {
    //         name: 'img',
    //         attrs: {
    //           class: 'div_class',
    //           style:"width:100%",
    //           src: 'http://assets.vdongchina.com/qy/XRGjtz2SIeyvxYkGcmQ'
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     name: 'p',
    //     attrs: {
    //       class: 's',
    //       style: 'box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(64, 64, 64); white-space: normal; background-color: rgb(255, 255, 255); padding: 0px;'
    //     },
    //     children: [
    //       {
    //         name: 'span',
    //         attrs: {
    //           class: 'div_class',
    //           style:'box-sizing: border-box; font-family: 微软雅黑;'
    //         },
    //         children: [
    //           {
    //             type: 'text',
    //             text: '中国领先的微信生态链增强服务平台'
    //           }
    //         ]
    //       },       
    //     ]
    //   },      
    // ]

  },
  tap() {
    console.log('tap')
  },
  onLoad(){
    var that = this
    wx.request({
      url: 'http://gw.vdongchina.com/wMcQKvDmQdKypP0uiYr/basic/mgt/imagetext/select/id', //仅为示例，并非真实的接口地址
      data: {
        id:8
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.imageText.content)
        that.setData({ nodes: res.data.imageText.content})
      }
    })
  }
})
