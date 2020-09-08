<template>
    <div class="pullup">
        <div ref="scroll" class="pullup-wrapper">
            <div class="pullup-content">
                <ul class="pullup-list">
                    <li
                        v-for="i of data"
                        :key="i"
                        class="pullup-list-item"
                    >{{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}</li>
                </ul>
                <div class="pullup-tips">
                    <div v-if="!isPullUpLoad" class="before-trigger">
                        <span class="pullup-txt">Pull up and load more</span>
                    </div>
                    <div v-else class="after-trigger">
                        <span class="pullup-txt">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>