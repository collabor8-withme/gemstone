import { red } from "./colorful";

class UnkonwnCommandError extends Error {
    constructor(message: string) {
        super(red(message));
        this.name = "UnkonwnCommandError";
    }
}

export {
    UnkonwnCommandError,
};