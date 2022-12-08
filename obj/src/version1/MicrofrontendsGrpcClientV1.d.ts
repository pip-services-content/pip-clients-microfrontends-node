import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';
export declare class MicrofrontendsGrpcClientV1 extends GrpcClient implements IMicrofrontendsClientV1 {
    constructor();
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<MicrofrontendV1>) => void): void;
    getMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, result: MicrofrontendV1) => void): void;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, result: MicrofrontendV1) => void): void;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, result: MicrofrontendV1) => void): void;
    deleteMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, result: MicrofrontendV1) => void): void;
}
