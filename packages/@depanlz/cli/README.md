# @depanlz/cli
`DepAnlz CLI`工具需要依赖于`@depanlz/core`模块来进行工作，它为开发者实现依赖分析提供了更加方便的操作，可直接使用命令行命令来快速分析项目依赖。

## 快速上手
### 下载CLI工具包以及core模块
```sh [npm]
$ npm install -D @depanlz/cli @depanlz/core
```

```sh [pnpm]
$ pnpm add -D @depanlz/cli @depanlz/core 
```

```sh [yarn]
$ yarn add -D @depanlz/cli @depanlz/core 
```

### 通过命令行使用命令

```sh [npm]
$ npx depanlz analyze
```

```sh [pnpm]
$ pnpm depanlz analyze 
```

```sh [yarn]
$ yarn depanlz analyze 
```

### 全局可选项
#### `-V`, `--version`
通过该参数可以查看 `@depanlz/cli` 的版本

```sh [npm]
$ npx depanlz -V
```

```sh [pnpm]
$ pnpm depanlz -V
```

```sh [yarn]
$ yarn depanlz -V
```

#### `-h`, `--help`
通过该参数可以查看 `@depanlz/cli` 的命令帮助

```sh [npm]
$ npx depanlz -h
```

```sh [pnpm]
$ pnpm depanlz -h
```

```sh [yarn]
$ yarn depanlz -h
```
### analyze 命令可选项

#### `-j`, `--json` [file-path]
通过该参数可以通过CLI生成一个项目依赖关系的JSON文件。

```sh [npm]
$ npx depanlz analyze -j
```

```sh [pnpm]
$ pnpm depanlz analyze -j
```

```sh [yarn]
$ yarn depanlz analyze -j
```

#### `-w`, `--web` [port]
通过该参数可以通过CLI启动一个web server，同时通过echarts渲染可视化依赖关系图。

```sh [npm]
$ npx depanlz analyze -w
```

```sh [pnpm]
$ pnpm depanlz analyze -w
```

```sh [yarn]
$ yarn depanlz analyze -w
```

#### `-h`, `--help`
通过该参数可以查看 `analyze` 命令的所有可选配置

```sh [npm]
$ npx depanlz analyze -h
```

```sh [pnpm]
$ pnpm depanlz analyze -h
```

```sh [yarn]
$ yarn depanlz analyze -h
```
