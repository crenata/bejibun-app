export default class MaintenanceBuilder {
    protected config: Record<string, any>;
    constructor();
    isMaintenanceMode(): Promise<boolean>;
    getData(): Promise<any>;
}
