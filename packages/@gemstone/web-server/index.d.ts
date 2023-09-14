type DepNode = {
    id: string,
    dependence: string,
    version: string,
    level: number
}

type Config = {
    PKG_JSON_DIR: string,
    NODE_MODULES_DIR: string,
    PKG_MANAGER: string,
    DEPTH: number
}

type DepRel = {
    source: string,
    target: string
}

declare class DepGraph {
    nodes: Array<DepNode>;
    edges: Array<DepRel>;
    constructor();
}

declare function webServer(config: Config, depGraph: DepGraph): any

export {
    Config,
    DepGraph,
    webServer
}; 