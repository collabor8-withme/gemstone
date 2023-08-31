import { version } from '../package.json';
import { UnkonwnCommandError } from './utils/Error';
import globalConsole from "./console/globalConsole";
import { analyze } from './command/analyze';
const args = process.argv.slice(2);
const input = args[0];
const argument = process.argv.slice(3);
const globalOptions = ["-V", "--version", "-h", "--help"];
const commands = [undefined, "analyze"];
const flag = globalOptions.includes(input) || commands.includes(input);

try {
    if (!flag) throw new UnkonwnCommandError("(!) You have passed an unrecognized command");
} catch (e) {
    console.log(e);
}

if (input === "-h" || input === "--help" || input === undefined) globalConsole(version);
if (input === "-V" || input === "--version") console.log(`🔍depanlz v${version}`);

if (input === "analyze") {
    analyze(argument);
}

