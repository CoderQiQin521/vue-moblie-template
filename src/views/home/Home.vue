<template>
  <div>Home Page</div>
</template>
<script>
// @ is an alias to /src
import { http } from "../common/request";
import { asyncWrap } from "../common/utils";
import homeMethod from './home'
export default {
  name: "Home",
  data() {
    return {};
  },
  async created() {
    // await this.fetch();
    // console.log(1);
    // await asyncWrap();
    this.hello(this)
    let [err, data] = await asyncWrap(
      this.$api.testPost({
        name: "123"
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