import {Plugin, PluginConfigService} from "@wocker/core";

import {DatabaseController} from "./controllers/DatabaseController";
import {ConfigService} from "./services/ConfigService";
import {DatabaseService} from "./services/DatabaseService";


@Plugin({
    name: "db",
    controllers: [
        DatabaseController
    ],
    providers: [
        PluginConfigService,
        ConfigService,
        DatabaseService
    ],
    imports: [],
    exports: []
})
export default class DatabasePlugin {}
