import { success, log} from "./colorConsole";


function analyzeConsole() {
    success('\n==================================');
    success(`🔍depanlz analyze`);
    success('==================================\n');
    log('Usage: depanlz analyze [options]\n');
    log("Options:");
    log('   -j, --json                             Show the version number');
    log('   -h, --help                             Display help for command');
    log('   -w, --web                              Start a web server for check dependencies\n');
}

export default analyzeConsole;