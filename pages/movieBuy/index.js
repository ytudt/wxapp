//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '大家好,我是于小鱼',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {

  },
})
