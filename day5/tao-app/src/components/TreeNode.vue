<template>
    <div>
        {{ node.name }}
        <button v-if="parentnode" @click="del(node, parentnode)">删除</button>
        <button @click="add(node)">添加</button>
        <ul v-if="node.children">
            <li v-for="subnode of node.children">
                <TreeNode :node="subnode" :parentnode="node"></TreeNode>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TreeNode",
        props: ['node', 'parentnode'],
        methods: {
            del(node, parent) {
                if (parent) {
                    let position = parent.children.indexOf(node);
                    parent.children.splice(position, 1);
                }
            },
            add(node) {
                if (!node.children) {
                    Vue.set(node, 'children', []);
                }

                let name = window.prompt('请输入名称')

                node.children.push({
                    name: name
                });
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
