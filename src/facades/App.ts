import AppBuilder from "@/builders/AppBuilder";

export default class App {
    /**
     * Path Manager
     */
    public static appPath(path?: string): string {
        return new AppBuilder().appPath(path);
    }

    public static basePath(path?: string): string {
        return new AppBuilder().basePath(path);
    }

    public static commandsPath(path?: string): string {
        return new AppBuilder().commandsPath(path);
    }

    public static configPath(path?: string): string {
        return new AppBuilder().configPath(path);
    }

    public static databasePath(path?: string): string {
        return new AppBuilder().databasePath(path);
    }

    public static publicPath(path?: string): string {
        return new AppBuilder().publicPath(path);
    }

    public static resourcesPath(path?: string): string {
        return new AppBuilder().resourcesPath(path);
    }

    public static routesPath(path?: string): string {
        return new AppBuilder().routesPath(path);
    }

    public static rootPath(path?: string): string {
        return new AppBuilder().rootPath(path);
    }

    public static storagePath(path?: string): string {
        return new AppBuilder().storagePath(path);
    }

    /**
     * Utils
     */
    public static async isMaintenanceMode(): Promise<boolean> {
        return await new AppBuilder().isMaintenanceMode();
    }
}