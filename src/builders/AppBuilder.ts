import {defineValue} from "@bejibun/utils";
import path from "path";

export default class AppBuilder {
    protected cwd: string;

    public constructor() {
        this.cwd = process.cwd();
    }

    public appPath(_path?: string): string {
        return path.resolve(this.cwd, `app/${defineValue(_path, "")}`);
    }

    public basePath(_path?: string): string {
        return path.resolve(this.cwd, defineValue(_path, ""));
    }

    public commandsPath(_path?: string): string {
        return path.resolve(this.cwd, `commands/${defineValue(_path, "")}`);
    }

    public configPath(_path?: string): string {
        return path.resolve(this.cwd, `config/${defineValue(_path, "")}`);
    }

    public databasePath(_path?: string): string {
        return path.resolve(this.cwd, `database/${defineValue(_path, "")}`);
    }

    public publicPath(_path?: string): string {
        return path.resolve(this.cwd, `public/${defineValue(_path, "")}`);
    }

    public resourcesPath(_path?: string): string {
        return path.resolve(this.cwd, `resources/${defineValue(_path, "")}`);
    }

    public routesPath(_path?: string): string {
        return path.resolve(this.cwd, `routes/${defineValue(_path, "")}`);
    }

    public rootPath(_path?: string): string {
        return path.resolve(this.cwd, defineValue(_path, ""));
    }

    public storagePath(_path?: string): string {
        return path.resolve(this.cwd, `storage/${defineValue(_path, "")}`);
    }
}