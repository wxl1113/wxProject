// pages/movieDetail/movieDetail.js
Page({
  data:{
    detail:{},
    detailList:[
      
    ]
  },
  /*playVideo:function(event){
    var idx = event.target.dataset.idx;
    console.log(event.target.dataset.idx)
    var that = this;
    that.setData({
      video : this.data.videoList[idx]
    })
  },*/
  onLoad:function(options){
    //console.log(options.id)
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight - 50
        })
      }
    })
    var id = this.data.detail.id; 
    var optId = options.id;
    that.setData({
      id:options.id,
      nm:options.nm
    })
   wx.request({
     url: 'https://m.maoyan.com/movie/' + optId + '.json',
     method: 'GET',
     success: function(res){
       // success
       var list = res.data.data.MovieDetailModel;
       console.log(list)
       console.log(res.data.data.CommentResponseModel.hcmts);
       var comm = res.data.data.CommentResponseModel.hcmts;
       var len = res.data.data.MovieDetailModel.dra.length-4;
       that.setData({
         dir: list.dir,
         ver: list.ver,
         img: list.img,
         cat: list.cat,
         rt: list.rt,
         sc: list.sc,
         src: list.src,
         dur: list.dur,
         dra: list.dra.substring(3,len),
         vd: list.vd,
         wish: list.wish,
         comm1: comm[0].content,
         comm2: comm[1].content,
         comm3: comm[2].content,
         time1: comm[0].time,
         time2: comm[1].time,
         time3: comm[2].time,
         nick1: comm[0].nick,
         nick2: comm[1].nick,
         nick3: comm[2].nick
       })
     }
   })
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})