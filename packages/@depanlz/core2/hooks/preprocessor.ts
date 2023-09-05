/**
 * preHook 钩子进行预检处理
 * 1. 检查是否从项目根目录启动（是否含有package.json文件）
 * 2. 检查是否已经下载完成依赖（是否含有node_modules目录）
 * 3. 检查使用的包管理器是什么（所含有的lock文件是什么类型）
 *
 * 返回package.json node_modules的绝对目录，以及包管理器名称
 */
import * as path from "path";
import * as fs from 'fs';

const CWD = process.cwd();
const PKG_JSON_DIR = path.join(CWD, "package.json");
const NODE_MODULES_DIR = path.join(CWD, "node_modules");
const NPM_LOCK_DIR = path.join(CWD, "package-lock.json");
const YARN_LOCK_DIR = path.join(CWD, "yarn.lock");
const PNPM_LOCK_DIR = path.join(CWD, "pnpm-lock.yaml");

function isFileExists(filePath: string): boolean {
    try {
        fs.accessSync(filePath, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

function detectPackageManager(): string {
    if (isFileExists(NPM_LOCK_DIR)) {
        return "npm";
    } else if (isFileExists(YARN_LOCK_DIR)) {
        return "yarn";
    } else if (isFileExists(PNPM_LOCK_DIR)) {
        return "pnpm";
    }
    return "";
}

function preprocessor(DEPTH: number) {
    if (!isFileExists(PKG_JSON_DIR)) {
        throw new Error(`31m当前工作目录为${CWD},不存在package.json`);
    }

    if (!isFileExists(NODE_MODULES_DIR)) {
        throw new Error("不存在node_modules");
    }

    const PKG_MANAGER = detectPackageManager();

    if (!PKG_MANAGER) {
        throw new Error("不存在lock文件");
    }

    const config = {
        PKG_JSON_DIR,
        NODE_MODULES_DIR,
        PKG_MANAGER,
        DEPTH
    };

    return config;
}

export default preprocessor;
