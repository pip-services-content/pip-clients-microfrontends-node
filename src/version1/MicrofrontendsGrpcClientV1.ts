let _ = require('lodash');
let services = require('../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../src/protos/microfrontends_v1_pb');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';
import { MicrofrontendsGrpcConverterV1 } from './MicrofrontendsGrpcConverterV1';

export class MicrofrontendsGrpcClientV1 extends GrpcClient implements IMicrofrontendsClientV1 {
        
    public constructor() {
        super(services.MicrofrontendsClient);
    }

    public getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, result: DataPage<MicrofrontendV1>) => void): void {

        let request = new messages.MicrofrontendPageRequest();

        MicrofrontendsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MicrofrontendsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');

        this.call('get_microfrontends',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MicrofrontendsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MicrofrontendsGrpcConverterV1.toMicrofrontendPage(response.getPage())
                    : null;

                callback(err, result);
            }
        );
    }

    public getMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, result: MicrofrontendV1) => void): void {

        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);

        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');

        this.call('get_microfrontend_by_id',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MicrofrontendsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                    : null;

                callback(err, result);
            }
        );        
    }

    public createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1,
        callback: (err: any, result: MicrofrontendV1) => void): void {

        let microfrontendObj = MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);

        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);

        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');

        this.call('create_microfrontend',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MicrofrontendsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                    : null;

                callback(err, result);
            }
        );
    }

    public updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1,
        callback: (err: any, result: MicrofrontendV1) => void): void {

        let microfrontendObj = MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);

        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);
    
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');

        this.call('update_microfrontend',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MicrofrontendsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                    : null;

                callback(err, result);
            }
        );
    }

    public deleteMicrofrontendById(correlationId: string, microfrontendId: string,
        callback: (err: any, result: MicrofrontendV1) => void): void {

        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);

        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');

        this.call('delete_microfrontend_by_id',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MicrofrontendsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                    : null;

                callback(err, result);
            }
        );
    }
  
}
