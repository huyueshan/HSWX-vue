<template>
  <div id="content">
    <div class="container news-container">
      <div class="row">
        <div class="col-lg-12 col-xs-12">
          <div class="nav-news">
            <ul>
              <li  class="active"><a href="javascript:;">行车记录仪</a>
                <div class="triangle1"></div>
                <div class="triangle2"></div>
              </li>

              <li><a href="javascript:;">工业/医疗内窥镜</a>
                <div class="triangle1"></div>
                <div class="triangle2"></div>
              </li>

              <li><a href="javascript:;">迷你/运动DV</a>
                <div class="triangle1"></div>
                <div class="triangle2"></div>
              </li>

              <li><a href="javascript:;">航拍</a>
                <div class="triangle1"></div>
                <div class="triangle2"></div>
              </li>

              <li><a href="javascript:;">其他</a>
                <div class="triangle1"></div>
                <div class="triangle2"></div>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1">

          <div class="list-news">
            <ul>
              <li class="list-item" v-for="(item,index) of productList" :key="index">
                <a class="list-item-image">
                  <img src='../../assets/hot-product.jpg' border='0' width='168' height='93' alt='...'>
                </a>
                <div class="item-info">
                  <a href="javascript:;"><h2>{{item.name}}</h2></a>
                  <p>{{item.dirction}}<a href="javascript:;" class="pull-right">了解详情>></a></p>
                  <span class="news-date">{{item.initTime}}</span>
                </div>
              </li>


            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
//  import homeNavBar from "./HomeNavBar"
export default {
  name: 'AboutMe',
  components: {
//    homeNavBar
  },
  data () {
    return {
      names: '产品中心',
      productList:[
        {
          name:"行车记录仪",
          dirction:"产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息",
          initTime:"2017-09-17"
        },
        {
          name:"运动DV",
          dirction:"产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息",
          initTime:"2017-09-17"
        },
        {
          name:"内窥镜",
          dirction:"产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息产品描述信息",
          initTime:"2017-09-17"
        }
      ]
    }
  }
}
</script>
<style scoped>
  .container{
    padding:0 15px;
  }

</style>
