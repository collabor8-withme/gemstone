
export type Config = {
    PKG_JSON_DIR: string,
    NODE_MODULES_DIR: string,
    PKG_MANAGER: string,
    DEPTH: number
}

export type DepNode = {
    _id: string,
    _name: string,
    _version: string,
    _dependencies: any
    _depth: number,
}

export type DepRel = {
    [node: string]: string[]
}

class DepGraph {
    nodes: Array<DepNode>
    edges: DepRel
    constructor() {
        this.nodes = []
        this.edges = {}
    }

    findNodeById(id: string) {
        return this.nodes.some(item => item._id === id)
    }

    addNode(node: DepNode) {
        if (!this.findNodeById(node._id)) {
            this.nodes.push(node)
            this.edges[node._id] = []
        }
    }

    addEdge(fromNodeId: string, toNodeId: string) {

        function isExists(arr: string[], id: string) {
            return arr.some(item => item === id)
        }

        if (this.findNodeById(fromNodeId) && this.findNodeById(toNodeId)) {
            if (!isExists(this.edges[fromNodeId], toNodeId))
                this.edges[fromNodeId].push(toNodeId)
        }
    }

}

export {
    DepGraph,
}