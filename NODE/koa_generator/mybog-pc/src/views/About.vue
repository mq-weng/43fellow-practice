<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">点</button>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods: {
    getData(){
      this.axios({
        method: "post",
        url:"http://localhost:3000",
        data: {
          name: 'lisi',
          age: 23
        },/*没有预检请求
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        } */
      }).then((res) => {
        console.log(res.data);
      })
    }
  },
}
</script>