# @depanlz/core
这个模块在项目依赖分析中扮演着核心角色，集成了关键的依赖分析功能，将各种依赖分析的任务统一在一个模块中。

## DepAnlz 类
``` typescript 
declare class DepAnlz {
    depth: number;
    constructor(depth: number);
    preHook(): Config;
    coreHook(config: Config): DepGraph;
    postHook(callback: (config:Config, depGraph: DepGraph) => any): any;
    lifeCycle(): DepGraph;
}
```
`DepAnlz`类是我们分析项目依赖的核心，我们可以通过`DepAnlz`实例对象身上的一些`Hook`方法，来定制化个人的依赖分析行为。

## 快速上手
### 下载

```sh [npm]
$ npm install @depanlz/core
```

```sh [pnpm]
$ pnpm add @depanlz/core 
```

```sh [yarn]
$ yarn add @depanlz/core 
```

### 构建实例
有关 `typescript` 的类型声明
``` typescript
type Config = {
    PKG_JSON_DIR: string,
    NODE_MODULES_DIR: string,
    PKG_MANAGER: string,
    DEPTH: number
}

type DepNode = {
    id: string,
    dependence: string,
    version: string,
    level: number
}

type DepRel = {
    source: string,
    target: string
}

declare class DepGraph {
    nodes: Array<DepNode>;
    edges: Array<DepRel>;
    constructor();
    insertEgde(fromNodeId: string, toNodeId: string): void;
    insertNode(dependence: string, version: string, level: number):void ;
}
```

使用 `DepAnlz` 类构建实例，以及进行依赖分析，加工处理等。
``` typescript
import { DepAnlz, Config, DepGraph } from "@depanlz/core"

const depth: number = 3

const anlz: DepAnlz = new DepAnlz(depth)

const config: Config = anlz.preHook()

const depGraph: DepGraph = anlz.coreHook(config)

function callback (config: Config, depGraph: DepGraph): void {
    console.log(config)
    console.log(depGraph)
}

anlz.postHook(callback)
```
