// pages/levelPages/submitOrder/submitOrder.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isName:false, //显示提交名字电话
    userName:"",
    name:"",
    phone:"",
    isTime:false,
    currentTab:0,
    currentAdd:-2,
    times:[
    ],
    hours:[
      { hours: "08:00", isable: true},
      { hours: "09:00", isable: false },
      { hours: "10:00", isable: false },
      { hours: "11:00", isable: false },
      { hours: "12:00", isable: false },
      { hours: "13:00", isable: true },
      { hours: "14:00", isable: false },
      { hours: "15:00", isable: true },
      { hours: "16:00", isable: false },
    ],
    years:[

    ],
    choosetext:"暂不选择服务时间",
    daytext: "下单后180天内可选择服务时间",
    text:'',
    textTime:"",//服务时间
    isRight:false,
    isLeft: false,
    week:"",
  },
  //名字电话
  clickNameshow: function () {
    this.setData({
      isName: true
    })
  },
  clickNamehide:function(){
    this.setData({
      isName: false
    })
  },
  userName:function(e){
      this.setData({
        name:e.detail.value 
      })
  },
  userPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  subName:function(){
    if (this.data.name.length == 0){
      wx.showToast({
        title: '请输入名字！',
        icon:'',
        duration: 1500
      })
      return false;
    }
    if (this.data.phone.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: '',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    this.setData({
      userName:this.data.name,
      isName:false
    })    
  },

 //时间
  clickTimeshow:function(){
    this.setData({
      isTime: true
    })
  },
  clickTimehide: function () {
    this.setData({
      isTime: false
    })
  },
  
  navbarTap:function(e){
    this.setData({
      currentTab: e.currentTarget.id
    });
  },
  getWeek:function(week){
    if (week>=0&&week<7){
      switch(week){
        case 0:{
          return "周日";
        }
        case 1: {
          return "周一";
        }
        case 2: {
          return "周二";
        }
        case 3: {
          return "周三";
        }
        case 4: {
          return "周四";
        }
        case 5: {
          return "周五";
        }
        case 6: {
          return "周六";
        }
      }
    }
  },
  getDateList:function(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var week=time.getDay();
    var today = month + "/" + day;  
    //当月天数
    var count = new Date(year, month, 0).getDate();    
      var list=[];
      var newList=[[]];
      for (var i = 0; i < 30; i++) {
        var _week=(week+i)%7;//星期
        var str= (i==0?"今天":(i==1?"明天":(i==2?"后天":this.getWeek(_week))));        
        var _month = month + parseInt((day+i)/count);//月份
        var _count = new Date(year, (month + 1), 0).getDate();//当月天数
        var _day=0;
        if ((day + i >= count + _count) || parseInt((day + i) / count)==2){
          _month = month +1+ parseInt((day + i-count) / _count);
          _day=(day+i-count)%_count;
        }else{
          _day = (day + i) % count;//日期
          _count=0;
        }
        if(_day==0){
          _month-=1;
          _day =_count||count;
        }
        list.push({ day: str + (_month<10 ? "0" : "") + _month + '/' + (_day<10 ? "0" : "") + _day, isDate: true }); 
        if (_month - month!=newList.length-1){
          newList.push([]);
        }
        newList[_month - month].push({ str: str.replace(/周[\s|\S]$/, ''), year: year, month: _month, week: _week, day: (_day < 10 ? "0" : "") + _day, isDate: true });   
      }   
      console.log(newList)
      this.setData({
        week: week,
        times:list,
        years: newList
      })
   },
   //点击选择时间
  clickHours:function(e){
    this.setData({
      text : this.data.hours[e.currentTarget.id].hours,
      currentAdd: e.currentTarget.id
    });
  },
  clickChoose:function(){
    this.setData({
       text: this.data.choosetext + this.data.daytext,
       currentAdd: -1 
    });
  },
  subTime:function(){
    if (this.data.currentAdd > -2){
      this.setData({
        textTime: this.data.text,
        isTime:false
      })
    }else{
      wx.showToast({
        title: '请选择服务时间！',
        icon: '',
        duration: 1500
      })
    }   
  }, 
  clickRight:function(){
    this.setData({ isRight:true })
    this.setData({ isLeft: false })
  },
  clickLeft:function(){
    this.setData({ isLeft: true })
    this.setData({ isRight: false })
  },
  clickChecked:function(e){

    var id = parseInt(e.currentTarget.id)
    console.log(id)
    this.setData({ isLeft: true })
    this.setData({ isRight: false })  
    this.setData({
      currentTab: id + 3,
      scroll_left: (id + 3) * 160
    }) 
    
    console.log(this.data.scroll_left)
    
  },
    onLoad: function (){
      this.getDateList();
  },


})