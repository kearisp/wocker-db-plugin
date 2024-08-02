import {
    Injectable,
    DockerService
} from "@wocker/core";


@Injectable()
export class MariadbService {
    public constructor(
        protected readonly dockerService: DockerService
    ) {}

    public async start(): Promise<void> {
        //
    }
}
