import { join } from 'path';
import { DepAnlz } from '@depanlz/core';
import analyzeConsole from '../console/analyzeConsole';
import { stringifyGraph, ObjifyGraph } from './transformGraph';
import { writeFileSync } from 'fs';
import { success } from '../console/colorConsole';

function analyze(argument: Array<string>) {

    /**
     * depanlz analyze -h
     * depanlz analyze --help
     */
    const help = argument[0];
    if (help === "-h" || help === "--help") {
        analyzeConsole();
        return;
    }

    /**
     * depanlz analyze -d
     * depanlz analyze --depth
     */
    let depth = 3;
    const dIndex: number = argument.indexOf("-d");
    const depthIndex: number = argument.indexOf("--depth");

    if (dIndex !== -1) {
        const depthNumber: number = parseInt(argument[dIndex + 1]);
        depth = isNaN(depthNumber) ? depth : depthNumber;
    } else if (depthIndex !== -1) {
        const depthNumber: number = parseInt(argument[depthIndex + 1]);
        depth = isNaN(depthNumber) ? depth : depthNumber;
    }

    /**
     * depanlz analyze -j
     * depanlz analyze --json
     */
    const cwd = process.cwd();
    let filePath = join(cwd, "depGraph.json");
    const jsonFlag = argument.includes("--json") || argument.includes("-j");
    const jIndex = argument.indexOf("-j");
    const jsonIndex = argument.indexOf("--json");

    if (jIndex !== -1) {
        let fileName = argument[jIndex + 1];
        if (fileName === undefined) {
            fileName = String("-" + fileName);
        }
        filePath = fileName.startsWith("-") ? filePath : join(cwd, fileName);
    } else if (jsonIndex !== -1) {
        let fileName: string = argument[jsonIndex + 1];
        if (fileName === undefined) {
            fileName = String("-" + fileName);
        }
        filePath = fileName.startsWith("-") ? filePath : join(cwd, fileName);
    }

    /**
     * depanlz analyze -w
     * depanlz analyze --web
     */
    let PORT = 3000;
    const webFlag = argument.includes("-w") || argument.includes("--web");
    const wIndex: number = argument.indexOf("-w");
    const webthIndex: number = argument.indexOf("--web");

    if (wIndex !== -1) {
        const port: number = parseInt(argument[wIndex + 1]);
        PORT = isNaN(port) ? PORT : port;
    } else if (webthIndex !== -1) {
        const port: number = parseInt(argument[webthIndex + 1]);
        PORT = isNaN(port) ? PORT : port;
    }

    const depanlz = new DepAnlz(depth);
    const depGraph = depanlz.lifeCycle();

    if (jsonFlag && !webFlag) {
        const json = stringifyGraph(depGraph);
        writeFileSync(filePath, json);
        success(`Dependency analysis file are created in
        ${filePath}`);
    } else if (webFlag && !jsonFlag) {
        import("@depanlz/web-server").then(module => {
            const { webServer } = module;
            webServer.prototype.PORT = PORT;
            depanlz.postHook(webServer);
        });
    } else if (jsonFlag && webFlag) {
        const json = stringifyGraph(depGraph);
        writeFileSync(filePath, json);
        success(`Dependency analysis file are created in
        ${filePath}\n`);
        import("@depanlz/web-server").then(module => {
            const { webServer } = module;
            webServer.prototype.PORT = PORT;
            depanlz.postHook(webServer);
        });
    } else {
        const obj = ObjifyGraph(depGraph);
        console.log(obj);
    }

}

export {
    analyze
};
