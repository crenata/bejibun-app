import App from "@/facades/App";

const config: Record<string, any> = {
    maintenance: {
        file: App.storagePath("framework/maintenance.down.json"),
    }
};

export default config;