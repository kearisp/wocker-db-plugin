import {PickProperties} from "@wocker/core";


export type ServiceProps = Omit<PickProperties<Service>, "containerName">;

export const MARIADB_TYPE = "mariadb";
export const MONGODB_TYPE = "mongodb";
export const PGSQL_TYPE = "pgsql";

export type ServiceType = typeof MARIADB_TYPE | typeof MONGODB_TYPE | typeof PGSQL_TYPE;

export class Service {
    public name: string;
    public type: ServiceType;
    public host?: string;
    public user?: string;
    public password?: string;
    public port?: number;

    public constructor(props: ServiceProps) {
        const {
            name,
            type,
            host,
            port,
            user,
            password
        } = props;

        this.name = name;
        this.type = type;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
    }

    public toJSON(): ServiceProps {
        return {
            name: this.name,
            type: this.type,
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password
        };
    }
}
