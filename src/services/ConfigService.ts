import {PluginConfigService} from "@wocker/core";

import {Config, ConfigProps} from "../makes/Config";


export class ConfigService {
    public constructor(
        protected readonly pluginConfigService: PluginConfigService
    ) {}

    public async get(): Promise<Config> {
        const data: ConfigProps = await this.pluginConfigService.readJSON("config.json") || {
            services: [
                {
                    name: "default",
                    type: "mariadb",
                    user: "root",
                    password: "toor"
                }
            ]
        };

        const save = async (config: Config): Promise<void> => {
            await this.pluginConfigService.writeJSON("config.json", config.toJSON());
        };

        return new class extends Config {
            public async save(): Promise<void> {
                await save(this);
            }
        }(data);
    }
}
