## 公告组建

依赖  | 版本
---|---
vue | 2.5


### 兼容性
IE10以上

### 使用方法
```html
    <notice :content='text'></notice>
```

### 相关属性

| 参数  | 说明  | 类型 |
| ------------- | -------- | ----- |
| content | 内容 | String |

### 数据格式
```javascript
  data () {
    return {
      text: '公告信息，欢迎xxx来xxx公司，本系统2018-04-17上线'
    }
  }
```