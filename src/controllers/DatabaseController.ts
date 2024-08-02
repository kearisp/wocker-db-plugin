import {
    Controller,
    Command
} from "@wocker/core";

import {DatabaseService} from "../services/DatabaseService";


@Controller()
export class DatabaseController {
    public constructor(
        protected readonly databaseService: DatabaseService
    ) {}

    @Command("db:create")
    public async create() {
        await this.databaseService.create();
    }

    @Command("db:start <service>")
    public async start(
        service: string
    ): Promise<void> {

    }

    @Command("db:stop <service>")
    public async stop(
        service: string
    ): Promise<void> {

    }
}
