import MaintenanceBuilder from "../builders/MaintenanceBuilder";
import PathBuilder from "../builders/PathBuilder";
export default class App {
    static get Path() {
        return new PathBuilder();
    }
    static get Maintenance() {
        return new MaintenanceBuilder();
    }
}
