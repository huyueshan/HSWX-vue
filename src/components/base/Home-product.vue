<template>
      <div class="index-box-hots">
        <div class="box-title">
          <span class="box-title-line"></span>
          <h3>hot-sale products</h3>
          <h2>热销<strong>产品</strong></h2>
        </div>
        <div class="row hots-list">
          <div v-for="item of hotsProduct" :key="item.id" class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img :src="item.imgSrc" alt="item,title" style="width:100%">
              <div class="caption">
                <h3>{{item.name}}</h3>
                <p>{{item.message}}</p>
                <p><a href="#" target="_blank" class="btn btn-primary" role="button">更多详情…</a> </p>
              </div>
            </div>
          </div>

        </div>
      </div>

</template>

<script>
export default {
  name: 'HomeProduct',
  components: {
  },
  data () {
    return {
      hotsProduct:[

        {
          id:0,
          name:'产品名称A',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        },
        {
          id:1,
          name:'产品名称B',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        },
        {
          id:2,
          name:'产品名称C',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        },
        {
          id:3,
          name:'产品名称D',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        },
        {
          id:4,
          name:'产品名称E',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        },
        {
          id:5,
          name:'产品名称F',
          imgSrc:require('../../assets/hot-product.jpg'),
          title: '热销产品',
          message:"产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍产品信息介绍"
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
