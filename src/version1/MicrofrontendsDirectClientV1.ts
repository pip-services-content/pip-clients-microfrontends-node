import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
//import { IMicrofrontendsController } from 'pip-services-microfrontends-node';
import { MicrofrontendV1 } from './MicrofrontendV1';

export class MicrofrontendsDirectClientV1 extends DirectClient<any> implements IMicrofrontendsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-microfrontends", "controller", "*", "*", "*"))
    }

    public getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
        this._controller.getMicrofrontends(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getMicrofrontendById(correlationId: string, microfrontendId: string, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
        this._controller.getMicrofrontendById(correlationId, microfrontendId, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }

    public createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');
        this._controller.createMicrofrontend(correlationId, microfrontend, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }

    public updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1, 
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');
        this._controller.updateMicrofrontend(correlationId, microfrontend, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }

    public deleteMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
        this._controller.deleteMicrofrontendById(correlationId, microfrontendId, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }
}