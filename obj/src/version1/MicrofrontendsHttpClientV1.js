"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsHttpClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class MicrofrontendsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
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
exports.MicrofrontendsHttpClientV1 = MicrofrontendsHttpClientV1;
//# sourceMappingURL=MicrofrontendsHttpClientV1.js.map