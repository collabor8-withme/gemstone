# 快速上手
在进行项目依赖分析之前，你应该已经有一个`NodeJS`项目了，请事先检查一下你的项目是否丢失`package.json`文件，是否已经安装了所需要的依赖项，是否含有正确的锁文件等。

## 安装CLI工具及core模块
::: code-group

```sh [npm]
$ npm install -D @depanlz/cli @depanlz/core
```

```sh [pnpm]
$ pnpm add -D @depanlz/cli @depanlz/core 
```

```sh [yarn]
$ yarn add -D @depanlz/cli @depanlz/core 
```

:::

## 使用
::: code-group

```sh [npm]
$ npx depanlz analyze
```

```sh [pnpm]
$ pnpm depanlz analyze 
```

```sh [yarn]
$ yarn depanlz analyze 
```

:::
