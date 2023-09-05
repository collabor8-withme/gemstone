# 开发文档

## 采用什么样的数据结构存储

图的数据结构

## 为什么不用邻接矩阵

邻接矩阵会耗费更大的空间,例如 对于 react 的依赖关系

```
react
 - loose-envify
     - js-tokens     
```

### 邻接矩阵存储
|              | react | loose-envify | js-tokens |
| ------------ | ----- | ------------ | --------- |
| react        | 0     | 1            | 0         |
| loose-envify | 0     | 0            | 1         |
| js-tokens    | 0     | 0            | 0         |

### 邻接表存储
``` js
{
    react: [loose-envify]
    loose-envify: [js-tokens]
    js-tokens: []
}
```

## 每个图节点的信息
- 依赖名称
- 版本
- 层级

## 节点的层级是按照找到的顺序排的