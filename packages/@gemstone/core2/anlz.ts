import preprocessor from "./hooks/preprocessor";
import { Config, DepGraph } from "./DepGraph";
import core from "./hooks/coreprocessor";

class GemStone {
    depth: number
    constructor(depth: number) {
        this.depth = depth
    }

    mining(): Config {
        return preprocessor(this.depth)
    }

    carving(config: Config): DepGraph {
        return core(config)
    }

    polishing(callback: (config: Config, depGraph: DepGraph) => any) {
        const config = this.mining()
        const depGraph = this.carving(config)
        return callback(config, depGraph)
    }
}

export {
    GemStone
};





