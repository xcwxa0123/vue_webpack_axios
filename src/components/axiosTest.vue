<template>
  <button @click='btnFunc'>发个通讯试试</button>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data () {
    return {}
  },
  created () {
    // this.btnFunc();
  },
  methods: {
    btnFunc () {
      axios
        .get('/api')
        .then((response) => {
        //   const result = response.data.items[0]
          console.log('通讯结果', response)
        })
        .catch((response) => {
        //   alert('请求失败', response)
            console.log('看看res', response);
        })
    }
  },
}
</script>