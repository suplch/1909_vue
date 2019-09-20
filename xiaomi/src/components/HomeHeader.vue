<template>
    <header class="headerComp">
        <div>
                test
        </div>
        <div>
            <ul>
                <li @click="select(type)" :class="{selectedItem: type === selectedType}" v-for="type of types">
                    {{type.name}}
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "HomeHeader",
        data() {
            return {
                selectedType: undefined,
                types: []
            }
        },
        mounted() {
            axios.get('/product/types').then((result) => {
                this.types = result.data;
                this.selectedType = this.types[0];
            }).catch(() => {

            })
        },
        methods: {
            select(type){
                this.selectedType = type;
            }
        }
    }
</script>

<style scoped>
    .headerComp {
        background: lightgray;
    }
    ul {
        list-style: none;
    }
    ul li {
        display: inline-block;
        margin: 5px 10px 5px 10px;
    }
    .selectedItem {
        color: orange
    }
</style>
