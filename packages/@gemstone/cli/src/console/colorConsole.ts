import {red, yellow, green} from '../utils/colorful';

function log(message: string): void {
    console.log(message);
}
function warn(message: string): void {
    console.log(yellow(message));
}
function error(message: string): void {
    console.log(red(message));
}
function success(message: string): void {
    console.log(green(message));
}

export {
    log,
    warn,
    error,
    success
};
