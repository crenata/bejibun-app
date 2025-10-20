export default class App {
    static appPath(path?: string): string;
    static basePath(path?: string): string;
    static commandsPath(path?: string): string;
    static configPath(path?: string): string;
    static databasePath(path?: string): string;
    static publicPath(path?: string): string;
    static resourcesPath(path?: string): string;
    static rootPath(): string;
    static storagePath(path?: string): string;
}
