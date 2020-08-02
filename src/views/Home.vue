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
    await this.fetch();
    console.log(1);

    let [err, data] = await this.$api.testAsync;
    console.log("err: ", err);
  },
  methods: {
    async fetch() {
      let [err, data] = await this.$api
        .testGet({
          name: "123",
          age: 43
        })
        .then(res => [null, res])
        .catch(err => [err, null])
        .finally(() => {});
      if (err) {
        console.log("业务异常: ", err);
      }
    }
  }
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
