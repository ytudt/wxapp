//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    hiddenLoading: false,
    src: 'https://p0.meituan.net/165.220/movie/75fc3610bfe91b6ad8ae5f186f1c2fd6294933.jpg',
    // movieList: [{
    //   "showInfo": "今天169家影院放映2425场",
    //   "late": false,
    //   "sn": 0,
    //   "cnms": 0,
    //   "snum": 326289,
    //   "imax": true,
    //   "showDate": "",
    //   "src": "",
    //   "ver": "2D/3D/IMAX 3D/中国巨幕/全景声",
    //   "rt": "2018-04-13上映",
    //   "sc": 9.0,
    //   "img": "https://p0.meituan.net/165.220/movie/75fc3610bfe91b6ad8ae5f186f1c2fd6294933.jpg",
    //   "dur": 108,
    //   "nm": "狂暴巨兽",
    //   "wish": 160742,
    //   "3d": true,
    //   "pn": 94,
    //   "scm": "",
    //   "preSale": 0,
    //   "vd": "",
    //   "dir": "布拉德·佩顿",
    //   "star": "道恩·强森,娜奥米·哈里斯,玛琳·阿克曼",
    //   "cat": "动作,冒险,科幻",
    //   "time": "",
    //   "id": 341624
    // },
    //   {
    //     "showInfo": "今天168家影院放映1273场",
    //     "late": false,
    //     "sn": 0,
    //     "cnms": 0,
    //     "snum": 23085,
    //     "imax": false,
    //     "showDate": "",
    //     "src": "",
    //     "ver": "2D",
    //     "rt": "本周五上映",
    //     "sc": 8.5,
    //     "img": "https://p0.meituan.net/165.220/movie/8b154402ef3ac5d59e4a89649f4f5190375170.jpg",
    //     "dur": 96,
    //     "nm": "21克拉",
    //     "wish": 119444,
    //     "3d": true,
    //     "pn": 159,
    //     "scm": "破产拜金女，重新寻伴侣",
    //     "preSale": 0,
    //     "vd": "",
    //     "dir": "何念",
    //     "star": "郭京飞,迪丽热巴,大鹏",
    //     "cat": "喜剧,爱情",
    //     "time": "",
    //     "id": 344950
    //   }],
    movieList: [],
  },
  onMovieClick(event){
    console.log('detail');
    console.log(event.currentTarget.id);
    wx.navigateTo({
      url: '../movieDetail/index'
    })
  },
  onBuyClick(event){
    console.log('buy');
    console.log(event.currentTarget.id);
    wx.navigateTo({
      url: '../movieBuy/index'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10',
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data.movies);
        this.setData({
          hiddenLoading: res.data.data.movies.length,
          movieList: res.data.data.movies,
        });
      }
    })
  },
})
