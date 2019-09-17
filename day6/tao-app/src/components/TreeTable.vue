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
                    <button @click="toggleNode(node)">
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
    import axios from 'axios';
    function visit(tree_node, parent_node, level, fn) {
        let obj = {
            level,
            tree_node
        };

        tree_node.parent_node = parent_node;

        fn(obj);
        if (tree_node.open && tree_node.children) {
            for (let subnode of tree_node.children) {
                visit(subnode, tree_node, level + 1, fn);
            }
        }
    }

    function getPath(tree_node) {
        let currentNode = tree_node;
        let path = [];
        while (currentNode) {
            path.unshift(currentNode.name)
            currentNode = currentNode.parent_node;
        }
        return '/' + path.join('/')
    }

    export default {
        name: "TreeTable",
        data() {
            return {
                root: {
                    name: '',
                    size: 1234,
                    type: 'folder',
                    children: []
                }
            }
        },
        methods: {
            toggleNode(node) {
                if (node.tree_node.open) {
                    Vue.set(node.tree_node, 'open', false)
                } else {
                    Vue.set(node.tree_node, 'open', true)
                    let path = getPath(node.tree_node);
                    axios.get('/fs?path=' + path).then((result) => {
                        console.log(result.data)

                        Vue.set(node.tree_node, 'children', result.data)
                    })
                }
            },
            isOpen(node) {
                if (!node.tree_node.children
                    || node.tree_node.children.length === 0) {

                    return false;
                }

                return node.tree_node.open
            },
            hasChildren(node) {
                return node.tree_node.children
                    && node.tree_node.children.length  > 0
            }
        },
        computed: {
            node_list() {
                let list = [];
                visit(this.root, null, 0, (obj) => {
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
