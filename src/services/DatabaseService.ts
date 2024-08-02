import {Injectable} from "@wocker/core";
import {promptText, promptSelect} from "@wocker/utils";

import {MariadbService} from "./MariadbService";
import {
    Service,
    MARIADB_TYPE,
    MONGODB_TYPE,
    PGSQL_TYPE
} from "../makes/Service";


@Injectable()
export class DatabaseService {
    public constructor(

    ) {}

    public async create(): Promise<void> {
        await promptSelect({
            message: "Type:",
            options: [
                {label: "MariaDB", value: MARIADB_TYPE},
                {label: "MongoDB", value: MONGODB_TYPE},
                {label: "Postgres", value: PGSQL_TYPE}
            ]
        });

        await promptText({
            message: "ID:",
            type: "number",
            prefix: "[",
            suffix: "]"
        });

        await promptText({
            message: "Password:",
            type: "password",
            prefix: "test:"
        });
    }

    public async start(name: string): Promise<void> {
        //
    }

    public async stop(): Promise<void> {
        //
    }
}
