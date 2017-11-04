<template>
  <div class="agency-container">
    <!--<div id="content" >-->
      <div class="container zhaopinct">
        <div class="angency-want"><img class="animate-box" data-animate-effect="bounceIn" src="../../assets/angency-want.png" alt="诚聘精英，区域代理"></div>
        <div class="angency-info">
          <div class="vertical-line"></div>
          <h2><i class="title-cycle"></i>硬件工程师<small> &nbsp;&nbsp;&nbsp;&nbsp;1名</small></h2>
          <div>
            <p><strong>工作职责：</strong></p>
            <p>1.负责电路相关设计方案的可行性分析和实施；</p>
            <p>2.制定和建立开发流程、完成相应产品相关文档（如原理图、PCB板、和BOM表和测试分析报告等）的拟制和评审；</p>
            <p>3.负责电子器件的新供应商和新元器件的评估；</p>
            <p>4.和结构、生产等部门的密切协作，保证整个产品的相关目标按期完成；</p>
            <p><strong>任职要求：</strong></p>
            <p><i class="p-cycle">1</i>有2年以上数码产品行业工作经验，熟悉录像产品、行车记录仪设计方面相关知识；</p>
            <p><i class="p-cycle">2</i>具有良好的沟通协调能力，动手能力及学习能力强；</p>
            <p><i class="p-cycle">3</i>熟悉电子设计软件，对PADS 操作熟练；</p>
            <p><i class="p-cycle">4</i>熟悉电脑基础操作，对WORD、EXCEL、PPT及OUTLOOK操作熟练；</p>
            <p><i class="p-cycle">5</i>具备计划管理执行能力，工作有条理性。</p>
            <p>简历投递邮箱：450418326@qq.com</p>
          </div>
          <h2><i class="title-cycle"></i>业务经理<small> &nbsp;&nbsp;&nbsp;&nbsp;1名</small></h2>
          <div>
            <p><strong>工作职责：</strong></p>
            <p>1、负责公司产品的销售及推广；</p>
            <p>2、发展新客户,完成销售任务；</p>
            <p>3、管理维护新老客户关系以及客户间的长期战略合作。</p>
            <p><strong>任职要求：</strong></p>
            <p><i class="p-cycle">1</i>反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；</p>
            <p><i class="p-cycle">2</i>具备一定的市场分析及判断能力，良好的客户服务意识；</p>
            <p><i class="p-cycle">3</i>有责任心，能承受较大的工作压力；</p>
            <p><i class="p-cycle">4</i>有团队协作精神，善于挑战。</p>
            <p><i class="p-cycle">5</i>大专及以上学历，2年以上工作经验。</p>
            <p><i class="p-cycle">6</i>有DV,数码产品方案推广经验，数码产品周边配件产品销售经验者优先。
            <p>简历投递邮箱：450418326@qq.com</p>

            </p>
          </div>
        </div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
//  import homeNavBar from "./HomeNavBar"
import $ from "jquery"
export default {
  name: 'AboutMe',
  components: {
//    homeNavBar
  },
  data () {
    return {
      names:'人才招聘',
//      username: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    function set_h(){
  let H = $(".angency-info").height();
  $(".angency-info .vertical-line").height(H);
}
set_h();
$(window).resize(function(){
  set_h();
});

  }
}
</script>
<style scoped>
h2{
  display:inline-block;
}
  .agency-container{
    width:100%;
  }
.container{

}
</style>
