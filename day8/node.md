### Vuex 集中式状态管理
- 解决组件间通信处理复杂的问题
- 安装  npm install vuex --save
- const Vuex = require('vuex)

```javascript
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {  // 定义多个 mutation
        increment(state) {  // 通过 mutation 来修改 状态
            state.count++;
        }
    }
})

store.commit('increment');   // 提交一个 mutation 
console.log(store.state.count);  // 返回 1

store.commit('increment');
console.log(store.state.count);  // 返回 2 

```

### Vue 组件中使用 Vuex 状态管理器
```javascript
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},  // 定义状态数据对象
    mutations: {} // 定义 mutation 突变
});
new Vue({
    el: '#app',
    store
})
```

### mapState 辅助函数
- 帮助我们生产 计算属性, 少敲几个字母
```javascript
    const { mapState } = Vuex;
    export default {
        computed: mapState({
            count(state) {
                return state.count;
            },
            countAlias: 'count', // 定义一个 别名 属性 countAlias 表示 state => state.count
                    
            countWithLocalState(state) {   // 这里不能使用 箭头函数 () => {} 因为 this 要表示组件
                return state.count + this.localCount; // 全局属性 + 局部属性
            }
        }),
    }
```
或者
```javascript
    export default {
        computed: mapState([
            'count'  // 映射为 this.$store.state.count;
        ])
    }
```
也可以
```javascript
    export default {
        localComputed() {/* 局部计算属性 */},
        // 将 state 属性 扩展开, 混入 计算属性对象中
        ...mapState({
            // 
        })
    }
```
### Getter 相当于 Store 的计算属性
- 计算属性 依赖 state
```javascript
const store = new Vuex.Store({
    state: {
        //...
    },
    getters: {
        计算属性名(state) {
            return state.somedata + other;
        }
    }
})

this.$store.getters.计算属性名
```
- 计算属性也可以依赖其他计算属性
```javascript
const store = new Vuex.Store({
    state: {
        //...
    },
    getters: {
        计算属性名1(state) {
            return state.somedata + other;
        },
        计算属性名2(state, getters) { // 计算属性2 依赖计算属性1 
            return getters.计算属性名1 + state.other;
        }
    }
})
```
- 计算属性也可以编程方法
```javascript
const store = new Vuex.Store({
    getters: {
        计算属性名(state) {
            return function(otherArgument) {
                return state.somedata + otherArgument; 
            }
        }
    }
})

this.$store.getters.计算属性名(someArgument) // 带参数的计算属性 这种计算属性不会 缓存结果
```
### mapGetters 辅助函数
- 将 store 里的getters 进行映射
```javascript
const { mapGetters } = Vuex;
export default {
    computed: {
        ...mapGetters([
            'propertyOfGetterInStore1',
            'propertyOfGetterInStore2',
        ]),
        ...mapGetters({
            // 将 this.propertyName 映射为 this.$store.getters.propertyOfGetterInStore1
            propertyName: 'propertyOfGetterInStore1'
        })
    }
}

```
### Mutation
- Vuex 通过Mutation 突变 来修改 store 中的 state 数据
```javascript
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {       // payload 载荷数据
        increment(state, payload) { // mutation 必须同步的修改 state 数据
            state.count++;
        }
    }
});
// mutation 必须通过 store.commit 进行调用
// 不能直接 调用 mutation
// store.commit('mutation的名字', 载荷数据)
store.commit('increment', somePayload) ;
```
### 注意事项 Mutation 需要遵守 Vue 数据模型的响应规则
- 提前在store 的 state 中初始化好数据
- 添加新属性是需要 用 Vue.set(obj, '新属性', 值);
- 也可以用对象展开运算符 state.obj = {...state.obj, newProp: 123}

### 常量代替Mutation 事件类型
```javascript
const INCREMENT = 'increment';
const store = new Vuex.Store({
    state: {},
    mutations: {
        [INCREMENT](state) {
            
        }
    }
})
```
### 组件中使用 Mutation
- 使用 mapMutations 映射 mutation 到 方法
```javascript
export default {
    methods: {
        ...mapMutations([
            'increment', // 将 组件方法 this.increment() 映射为 this.$store.commit('increment')
            'incrementBy' // 可以携带参数 this.incrementBy(payload) 相当于 this.$store.commit('incrementBy', payload)
        ])
    }
}
```
### Action
- Action 里面提交 mutation, 不要直接更改状态
- Action 里面书写异步操作
```javascript
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.n;
        }
    },
    actions: {
        increment(context, payload) {
            const {commit, state, getters } = context;
            commit('increment', payload) // 提交一个mutation
        },
        incrementAsync(context, payload) {  // action 里可以包含异步操作
            const {commit, state, getters} = context;
            setTimeout(() => {
                commit('increment', payload);
            }, 1000);
        }
    }
})

store.dispatch('increment', payload对象);
```
### 组件中分发Action
- 使用 mapActions 辅助函数
```javascript
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions([
            'increment', // this.increment 相当于 this.$store.dispatch('increment'),
            'incrementBy' // 可以携带载荷数据 this.incrementBy(payload) 映射为 this.$store.dispatch('incrementBy', payload);
        ]),
        ...mapActions({
            add: 'increment' // this.add() 相当于 this.$store.dispatch('increment')
        })
    }
}
```
### 组合Action
- action 可以返回 Promise 
```javascript
const store = new Vuex.Store({
        actions: {
            actionA({ commit }, payload) {
                return new Promise((resolve, reject) => {
                    
                    setTimeout(() => {
                        commit('mutation');
                        resolve();
                    }, 1000)
                    
                });
            },
            actionB ({ dispatch, commit }) {
                return dispatch('actionA').then(() => {
                    // actionA resolve 后执行回调
                    commit('otherMutation')
                })
            }
        }
    })

store.dispatch('actionA', payload).then(() => {
    // action resolve 时 执行此回调函数
})
```
- 利用 async / await
```ecmascript 6
    const store = new Vuex.Store({
            actions: {
                async actionA({ commit }, payload) {
                    commit('gotData', await getData())
                },
                async actionB ({ dispatch, commit }) {
                    await dispatch('actionA'); // 等待 actionA 结束
                    commit('gotOtherData', await getOtherData());
                }
            }
        })
```
### Module
- 项目变大时, 将 store 分割成子模块 每个子模块有独立的 state, mutation, action, getter
```ecmascript 6
const moduleA = {
    state: { count: 0 }
}
const moduleB = {
    state: { count: 0}
}
const store = new Vuex.Store({
    state: { count: 0},
    modules: {
        a: moduleA,
        b: moduleB
    }
});

store.state.count;  // 根模块的count
store.state.a.count;  // 子模块a的count
store.state.b.count;  // 子模块b的count
```
- 每个子模块 的 mutation 和 getter, 接受自个的 state
```ecmascript 6
const moduleA = {
    state: {count: 0},
    mutations: {
        increment(state) { // state 是本子模块的 state
            state.count++;
        }
    },
    getters: {
        doubleCount(state, getters, rootState) {
            return state.count * 2;
        }
    },
    actions: {
        increment({state, commit, rootState}) {
            if ((state.count + rootState.count) % 2 === 1) {
            commit('increment')
          }
        }
    }
}
```
### 命名空间
- 模块增加一个 namespaced: true
- 启用 命名空间后 访问需要 带上 路径
```ecmascript 6
this.$store.getters['a/doubleCountA'];
this.$store.dispatch('a/increment');
this.$store.commit('a/increment');
```
```ecmascript 6
const moduleA = {
    namespaced: true,
    state: {count: 0},
    mutations: {
        increment(state) { // state 是本子模块的 state
            state.count++;
        }
    },
    getters: {
        doubleCount(state, getters, rootState, rootGetters) {
            return state.count * 2;
        }
    },
    actions: { //          getters 表示当前模块的, rootState表示 根模块状态,  rootGetters 表示根模块的getters
        someAction({ dispatch, state, commit, getters, rootState, rootGetters}) {
            
            getters.doubleCount // 表示 当前模块 的getters
            rootGetters.someGetter  // 访问根模块的 计算属性
            
            dispatch('increment'); // 表示当前模块的 action
            dispatch('increment', null, { root: true}) // 表示根模块 的action
            
            commit('increment'); // 提交当前模块 mutation
            commit('increment', null, { root: true }) // root: true  表示 提交根模块mutation
          
        }
    }
}
```
### 命名空间 子模块注册全局 action
```ecmascript 6
const moduleA = {
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true, // 表示 这是一个全局 action
          handler (namespacedContext, payload) {  } // -> 'someAction'
        }
      }
    }
  }
}
```
- 带命名空间的绑定函数 映射模式
```ecmascript 6
const component = {
    computed: {
      ...mapState('some/nested/module', {
        a: state => state.a,
        b: state => state.b
      })
    },
    methods: {
      ...mapActions('some/nested/module', [
        'foo', // -> this.foo()相当于 this.$store.dispatch('some/nested/module/foo');
        'bar' // -> this.bar()相当于 this.$store.dispatch('some/nested/module/bar');
      ]),
      ...mapActions('some/nested/module', {
        'aliasFoo': 'foo', // -> this.aliasFoo() 相当于 this.$store.dispatch('some/nested/module/foo');
        'aliasBar': 'bar', // -> this.aliasBar 相当于 this.$store.dispatch('some/nested/module/bar');
      })
    }
}
