import MaintenanceBuilder from "../builders/MaintenanceBuilder";
import PathBuilder from "../builders/PathBuilder";
export default class App {
    static get Path(): PathBuilder;
    static get Maintenance(): MaintenanceBuilder;
}
