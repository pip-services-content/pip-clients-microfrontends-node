"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsCommandableGrpcClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class MicrofrontendsCommandableGrpcClientV1 extends pip_services3_grpc_node_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/microfrontends');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getMicrofrontends(correlationId, filter, paging, callback) {
        this.callCommand('get_microfrontends', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getMicrofrontendById(correlationId, microfrontendId, callback) {
        this.callCommand('get_microfrontend_by_id', correlationId, {
            microfrontend_id: microfrontendId
        }, callback);
    }
    createMicrofrontend(correlationId, microfrontend, callback) {
        this.callCommand('create_microfrontend', correlationId, {
            microfrontend: microfrontend
        }, callback);
    }
    updateMicrofrontend(correlationId, microfrontend, callback) {
        this.callCommand('update_microfrontend', correlationId, {
            microfrontend: microfrontend
        }, callback);
    }
    deleteMicrofrontendById(correlationId, microfrontendId, callback) {
        this.callCommand('delete_microfrontend_by_id', correlationId, {
            microfrontend_id: microfrontendId
        }, callback);
    }
}
exports.MicrofrontendsCommandableGrpcClientV1 = MicrofrontendsCommandableGrpcClientV1;
//# sourceMappingURL=MicrofrontendsCommandableGrpcClientV1.js.map