import { Config } from '../index';
import preHook from "./hooks/preHook";
import coreHook from "./hooks/coreHook";
import DepGraph from './DepGraph';

class DepAnlz {
    depth: number

    constructor(depth: number) {
        this.depth = depth;
    }

    preHook(): Config {
        return preHook(this.depth);
    }

    coreHook(config: Config): DepGraph {
        return coreHook(config);
    }

    postHook(callback: (config: Config, depGraph: DepGraph) => any): any {
        const config = preHook(this.depth);
        const depGraph = coreHook(config);
        const result = callback(config, depGraph);
        return result;
    }

    lifeCycle() {
        const config: Config = this.preHook();
        const depGraph: DepGraph = this.coreHook(config);
        return depGraph;
    }
}

export {
    DepAnlz
};

