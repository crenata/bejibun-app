<div align="center">

![GitHub top language](https://img.shields.io/github/languages/top/crenata/bejibun-app)
![GitHub all releases](https://img.shields.io/github/downloads/crenata/bejibun-app/total)
![GitHub issues](https://img.shields.io/github/issues/crenata/bejibun-app)
![GitHub](https://img.shields.io/github/license/crenata/bejibun-app)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/crenata/bejibun-app?display_name=tag&include_prereleases)

</div>

# App of Bejibun
App of Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/app

# Using Bejibun
bun ace install @bejibun/app
```

### How to Use
How to use tha package.

```ts
import App from "@bejibun/app";

App.appPath("controllers/TestController.ts"); // .../app/controllers/TestController.ts
App.basePath("package.json"); // .../package.json
App.commandsPath("HelloWorldCommand.ts"); // .../commands/HelloWorldCommand.ts
App.configPath("database.ts"); // .../config/database.ts
App.databasePath("migrations/20251019_000001_tests.ts"); // .../database/migrations/20251019_000001_tests.ts
App.publicPath("images/logo.png"); // .../public/images/logo.png
App.resourcesPath("views/index.ts"); // .../resources/views/index.ts
App.routesPath("api.ts"); // .../routes/api.ts
App.rootPath(); // .../ root of bejibun framework
App.storagePath("app/public/file.txt"); // .../storage/app/public/file.txt
```

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via PayPal :

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?logo=paypal)](https://paypal.me/hafiizhghulam)

Or if you are prefer using crypto :

| EVM | Solana |
| --- | ------ |
| <img src="https://github.com/crenata/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/crenata/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3 | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn |