import { success, log } from "./colorConsole";

function globalConsole(version: string) {
    success('\n==================================');
    success(`🔍depanlz version ${version}`);
    success('==================================\n');
    log('Usage: depanlz <command> [options]\n');
    log("Global Options:");
    log('   -V, --version                          Show the version number');
    log('   -h, --help                             Display help for command\n');
    log('Commands:');
    log('   analyze [options]                      Analyze dependencies for your project');
}

export default globalConsole;