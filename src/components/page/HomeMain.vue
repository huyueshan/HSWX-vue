<template>
  <div id="content">
    <div class="container">
      <Home-about></Home-about>
      <Home-product></Home-product>
      <Home-contactus></Home-contactus>
    </div>
  </div>
</template>

<script>
  import HomeAbout from '../base/Home-about'
  import HomeProduct from '../base/Home-product'
  import HomeContactus from '../base/Home-contactus'

export default {
  name: 'HoneMain',
  components: {
    HomeAbout,
    HomeProduct,
    HomeContactus

  },
  data () {
    return {
      names:"HOME",
      username: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
  .head-nav{
    width:100%;
    background-color: #676767;
    text-align: center;
    color: #fff;
  }
  ul{
    list-style: none;
  }
  ul li{
    display:inline-block;
    padding:0 20px;
    line-height:36px;
  }
  .container{
    padding:0 15px;
  }

</style>
