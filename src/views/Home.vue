<template>
  <div class="home text-center">
    home
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { http } from "../common/request";
export default {
  name: "Home",
  data() {
    return {};
  },
  async created() {
    await this.$api.testGet();
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 36px;
}
.box {
  width: 750px;
  height: 750px;
  background-color: pink;
}
</style>
