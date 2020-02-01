Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    navList:[],
    swiperList:[],
    videosList: [] 
  },


  activeNav(e){
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
   /**
    * 获取首页导航数据
    */
  getNavList(){
    wx.request({
      url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
        success:(res)=>{
        if(res.data.code === 0){
          this.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList(){
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper",
      success: (res)=>{
        if(res.data.code === 0){
          this.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**获取视频数据 */
  getVideosList(){
    wx.request({
      url:"https://www.bilibili.com/index/ding.json ",
      success: (res)=>{
        if(res.statusCode === 200){
          this.setData({
            videosList: res.data.movie
          })
          
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getNavList()
      this.getSwiperList()
      this.getVideosList()
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
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