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

function isArrContainObj(arr: Array<DepNode>, obj: DepNode): boolean {
    return arr.some(node => node.id === obj.id);
}

class DepGraph {
    nodes: Array<DepNode>;
    edges: Array<DepRel>;

    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    insertNode(dependence: string, version: string, level: number) {
        const node: DepNode = {
            id: dependence + version,
            dependence,
            version,
            level
        };
        !isArrContainObj(this.nodes, node) && this.nodes.push(node);
    }

    insertEgde(fromNodeId: string, toNodeId: string) {
        const edge: DepRel = {
            source: fromNodeId,
            target: toNodeId
        };
        this.edges.push(edge);
    }
}

export default DepGraph;
