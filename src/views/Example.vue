<template>
    <div class="home text-center">
        home
        <div class="box"></div>
    </div>
</template>

<script>
// @ is an alias to /src
// 使用别名优点: 文件移动目录层级无需修改路径,缺点: 无法一部进入定义文件查看源码且没有jsdoc提示
import '@/common/version.js'
import { http } from "../common/request";
import { asyncWrap } from "@/common/utils/utils";
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
    let [err, data] = await asyncWrap(
      this.$api.testPost({
        name: "123"
      })
    );
    console.log("err: ", err);
  },
  methods: {
    ...homeMethod['hello'],
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
