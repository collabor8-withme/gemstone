# @depanlz/web-server
这个模块可以在依赖分析完成以后，启动一个web server，同时通过echarts渲染出可视化的依赖关系图。

## 通过CLI工具使用
### 下载
::: code-group

```sh [npm]
$ npm install -D @depanlz/cli @depanlz/core @depanlz/web-server
```

```sh [pnpm]
$ pnpm add -D @depanlz/cli @depanlz/core @depanlz/web-server
```

```sh [yarn]
$ yarn add -D @depanlz/cli @depanlz/core @depanlz/web-server 
```
:::

### 配置CLI选项
::: code-group

```sh [npm]
$ npx depanlz analyze -w 3000
```

```sh [pnpm]
$ pnpm depanlz analyze -w 3000
```

```sh [yarn]
$ yarn depanlz analyze -w 3000
```

:::

## 增强core模块功能
### 下载
::: code-group

```sh [npm]
$ npm install @depanlz/core @depanlz/web-server
```

```sh [pnpm]
$ pnpm add @depanlz/core @depanlz/web-server
```

```sh [yarn]
$ yarn add @depanlz/core @depanlz/web-server 
```
:::

### 编写增强功能代码
``` typescript
import { DepAnlz, Config, DepGraph } from "@depanlz/core"
import { webServer } from "@depanlz/web-server"

const depth: number = 3

const anlz: DepAnlz = new DepAnlz(depth)

const config: Config = anlz.preHook()

const depGraph: DepGraph = anlz.coreHook(config)

anlz.postHook(webServer)
```
