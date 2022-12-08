import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { MicrofrontendV1 } from './MicrofrontendV1';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
export declare class MicrofrontendsHttpClientV1 extends CommandableHttpClient implements IMicrofrontendsClientV1 {
    constructor(config?: any);
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;
    getMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    deleteMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
}
