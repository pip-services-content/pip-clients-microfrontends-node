import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';

export class MicrofrontendsNullClientV1 implements IMicrofrontendsClientV1 {
            
    public getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void {
        callback(null, new DataPage<MicrofrontendV1>([], 0));
    }

    public getMicrofrontendById(correlationId: string, microfrontendId: string, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        callback(null, null);
    }

    public createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        callback(null, microfrontend);
    }

    public updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        callback(null, microfrontend);
    }

    public deleteMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        callback(null, null);
    }
}