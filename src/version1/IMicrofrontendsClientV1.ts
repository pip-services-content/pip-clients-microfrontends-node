import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { MicrofrontendV1 } from './MicrofrontendV1';

export interface IMicrofrontendsClientV1 {
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void;

    getMicrofrontendById(correlationId: string, microfrontend_id: string, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;

    deleteMicrofrontendById(correlationId: string, microfrontend_id: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void;
}
