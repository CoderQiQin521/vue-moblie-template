<template>
  <div>Home Page</div>
</template>
<script>
// @ is an alias to /src
// import { http } from "@/global/request";
import { asyncWrap } from "@/global/utils/utils";
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
    let res = await this.$api.testUser()

    let [err, data] = await asyncWrap(
      this.$api.testGet()
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