import {PickProperties} from "@wocker/core";

import {Service, ServiceProps} from "./Service";


export type ConfigProps = PickProperties<Omit<Config, "services">> & {
    services: ServiceProps[];
};

export abstract class Config {
    public services: Service[];

    public constructor(props: ConfigProps) {
        const {
            services
        } = props;

        this.services = services.map((serviceProps) => {
            return new Service(serviceProps);
        });
    }

    public getService(name: string): Service | undefined {
        return this.services.find((service) => {
            return service.name === name;
        });
    }

    public abstract save(): Promise<void>;

    public toJSON(): ConfigProps {
        return {
            services: this.services.map(service => service.toJSON())
        };
    }
}