# y-Compontent 
### 展示
[预览地址](https://pro-xiaoy.github.io/xiaoy-template/dist/)
### star
发布 
```js
 sh ./deploy.sh
```

## packages
包的地址打包软件的地址
### install
```js
  npm i y-compentent
````

## a simple plugins
1. 全局使用
```js
import yTcompent from 'y-compentent'

Vue.use(yTcompent)

```
2. 部分使用
```js
import ycompontent from 'y-compentent'
let { countDown } = ycompontent
components: {
  countDown
},
*** 原本想直接在import可以直接解构赋值的，发现自己还是太年轻 ***
```
### declare
目前只能用的功能只有跑马灯，根据项目结构看


### for self
打包项目和发包注意看webpack配置
