<template>
  <div id="global-nav">
    <div class="size">
      <ul>
        <li v-for="(item, index) of navList" :key="item.id" class="button"
            :class="{end:index===listNumber}" @click="nowclick(item.id)">
          <router-link :to="{ path: item.path }" tag="span" active-class="active">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'honeNavBar',
  props:{
//    nowpath: { type: String, default: '' },
  },
  data () {
    return {
      username: 'HOME',
      navList: [
        {
          id:0,
          title: 'HOME',
          path: '/home',
          active: true
        },
        {
          id:1,
          title: '产品中心',
          path: '/prosuct',
          active: false
        },
        {
          id:2,
          title: '关于我们',
          path: '/aboutme',
          active: false
        },
        {
          id:3,
          title: '人才招聘',
          path: '/zhaopin',
          active: false
        },
        {
          id:4,
          title: '联系我们',
          path: '/contactus',
          active: false
        }
      ],
      number:0
    }
  },
  computed:{
    listNumber(){
      return this.navList.length-1
    }
  },
  methods:{
      nowclick(i){
        console.log("ok!");
//        this.navList[i].active=true;
        this.$emit('nowactives',i)
      }
    },
//  mounted(){
//  }

}

</script>
<style scoped>
  .size ul li{
    cursor: pointer;
  }
  .size ul li span:hover{
    background-color:red;
  }
  .size ul li span.active{
    background-color:red;

  }
  .size ul li span{
    display:block;
    width:100%;
    height:100%;
  }


</style>
