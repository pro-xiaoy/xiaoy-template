## 倒计时

| 依赖 | 版本 |
|------|------|
| vue  | 2.5  |


### 兼容性
IE10以上

### 使用方法
```html
  <count-down :num='10'></count-down>
```

### 相关属性

| 参数 | 说明       | 类型   |
|------|------------|--------|
| num  | 倒计时时间 | int    |
| type | 按钮样式   | String |

### 数据格式
```javascript
   :num: 10
   type: 'primary'|'success'|'warning'|'danger'
```