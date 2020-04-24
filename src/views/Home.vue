<template>
  <div class="home">
    home
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  font-size: 36px;
}
.box {
  width: 750px;
  height: 750px;
  background-color: pink;
}
</style>
