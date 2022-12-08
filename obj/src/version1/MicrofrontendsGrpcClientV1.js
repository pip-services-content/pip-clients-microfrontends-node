"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsGrpcClientV1 = void 0;
let _ = require('lodash');
let services = require('../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../src/protos/microfrontends_v1_pb');
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const MicrofrontendsGrpcConverterV1_1 = require("./MicrofrontendsGrpcConverterV1");
class MicrofrontendsGrpcClientV1 extends pip_services3_grpc_node_1.GrpcClient {
    constructor() {
        super(services.MicrofrontendsClient);
    }
    getMicrofrontends(correlationId, filter, paging, callback) {
        let request = new messages.MicrofrontendPageRequest();
        MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromPagingParams(paging));
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
        this.call('get_microfrontends', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
            let result = response
                ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontendPage(response.getPage())
                : null;
            callback(err, result);
        });
    }
    getMicrofrontendById(correlationId, microfrontendId, callback) {
        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
        this.call('get_microfrontend_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
            let result = response
                ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                : null;
            callback(err, result);
        });
    }
    createMicrofrontend(correlationId, microfrontend, callback) {
        let microfrontendObj = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);
        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);
        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');
        this.call('create_microfrontend', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
            let result = response
                ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                : null;
            callback(err, result);
        });
    }
    updateMicrofrontend(correlationId, microfrontend, callback) {
        let microfrontendObj = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);
        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');
        this.call('update_microfrontend', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
            let result = response
                ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                : null;
            callback(err, result);
        });
    }
    deleteMicrofrontendById(correlationId, microfrontendId, callback) {
        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);
        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
        this.call('delete_microfrontend_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
            let result = response
                ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend())
                : null;
            callback(err, result);
        });
    }
}
exports.MicrofrontendsGrpcClientV1 = MicrofrontendsGrpcClientV1;
//# sourceMappingURL=MicrofrontendsGrpcClientV1.js.map