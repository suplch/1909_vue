<template>
    <div class="timer">
        {{ nowTime }}
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                nowTime: new Date().toLocaleString()
            }
        },
        mounted() { // 初始化一些资源
            this._tid = setInterval(() => {
                this.nowTime = new Date().toLocaleString();
                console.log(this.nowTime);
            }, 1000)
        },
        beforeDestroy() {  // 清除资源
            clearInterval(this._tid);
        }
    }
</script>

<style scoped>
    .timer {
        border: solid 5px blue
    }
</style>
