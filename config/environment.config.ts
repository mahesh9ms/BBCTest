import { Env } from "../types/env";

function getTestEnv() {
    return process.env.TEST_ENV;
}

function URL() {
    switch (getTestEnv()) {
        case Env.LOCAL:
            return "https://127.0.0.1:8080/";
        case Env.DEV:
            return "https://www.dev.bbc.co.uk/";
        case Env.QA:
            return "https://www.qa.bbc.co.uk/";
        case Env.SIT:
            return "https://www.sit.bbc.co.uk/";
        case Env.OTE:
            return "https://www.ote.bbc.co.uk/";
        case Env.PROD:
            return "https://www.bbc.co.uk/";
        default:
            return "https://www.bbc.co.uk/";
    }
}

export { URL }