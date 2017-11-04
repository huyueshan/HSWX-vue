<template>
  <div id="app">
    <header>
      <img class="top-img" :src="imgPath">
    </header>
    <home-nav-bar @nowactives="nowactive"></home-nav-bar>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="bline"></div>
    <footer class="friline">
      <span>©版权归深圳市宏升微芯科技</span>
    </footer>

  </div>
</template>

<script>
  import homeNavBar from "./components/base/HomeNavBar"
  import $ from 'jquery'
export default {
  name: 'app',
  data(){
    return {
      imgPath: require('./assets/home-header-img.jpg'),
      imgPaths:[
        {
          src: require('./assets/home-header-img.jpg'),
          title: 'HOME'
        },
        {
          src: require('./assets/product-header-img.jpg'),
          title: '产品中心'
        },
        {
          src: require('./assets/about-header-img.jpg'),
          title: '关于我们'
        },
        {
          src: require('./assets/about-header-img.jpg'),
          title: '人才招聘'
        },
        {
          src: require('./assets/contact-header-img.jpg'),
          title: '联系我们'
        }
      ],
      mainPath:""
    }
  },
  computed:{
    headerImgSrc(){
//      this.imgPath
    }
  },
  components: {
    homeNavBar
  },
  methods:{
    nowactive(i){
      this.imgPath=this.imgPaths[i].src;
      console.log(i)
    }
  },
  mounted(){
  }
}
</script>
<!--<style src="./css/hswx.css"></style>-->
<!--<style src="./css/animate.css"></style>-->
<style>
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');

  @import url("./css/hswx.css");
  @import url("./css/animate.css");
  header{
    width:100%;
  }
  .top-img{

    width:100%;
    height:auto;
  }
  .container{
    width:100%;
    padding:0;
  }
</style>

