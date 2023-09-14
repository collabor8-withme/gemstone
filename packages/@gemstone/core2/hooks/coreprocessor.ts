import path from "path";
import fs from "fs";
import { Config, DepGraph, DepNode } from "../DepGraph";

const depGraph = new DepGraph()

function coreprocessor(config: Config) {
    const { PKG_JSON_DIR, PKG_MANAGER  } = config
    const content = fs.readFileSync(PKG_JSON_DIR, {
        encoding: "utf-8"
    });
    const { dependencies = {}, name = "YourProject", version = "@latest" } = JSON.parse(content);
    const rootNode = {
        _id: `${name} ${version}`,
        _name: name,
        _version: version,
        _dependencies: dependencies,
        _depth: 0
    }
    depGraph.addNode(rootNode)

    if (PKG_MANAGER === "yarn" || PKG_MANAGER === "npm") {
        npmAdapter(rootNode, config, 1)
    }
    if (PKG_MANAGER === "pnpm") {
        pnpmAdapter(rootNode, config, 1)
    }

    return depGraph
}

function npmAdapter(parentNode: DepNode, config: Config, depth: number) {
    const { NODE_MODULES_DIR, DEPTH } = config

    for (const key in parentNode._dependencies) {
        if (depth === DEPTH + 1) {
            break;
        }
        const nestedPkgJson = path.join(NODE_MODULES_DIR, key, "package.json");
        const content = fs.readFileSync(nestedPkgJson, {
            encoding: "utf-8"
        });
        const { dependencies = {}, name, version } = JSON.parse(content);
        const currentNode = {
            _id: `${name} ${version}`,
            _name: name,
            _version: version,
            _dependencies: dependencies,
            _depth: depth
        }
        depGraph.addNode(currentNode)
        depGraph.addEdge(parentNode._id, currentNode._id)
        npmAdapter(currentNode, config, depth + 1)
    }
}

// function formatDepName(name: string, version: string) {
//     if (name.startsWith("@")) {
//         const separatorIndex = name.indexOf("/");
//         if (separatorIndex !== -1) {
//             const packageName = name.substring(0, separatorIndex);
//             const packagePath = name.substring(separatorIndex + 1);
//             name = `${packageName}+${packagePath}`
//         }
//     }
//     return `${name}@${version}`;
// }

function pnpmAdapter(parentNode: DepNode, config: Config, depth: number) {
    const { NODE_MODULES_DIR, DEPTH } = config

    // const { _name, _version } = parentNode

    for (const key in parentNode._dependencies) {
        if (depth === DEPTH + 1) {
            break;
        }
        console.log(depth)

        let nestedPkgJson;
        if (depth === 1) {
            nestedPkgJson = path.join(NODE_MODULES_DIR, key, "package.json");
        } else {
            nestedPkgJson = path.join(NODE_MODULES_DIR, ".pnpm/node_modules", key, "package.json");
        }

        console.log(nestedPkgJson)

        const content = fs.readFileSync(nestedPkgJson, {
            encoding: "utf-8"
        });

        const { dependencies = {}, name, version } = JSON.parse(content);
        const currentNode = {
            _id: `${name} ${version}`,
            _name: name,
            _version: version,
            _dependencies: dependencies,
            _depth: depth
        }
        depGraph.addNode(currentNode)
        depGraph.addEdge(parentNode._id, currentNode._id)
        pnpmAdapter(currentNode, config, depth + 1)
    }
}

export default coreprocessor