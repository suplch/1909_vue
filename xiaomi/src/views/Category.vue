<template>
    <div class="category">
        <header>
            分类
        </header>

        <div class="categories">
            <div class="leftNav">
                <ul>
                    <li @click="select(category)" :class="{currentCategory: category === currentCategory}" :key="category.id" v-for="category of category_list">
                        {{category.name}}
                    </li>
                </ul>
            </div>
            <CategoryContent v-on:scrollIndex="selectByIndex($event.data.index)" :category_id="currentCategory.id"></CategoryContent>
        </div>

    </div>
</template>

<script>
    import CategoryContent from '../components/CategoryContent';
    export default {
        name: "Category",
        data() {
            const category_list = [
                {id: '30001', name: '新品'},
                {id: '30002', name: '众筹'},
                {id: '30003', name: '手机'},
            ];

            return {
                currentCategory: category_list[0],
                category_list
            }
        },
        mounted() {
            this.$eventBus.$emit('showHideNav', true);
        },
        methods: {
            select(category){
                this.currentCategory = category;
            },
            selectByIndex(index) {
                this.currentCategory = this.category_list[index];
            }
        },
        components: {
            CategoryContent
        }
    }
</script>

<style scoped>
    .category {
        width: 100%;
        height: 100%;
    }

    header {
        z-index: 2;
        position: fixed;
        top: 0px;
        width: 100%;
        height: 1rem;
        text-align: center;
        background: lightgray;
    }

    .currentCategory {
        color: orange;
        font-size: 0.4rem;
    }

    .categories {
        z-index: 1;
        position: absolute;
        background: lightyellow;
        top: 1rem;
        width: 100%;
        bottom: 0.5rem;
    }
    .leftNav {
        background: white;
        box-shadow: 0px 0px 3px lightgray;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1.6rem;
        text-align: center;
    }

    ul li {
        height: 0.8rem;
        line-height: 0.8rem;
        transition: font-size 0.5s;
    }
</style>
