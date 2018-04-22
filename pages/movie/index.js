//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    movieList: [],
    isLoading: false,
    loadFinished: false,
    pageSize: 10,
  },
  onMovieClick(event){
    console.log(event.currentTarget.id);
    wx.navigateTo({
      url: '../movieDetail/index'
    })
  },
  onBuyClick(event){
    console.log(event.currentTarget.id);
    wx.navigateTo({
      url: '../movieBuy/index'
    })
  },
  onScrollBottom(){
    let offset = this.data.movieList.length;
    this.getMovieList(offset);
  },
  getMovieList(offset){
    let data = this.data;
    if(data.isLoading || data.loadFinished) return;
    this.setData({
      isLoading: true,
    });
    offset === 0 && (wx.showLoading({
      title: '加载中~',
    }));
    const pageSize = data.pageSize;
    wx.request({
      url: 'https://m.maoyan.com/movie/list.json',
      method: 'GET',
      data: {
        type: 'hot',
        limit: pageSize,
        offset: offset,
      },
      success: (res) => {
        let movies = res.data.data.movies;
        let loadFinished = movies.length < data.pageSize;
        let movieList = data.movieList.concat(movies);
        this.setData({
          loadFinished,
          movieList,
        });
      },
      fail: () => {
        setTimeout(() => {
          offset === 0 && (wx.showToast({
            title: '加载失败请稍后再试~',
            icon: 'none',
          }));
        }, 100);

      },
      complete: () => {
        wx.hideLoading();
        this.setData({
          isLoading: false,
        });
      },
    })
  },
  onLoad: function () {
    this.getMovieList(0);
  },
})
