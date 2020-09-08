<template>
    <div class="pullup-wrapper" ref="scroll">
        <div class="pullup-content">
            <ul class="pullup-list">
                <li class="item" v-for="(item,index) in list" :key="index">
                    <p>{{item}}</p>
                </li>
            </ul>
            <div class="pullup-tips">
                <div v-if="!isPullUpLoad" class="before-trigger">
                    <span class="pullup-txt">{{beforeText}}</span>
                </div>
                <div v-else class="after-trigger">
                    <span class="pullup-txt">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
    name: "",
    props: {},
    data() {
        return {
            list: [],
            beforeText: "加载中",
            isPullUpLoad: false,
            pageNum: 0, // 当前页码
            pageSize: 20, // 每页数量
        };
    },
    async created() {},
    mounted() {
        this.$nextTick(async () => {
            await this.fetData();
            this._initBscroll();
        });
    },
    methods: {
        _initBscroll() {
            this.bscroll = new BScroll(this.$refs.scroll, {
                pullUpLoad: true, // 上拉加载
            });
            this.beforeText = "上拉加载更多";

            this.bscroll.on("pullingUp", this.pullingUpHandle);
        },
        async pullingUpHandle() {
            console.log("pullingUpHandle");
            this.isPullUpLoad = true;

            // 模拟异步请求
            await this.fetData();

            this.bscroll.finishPullUp();
            this.bscroll.refresh();

            this.isPullUpLoad = false;
        },
        async fetData() {
            try {
                let data = await this.ajaxGet();
                console.log("data: ", data);
                this.list = this.list.concat(data);
            } catch (error) {}
        },
        ajaxGet() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    ++this.pageNum;
                    let res = [];
                    let count = this.pageNum * this.pageSize;
                    for (
                        let index = count - this.pageSize;
                        index < count;
                        index++
                    ) {
                        res.push(`新闻标题${index + 1}`);
                    }
                    resolve(res);
                }, 2000);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
}
.pullup-wrapper {
    height: 100%;
    padding: 0 10px;
    border: 1px solid #ccc;
    overflow: hidden;
}
.pullup-list {
    padding: 0;
}

.pullup-tips {
    padding: 20px;
    text-align: center;
    color: #999;
}

.item {
    line-height: 100px;
    margin-bottom: 20px;
    border: 1px solid #eee;
}
</style>