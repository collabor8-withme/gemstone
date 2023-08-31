import { DepGraph, DepNode, DepRel } from "@depche/core";

type DependenciesTree = {
    name: string,
    version: string,
    depth: number,
    dependencies: DependenciesTree[] | null;
}

function findNodeById(nodes: Array<DepNode>, id: string) {
    return nodes.find(node => node.id === id);
}

function buildDependencyTree(node: any, nodes: Array<DepNode>, edges: Array<DepRel>,): DependenciesTree {
    const relations = edges.filter(edge => edge.source === node.id);
    const dependencies = relations.map(relation => buildDependencyTree(findNodeById(nodes, relation.target), nodes, edges));
    return {
        name: node.dependence,
        version: node.version,
        depth: node.level,
        dependencies: dependencies.length === 0 ? null : dependencies
    };
}

function stringifyGraph(depGraph: DepGraph) {
    const { nodes, edges } = depGraph;
    const rootNode = nodes[0];
    return JSON.stringify(buildDependencyTree(rootNode, nodes, edges));
}

function ObjifyGraph(depGraph: DepGraph) {
    const { nodes, edges } = depGraph;
    const rootNode = nodes[0];
    return buildDependencyTree(rootNode, nodes, edges);
}

export {
    ObjifyGraph,
    stringifyGraph
};

