<template>
  <div>
    <h1 class="headline">
        Widget Inc.{{ num }}
    </h1>
    <p class="tagline">
        The perfect widgets.
        <span class="punchline">Forever.</span>
    </p>
    <!-- <button @click="reveal">重播</button> -->
    <button type="button" class="layui-btn" @click="reveal" style="margin: 20px 20px;">重播</button>
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
        this.$scrollReveal().reveal('.headline', { distance: '30px', delay: 200, origin: 'top', duration: 1300, rotate: {x: 20,z: 20}, reset: true});
        this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left', rotate: {x: 20,z: 20}, reset: true});
        this.$scrollReveal().reveal('.punchline', { delay: 2000, rotate: {x: 20,z: 20}, reset: true});
    },
    methods: {
        reveal () {
            this.num += 1
            // debugger
            // window.scrollReveal = this.$scroll;
            this.$scrollReveal().delegate({ type: 'resize' }, this.$scrollReveal().store.elements);
            // console.log('this.$scroll', this.$scrollReveal());
            // console.log('window.scrollReveal', window.scrollReveal);
            // console.log('this.scrollReveal', this);
            // window.scrollReveal = this.$scroll;
            // window.scrollReveal.reveal('.punchline', { reset: true });
            // this.$scrollReveal().clean('.headline');
            // this.$scrollReveal().clean('.tagline');
            // this.$scrollReveal().clean('.punchline');
            // this.$scrollReveal().reveal('.headline', { distance: '30px',  delay: 200, origin: 'top', duration: 1300});
            // this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left'});
            // this.$scrollReveal().reveal('.punchline', { delay: 2000,});
        }
    }
}
</script>

<style>

</style>