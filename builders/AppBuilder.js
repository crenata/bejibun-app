import { defineValue } from "@bejibun/utils";
import path from "path";
export default class AppBuilder {
    cwd;
    constructor() {
        this.cwd = process.cwd();
    }
    appPath(_path) {
        return path.resolve(this.cwd, `app/${defineValue(_path, "")}`);
    }
    basePath(_path) {
        return path.resolve(this.cwd, defineValue(_path, ""));
    }
    commandsPath(_path) {
        return path.resolve(this.cwd, `commands/${defineValue(_path, "")}`);
    }
    configPath(_path) {
        return path.resolve(this.cwd, `config/${defineValue(_path, "")}`);
    }
    databasePath(_path) {
        return path.resolve(this.cwd, `database/${defineValue(_path, "")}`);
    }
    publicPath(_path) {
        return path.resolve(this.cwd, `public/${defineValue(_path, "")}`);
    }
    resourcesPath(_path) {
        return path.resolve(this.cwd, `resources/${defineValue(_path, "")}`);
    }
    storagePath(_path) {
        return path.resolve(this.cwd, `storage/${defineValue(_path, "")}`);
    }
}
