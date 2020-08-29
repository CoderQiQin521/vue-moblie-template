<template>
  <div>123</div>
</template>
<script>
// @ is an alias to /src
// import request from "@/service/request";
import { asyncWrap } from "@/utils";
import homeMethod from './home'
export default {
  name: "Home",
  data() {
    return {};
  },
  async created() {
    let po = await this.$api.testPost({
      name: 23322432332243233224323322432332243233224323322432332243233224323322432332243,
      age: "sdfgvsafsdfsdafdsafdsfasdfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      password: '5435h34jjk345hjhjZ'
    })

    let [err, data] = await asyncWrap(
      this.$api.testGet({
        name: '123',
        age:4
      })
    );
    console.log("err: ", err);
  },
  methods: homeMethod
  // {
  //   async fetch() {
  //     let [err, data] = await this.$api
  //       .testGet({
  //         name: "123",
  //         age: 43
  //       })
  //       .then(res => [null, res])
  //       .catch(err => [err, null])
  //       .finally(() => {});
  //     if (err) {
  //       console.log("业务异常: ", err);
  //     }
  //   }
  // }
};
</script>
<style lang="scss" scoped>
</style>