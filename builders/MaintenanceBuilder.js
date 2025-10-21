import AppConfig from "../config/app";
export default class MaintenanceBuilder {
    config;
    constructor() {
        this.config = AppConfig.maintenance;
    }
    async isMaintenanceMode() {
        return Bun.file(this.config.file).exists();
    }
    async getData() {
        return Bun.file(this.config.file).json();
    }
}
