
### 路由导航标签
```
    <router-link to="/products">产品列表</router-link>
    <router-link to="/orders">订单列表</router-link>
    
    <div>
        <router-view></router-view>
    </div>
```

### 路由 Vue 配置

```
    const router = new VueRouter({
        routes: [
            {path: '/products', component: ProductList},
            {path: '/orders', component: OrderList}
        ]
    })
    
    new Vue({router})
```

### 组件内路由对象的访问
```
    this.$router   访问 路由实例api
    例如: this.$router.go(-1); 
          this.$router.push({path: 'product': query: {id: '1234'}})
          this.$router.replace('product')  直接替换 不会产生历史
    
    this.$route  访问单个 路由配置对象
    例如 this.$route.params
```


### 完整路由对象
```
    const router = new VueRouter({
        routes: [
            {
                path: 'foo',  // 路径
                component: Foo,  // 组件对象
                children: [  // 子路由集合
                    {
                        path: 'bar',
                        component: Bar,
                        meta: { other: '其他属性'}
                    }
                ]
            }
        ]
    });
```

### 多个路由视图同时显示 (命名视图)

```
    <router-view></router-view>
    <router-view name="side"></router-view>
```

```javascript
    new VueRouter({
        routes: [
            {
                path: '/',
                components: {
                    default: ContentPanel, //显示主内容
                    side: SideMenu  // 显现侧边 菜单
                }
            }
        ]
    })

```


### 路由对象上直接增加守卫
```
routes: [
    {
        path: '/foo',
        component: Foo,
        beforeEnter(to, from, next) {
            // ...
        }
    }
]
```
### 组件上增加 路由生命周期
```
const 组件 = {
    template: '...',
    beforeRouteEnter(to, from, next) {
        // 进入前调用, 此时 组件 this 还未创建
        next(function(comp) {
            // 此时 可以访问组件
        })
    },
    beforeRouteUpdate(to, from, next) {
        // 当 路由对应的  :param 变化是调用
    },
    beforeRouteLeave(to, from, next) {
        // 离开前调用
    }
}
```
