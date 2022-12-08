import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableGrpcClient } from 'pip-services3-grpc-node';

import { MicrofrontendV1 } from './MicrofrontendV1';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';

export class MicrofrontendsCommandableGrpcClientV1 extends CommandableGrpcClient implements IMicrofrontendsClientV1 {       
    
    constructor(config?: any) {
        super('v1/microfrontends');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<MicrofrontendV1>) => void): void {
        this.callCommand( 
            'get_microfrontends', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this.callCommand( 
            'get_microfrontend_by_id',
            correlationId,
            {
                microfrontend_id: microfrontendId
            }, 
            callback
        );        
    }

    public createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this.callCommand(
            'create_microfrontend',
            correlationId,
            {
                microfrontend: microfrontend
            }, 
            callback
        );
    }

    public updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this.callCommand(
            'update_microfrontend', 
            correlationId,
            {
                microfrontend: microfrontend
            }, 
            callback
        );
    }

    public deleteMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, microfrontend: MicrofrontendV1) => void): void {
        this.callCommand(
            'delete_microfrontend_by_id', 
            correlationId,
            {
                microfrontend_id: microfrontendId
            }, 
            callback
        );
    }
    
}
