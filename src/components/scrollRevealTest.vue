<template>
  <div>
    <!-- <h1 class="headline">
        Widget Inc.{{ num }}
    </h1>
    <p class="tagline">
        The perfect widgets.
        <span class="punchline">Forever.</span>
    </p> -->
    <div style="width: 100px;height: 100px;background-color: black" class="passDicv" id="blackDiv"></div>
    <!-- <button @click="reveal">重播</button> -->
    <button @click="disapper" class="layui-btn">方块消失</button>
    <button type="button" class="layui-btn" @click="reveal" style="margin: 20px 20px;height: 1200px">重播</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    mounted () {
        // this.$scrollReveal().reveal('.headline', { distance: '30px', delay: 200, origin: 'top', duration: 1300, rotate: {x: 20,z: 20}, reset: true});
        // this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left', rotate: {x: 20,z: 20}, reset: true});
        // this.$scrollReveal().reveal('.punchline', {
        //     scale: 0.85,
        //     rotate: {x: 5,z: 5,y: 5}, 
        //     duration: 2000, 
        //     interval: 600,
        //     reset: true
        // });
        this.$scrollReveal().reveal('.passDicv', {
            reset: true,   // 滚动鼠标时，动画开关(默认是false没有打开鼠标滚动的动画开关)
            origin: 'right', // 动画开始的方向
            duration: 500,   // 动画持续时间
            delay: 0, // 延迟
            rotate: {x:5, y:5, z:5},  // 过度到0的初始角度
            opacity: 0.2, // 初始透明度  (0.2到1的效果)
            scale:2,       //缩放
            easing: 'ease-in-out', //动画效果// 缓动'ease', 'ease-in-out'，'linear'...
            // 回调函数
            //当动画开始之前会被触发
            beforeReveal: function(domEl){
                console.log('动画执行了');
            },
            //鼠标滚轮滚动之前会被触发
            beforeReset: function(domEl){
                console.log('滚轮开始---');
            },
            //动画开始之后会被触发
            afterReveal: function(domEl){
                console.log('动画结束了');
            },
            //滚轮滚动之后会被触发
            afterReset: function(domEl){
                console.log('滚轮结束了');
            }
        });
    },
    methods: {
        disapper() {
            console.log('看看', document.getElementById('blackDiv').style.visibility)
            document.getElementById('blackDiv').style.visibility = "hidden";
            console.log('看看', document.getElementById('blackDiv').style.visibility)
        },
        reveal () {
            // debugger
            // window.scrollReveal = this.$scroll;

            // 想办法清空
            // console.log('this.$scrollReveal()', this.$scrollReveal())

            // this.$scrollReveal().store.containers = {};
            // this.$scrollReveal().store.elements = {};
            // this.$scrollReveal().store.history = [];
            // this.$scrollReveal().store.sequences = {};

            // debugger
            // this.$scrollReveal().store.elements[Object.keys(this.$scrollReveal().store.elements)[0]].visible = false;
            // console.log('this.$scrollReveal().store.elements', this.$scrollReveal().store.elements[Object.keys(this.$scrollReveal().store.elements)[0]]);

            document.getElementById('blackDiv').style.visibility = "visible";
            // this.$scrollReveal().store.elements[Object.keys(this.$scrollReveal().store.elements)[0]].visible = false;
            let deleFunc = this.$scrollReveal().delegate.bind(this.$scrollReveal())
            deleFunc({ type: 'resize' }, this.$scrollReveal().store.elements)
            // this.$scrollReveal().store.containers[1].node.addEventListener('resize', ()=>{console.log('触发resize了');})
            // var ev = document.createEvent('Event');
            // ev.initEvent('resize', true, true);
            // this.$scrollReveal().store.containers[1].node.dispatchEvent(ev);

            // this.$scrollReveal().delegate({ type: 'resize' }, this.$scrollReveal().store.elements);
            // console.log('this.$scroll', this.$scrollReveal());
            // console.log('window.scrollReveal', window.scrollReveal);
            // console.log('this.scrollReveal', this);
            // window.scrollReveal = this.$scroll;
            // window.scrollReveal.reveal('.punchline', { reset: true });
            // this.$scrollReveal().clean('.headline');
            // this.$scrollReveal().clean('.tagline');
            // this.$scrollReveal().clean('.punchline');
            // this.$scrollReveal().reveal('.headline', { distance: '30px', delay: 200, origin: 'top', duration: 1300, rotate: {x: 20,z: 20}, reset: true});
            // this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left', rotate: {x: 20,z: 20}, reset: true});
            // this.$scrollReveal().reveal('.punchline', { delay: 2000, rotate: {x: 20,z: 20}, reset: true});
            console.log('装完后的this.$scrollReveal()', this.$scrollReveal())
        }
    }
}
</script>

<style>

</style>