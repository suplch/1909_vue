<template>
    <div ref="content" class="content">
        <div>
            <div ref="categoryItem" :key="category.id" class="category" v-for="category of category_list">
                <h3>---{{category.name}}---</h3>
                <ul>
                    <li :key="goods.id" v-for="goods of category.goods_list">
                        {{goods.name}}
                    </li>
                </ul>
                <div class="more">
                    更多...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "CategoryContent",
        props: ['category_id'],
        data() {
            const category_list = [
                {id: '30001', name: '新品',
                    goods_list: [
                        {id: '1001', name: 'K20 Pro'},
                        {id: '1002', name: 'RedMi'},
                        {id: '1003', name: '小米CC9'},
                        {id: '1000', name: 'RedMi'},
                        {id: '1004', name: '小米CC9'},
                        {id: '1005', name: 'RedMi'},
                        {id: '1006', name: '小米CC9'}

                    ]
                },
                {id: '30002', name: '众筹',
                    goods_list: [
                        {id: '1007', name: 'aaaaa Pro'},
                        {id: '1008', name: 'bbbb'},
                        {id: '1009', name: 'ddddd'},
                        {id: '1010', name: 'RedMi'},
                        {id: '1011', name: '小米CC9'},
                        {id: '1012', name: 'RedMi'},
                        {id: '1013', name: '小米CC9'}

                    ]
                },
                {id: '30003', name: '手机',
                    goods_list: [
                        {id: '1014', name: 'eeee Pro'},
                        {id: '1015', name: 'ffff'},
                        {id: '1016', name: 'ggg小米gggggCC9'},
                        {id: '1017', name: 'RedMi'},
                        {id: '1018', name: '小米CC9'},
                        {id: '1019', name: 'RedMi'},
                        {id: '1020', name: '小米CC9'}

                    ]
                },
            ];

            return {
                category_list
            }
        },
        watch: {
            category_id(newId, oldId) {
                let position = this.category_list.findIndex((category) => {
                    return category.id === newId
                });
                this._scroll.scrollToElement(this.$refs.categoryItem[position]);
            }
        },
        mounted() {
            this._scroll = new BScroll(this.$refs.content, {
                probeType: 2,
                snap: true,
                scrollbar: {
                    fade: true,
                    interactive: false,
                }
            });
            this._scroll.on('scroll', (event) => {
                console.log(event);

                this.$emit('scrollIndex', {
                    data: {
                        index: cal(this.$refs.categoryItem, event)
                    }
                })

                //this.$emit('')
            })
        }
    }

    function cal(categoryItem, event) {
        let min = Number.MAX_SAFE_INTEGER;
        let minItem = null;
        for (let item of categoryItem) {
            if (Math.abs(item.offsetTop + event.y) < min) {
                minItem = item;
                min = Math.abs(item.offsetTop + event.y)
            }
        }
        return categoryItem.indexOf(minItem)
    }
</script>

<style scoped>
    .content {
        background: white;
        box-shadow: 0px 0px 3px lightgray;
        position: absolute;
        overflow: hidden;
        top: 0;
        background: lightcoral;
        bottom: 0px;
        left: 1.6rem;
        width: 5.9rem;
        text-align: center;
    }
    ul li {
        height: 4.5rem;
        margin: 0.3rem 0.1rem 0.3rem 0.1rem;
        background: white;
    }
    .category {
        background: lightgray;
        margin: 0.5rem 0.1rem 0.5rem 0.1rem
    }

    .category .more {
        text-align: right;
    }
</style>
