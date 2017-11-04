<template>
  <div class="big-container">
    <div class="container" style="width:100%">
      <div class="index-box-contactus">
        <div class="box-title">
          <span class="box-title-line"></span>
          <h3>contact us</h3>
          <h2><strong>联系</strong>我们</h2>
        </div>
        <div class="row contactus-list">
          <div class="col-lg-6 col-xs-6 animate-box" data-animate-effect="fadeInLeft">
            <img src="../../assets/contactus-map.png" alt="联系我们-地图">
          </div>
          <div class="col-lg-6 col-xs-6 animate-box" data-animate-effect="fadeInRight">
            <form action="" enctype="" method="">
              <label>在线留言</label>
              <input type="text" name="name" id="name" placeholder="您的称呼" required="required">
              <input type="number" name="mobile" id="mobile" placeholder="联系方式" required="required" >
              <textarea name="content" id="form-content" placeholder="留言内容" rows="4"></textarea>
              <input type="submit" value="提交">
            </form>
            <div class="contactus-info">
              <p>联系电话：0755-83666797</p>
              <p>公司邮箱：450418326@qq.com</p>
              <p>公司地址：广东省深圳市龙华新区民治大道民泰大厦621-622</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
