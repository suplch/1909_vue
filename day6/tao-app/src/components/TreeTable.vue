<template>
    <table border="1" width="100%">
        <thead>
            <tr>
                <th>名称</th>
                <th>大小</th>
                <th>类型</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="node of node_list">
                <td v-bind:style="{paddingLeft: (node.level * 40) + 'px'}"
                    align="left">
                    <button @click="toggleNode(node)"
                            v-bind:style="{visibility: hasChildren(node) ? 'visible' : 'hidden'}">
                        {{ isOpen(node) ? '-' : '+' }}
                    </button>
                    {{ node.tree_node.name }}</td>
                <td>{{ node.tree_node.size }}</td>
                <td>{{ node.tree_node.type }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import Vue from 'vue';
    function visit(tree_node, level, fn) {
        let obj = {
            level,
            tree_node
        };
        fn(obj);
        if (tree_node.open && tree_node.children) {
            for (let subnode of tree_node.children) {
                visit(subnode, level + 1, fn);
            }
        }
    }

    export default {
        name: "TreeTable",
        data() {
            return {
                root: {
                    name: 'app',
                    size: 1234,
                    type: 'folder',
                    children: [
                        {
                            name: 'lib',
                            size: '21',
                            type: 'folder',
                            children: [
                                {
                                    name: 'vue',
                                    size: 123,
                                    type: 'js'
                                },
                                {
                                    name: 'style',
                                    size: 12,
                                    type: 'css'
                                },
                                {
                                    name: 'jquery',
                                    size: 1233,
                                    type: 'folder',
                                    children: [
                                        {
                                            name: 'jquery.min',
                                            size: 111,
                                            type: 'js'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'index',
                            size: 234,
                            type: 'html'
                        }
                    ]
                }
            }
        },
        methods: {
            toggleNode(node) {
                if (node.tree_node.open) {
                    Vue.set(node.tree_node, 'open', false)
                } else {
                    Vue.set(node.tree_node, 'open', true)
                }
            },
            isOpen(node) {
                if (!node.tree_node.children || node.tree_node.children.length === 0) {
                    return false;
                }

                return node.tree_node.open
            },
            hasChildren(node) {
                return node.tree_node.children && node.tree_node.children.length  > 0
            }
        },
        computed: {
            node_list() {
                let list = [];
                visit(this.root, 0, (obj) => {
                    console.log(' '.repeat(obj.level*4),
                        obj.tree_node.name,
                        obj.tree_node.size,
                        obj.tree_node.type);

                    list.push(obj);
                });

                return list;
            }
        },
    }
</script>

<style scoped>

</style>
