###
+ new Vue(options)
+ options:
    - el  一个选择器字符串, 告诉vue 那个元素被接管
    - data  数据模型对象 model
    - methods  定义一系列方法
    - computed  定义 计算属性

+ v-for 用来循环输出 一个 集合 数据元素
+ v-on:  声明事件
    - click  单击事件
    - input  输入事件
```html
<input v-on:input="changeValue" />
<button v-on:click="add_student">提交</button>
```
+ v-bind 绑定html 属性
```html
<input v-bind:value="welcome" />
```

+ v-model  双向数据绑定 数据模型发送变化, view变化
```html
<input v-model="welcome" />
```

```
+ ref  用来引用 具体的一个元素, 代替 document.getElementById()
    - this.$refs.引用元素的名字   
```html
<input ref="u_name" type="text">
```
```ecmascript 6
this.$refs.u_name
```
