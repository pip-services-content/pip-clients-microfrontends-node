import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';
export declare class MicrofrontendsNullClientV1 implements IMicrofrontendsClientV1 {
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;
    getMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
    deleteMicrofrontendById(correlationId: string, microfrontendId: string, callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
}
