import AppBuilder from "../builders/AppBuilder";
export default class App {
    static appPath(path) {
        return new AppBuilder().appPath(path);
    }
    static basePath(path) {
        return new AppBuilder().basePath(path);
    }
    static commandsPath(path) {
        return new AppBuilder().commandsPath(path);
    }
    static configPath(path) {
        return new AppBuilder().configPath(path);
    }
    static databasePath(path) {
        return new AppBuilder().databasePath(path);
    }
    static publicPath(path) {
        return new AppBuilder().publicPath(path);
    }
    static resourcesPath(path) {
        return new AppBuilder().resourcesPath(path);
    }
    static routesPath(path) {
        return new AppBuilder().routesPath(path);
    }
    static rootPath() {
        return new AppBuilder().rootPath();
    }
    static storagePath(path) {
        return new AppBuilder().storagePath(path);
    }
}
