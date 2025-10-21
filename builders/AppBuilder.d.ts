export default class AppBuilder {
    protected cwd: string;
    constructor();
    /**
     * Path Manager
     */
    appPath(_path?: string): string;
    basePath(_path?: string): string;
    commandsPath(_path?: string): string;
    configPath(_path?: string): string;
    databasePath(_path?: string): string;
    publicPath(_path?: string): string;
    resourcesPath(_path?: string): string;
    routesPath(_path?: string): string;
    rootPath(_path?: string): string;
    storagePath(_path?: string): string;
    /**
     * Utils
     */
    isMaintenanceMode(): Promise<boolean>;
}
