<template>
  <div class="hello">
    hello
    {{ knowtes }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data: () => ({
    knowtes: null
  }),

  mounted () {
    this.$axios
      .get('http://localhost:8000/', {})
      .then(response => {
        console.log('asdasd', response)
      })
      .catch(error => {
        console.log('error', error)
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
