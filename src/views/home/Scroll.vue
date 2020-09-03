<template>
    <div class="wrapper">
        <ul class="content">
            <li v-for="item in 20" :key="item">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa at deleniti assumenda, explicabo eos fuga cupiditate tempora provident deserunt animi magnam repudiandae maiores pariatur sed minus sunt optio? Distinctio?</p>
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {
        let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll(wrapper,{
            pullUpLoad: false,
            scrollY: true,
        })
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.wrapper {
    height: 100%;
    border: 1px solid red;
    overflow: hidden;
}
</style>