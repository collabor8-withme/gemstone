import { success, log} from "./colorConsole";


function analyzeConsole() {
    success('\n==================================');
    success(`🔍depanlz analyze`);
    success('==================================\n');
    log('Usage: depanlz analyze [options]\n');
    log("Options:");
    log('   -j, --json [file-path]                 Output dependency graph as a json file');
    log('   -w, --web [port]                       Start a web server to render dependency graph');
    log('   -h, --help                             Display help for command\n');
}

export default analyzeConsole;
