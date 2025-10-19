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
import type {RedisPipeline} from "@bejibun/app/types";
import BaseController from "@bejibun/core/bases/BaseController";
import Logger from "@bejibun/logger";
import App from "@bejibun/app";
import {BunRequest} from "bun";

export default class TestController extends BaseController {
    public async app(request: BunRequest): Promise<Response> {
        await App.set("app", {hello: "world"});
        const app = await App.get("app");

        await App.connection("local").set("connection", "This is using custom connection.");
        const connection = await App.connection("local").get("connection");

        const pipeline = await App.pipeline((pipe: RedisPipeline) => {
            pipe.set("app-pipeline-1", "This is app pipeline 1");
            pipe.set("app-pipeline-2", "This is app pipeline 2");

            pipe.get("app-pipeline-1");
            pipe.get("app-pipeline-2");
        });

        const subscriber = await App.subscribe("app-subscribe", (message: string, channel: string) => {
            Logger.setContext(channel).debug(message);
        });
        await App.publish("app-subscribe", "Hai app subscriber!");
        setTimeout(async () => {
            await subscriber.unsubscribe();
        }, 500);

        return super.response.setData({app, connection, pipeline}).send();
    }
}
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