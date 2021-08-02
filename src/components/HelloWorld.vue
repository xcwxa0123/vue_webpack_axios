<template>
  <div>
    <!-- <ul class="layui-nav layui-nav-tree" lay-filter="test"> -->
    <ul class="layui-nav layui-nav-tree layui-nav-side">
      <!-- <li class="layui-nav-item layui-nav-itemed">
        <a href="javascript:;">默认展开</a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">选项1</a></dd>
          <dd><a href="javascript:;">选项2</a></dd>
          <dd><a href="">跳转</a></dd>
        </dl>
      </li> -->
      <!-- <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <dd><a href="">移动模块</a></dd>
          <dd><a href="">后台模版</a></dd>
          <dd><a href="">电商平台</a></dd>
        </dl>
      </li> -->
      <li class="layui-nav-item"><a href="javascript:;" @click="change2axiosTest">axiosTest</a></li>
      <li class="layui-nav-item"><a href="javascript:;" @click="change2canvas2svgTest">canvas2svgTest</a></li>
      <li class="layui-nav-item"><a href="javascript:;" @click="change2storeTest">storeTest</a></li>
      <li class="layui-nav-item"><a href="javascript:;" @click="change2scrollRevealTest">scrollRevealTest</a></li>
    </ul>
    
    <axiosTest v-if="axiosTestVisiable"></axiosTest>
    <canvas2svgTest v-if="canvas2svgTestVisiable"></canvas2svgTest>
    <storageTest v-if="storageTestVisiable"></storageTest>
    <scrollRevealTest v-if="scrollRevealTestVisiable"></scrollRevealTest>
  </div>
</template>

<script>
/* eslint-disable */
import storageTest from './storeTest.vue';
import canvas2svgTest from './canvas2svgTest.vue';
import axiosTest from './axiosTest.vue';
import scrollRevealTest from './scrollRevealTest.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      axiosTestVisiable: false,
      canvas2svgTestVisiable: false,
      storageTestVisiable: false,
      scrollRevealTestVisiable: false
    }
  },
  components: {
    storageTest,
    canvas2svgTest,
    axiosTest,
    scrollRevealTest
  },
  created () {
    layui.use(['layer', 'form', 'element'], function(){
        var layer = layui.layer
        ,form = layui.form,
        element = layui.element;
        
        // layer.msg('Hello World');
      });
  },
  methods: {
    change2axiosTest () {
      this.setAllHide()
      this.axiosTestVisiable = true
    },
    change2canvas2svgTest () {
      this.setAllHide()
      this.canvas2svgTestVisiable = true
    },
    change2storeTest () {
      this.setAllHide()
      this.storageTestVisiable = true
    },
    change2scrollRevealTest () {
      this.setAllHide()
      this.scrollRevealTestVisiable = true
    },
    setAllHide () {
      this.axiosTestVisiable = false
      this.canvas2svgTestVisiable = false
      this.storageTestVisiable = false
      this.scrollRevealTestVisiable = false
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
