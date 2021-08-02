<template>
  <div>
    <p>countdownValue{{ countdownValue }}</p>
    <p>isManager{{ isManager }}</p>
    <div
      ref='cavdiv'
      id='cavdiv'
      style='width: 300px; height: 300px; background-color: black'
    ></div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from 'vuex';
import domtoimage from 'dom-to-image';
export default {
  name: 'storageTest',
  data() {
    return {
      testName: '',
      countdownValue: this.$store.state.countdownValue,
      isManager: this.$store.state.isManager,
    }
  },
  mounted() {
    this.drawCanvas();
  },
  created() {
    // console.log('state.countdownValue', this.$store.state.countdownValue);
    // console.log('getters.countdownValue', this.$store.getters.countdownValue);

    // this.$store.commit('countdownValueFn', 10);
    // console.log('state.countdownValue', this.$store.state.countdownValue);
    // console.log('getters.countdownValue', this.$store.getters.countdownValue);
    // this.$store.dispatch({
    //   type: 'countdownValueAsync',
    //   countdownValueFn: 10,
    // });
    // this.countdownValueAsync();
    console.log('state.countdownValue', this.$store.state.countdownValue);
    // this.countdownValueAsync(20);
    this.$store
      .dispatch({
        type: 'countdownValueAsync',
        value: 20,
      })
      .then(() => {
        console.log('state.countdownValue', this.$store.state.countdownValue);
      });
    console.log('state.countdownValue', this.$store.state.countdownValue);
  },
  methods: {
    ...mapActions(['countdownValueAsync']),
    drawCanvas() {
      var canvasDir = document.createElement('canvas');
      var width = 24;
      canvasDir.width = width;
      canvasDir.height = width;
      var context = canvasDir.getContext('2d');
      context.strokeStyle = '#ffffff';
      context.lineJoin = 'round';
      context.lineWidth = 8;
      context.moveTo(-4, width - 4);
      context.lineTo(width / 2, 6);
      context.lineTo(width + 4, width - 4);
      context.stroke();
      // let cadiv = document.getElementById('cavdiv');
      this.$refs.cavdiv.appendChild(canvasDir);

      domtoimage.toSvg(canvasDir).then(function (dataUrl) {
        console.log(dataUrl);
      });
    },
  },
};
</script>