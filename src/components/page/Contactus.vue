<template>
    <div class="container">
      <div class="row row-contactus-info">
        <div class="col-md-4 col-xs-12">
          <span class="icon-contactus icon-address"></span>
          <div class="contactus-item">
            <p>注册地址：</p>
            <p>深圳市龙华新区民治大道民泰大厦621-622</p>
            <p>注册时间：2013年3月</p>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <span class="icon-contactus icon-tel"></span>
          <div class="contactus-item">
            <p>联系电话：</p>
            <p>0755-83666797</p>
            <p>企业邮箱：</p><p>hongshengweixin@163.com</p>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <span class="icon-contactus icon-website"></span>
          <div class="contactus-item">
            <p>官网地址：</p><p>www.hongshengweixin.com</p>
            <p>移动网址：</p><p>m.hongshengweixin.cn</p>
          </div>
        </div>
      </div>
      <div class="row changde-contactus-info">
        <div class="col-md-4 col-xs-12 contact-box">
          <h2>宏升微芯</h2>
          <p><i class="icon-tel"></i>客服电话：0755-83666797</p>
          <p><i class="icon-money"></i>产品咨询：13699817392&nbsp;&nbsp;&nbsp;陈先生</p>
          <p><i class="icon-ask"></i>联系邮箱：huyueshan@163.com</p>
          <p><i class="icon-addr"></i>公司地址：广东省深圳市龙华新区</p>
          <p><i></i>民治大道民泰大厦621-622</p>
        </div>
        <div class="col-md-8 col-xs-12" id="map">
        </div>
      </div>

    </div>

</template>

<script>

export default {
  name: 'AboutMe',
  components: {
//    homeNavBar
  },
  data () {
    return {
      names:'联系我们',
//      username: 'Welcome to Your Vue.js App'
    }
  },
  mounted (){
    (function($) {
      $(function(){
        baiduMap('map','114.048505','22.619759','宏升微芯科技有限公司','深圳市龙华新区民治大道民泰大厦621-622');
      });
    })(jQuery);
  }
}
</script>


<style scoped>
.container{
  padding:0 15px;
}

</style>
