"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsDirectClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class MicrofrontendsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-microfrontends", "controller", "*", "*", "*"));
    }
    getMicrofrontends(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
        this._controller.getMicrofrontends(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getMicrofrontendById(correlationId, microfrontendId, callback) {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
        this._controller.getMicrofrontendById(correlationId, microfrontendId, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }
    createMicrofrontend(correlationId, microfrontend, callback) {
        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');
        this._controller.createMicrofrontend(correlationId, microfrontend, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }
    updateMicrofrontend(correlationId, microfrontend, callback) {
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');
        this._controller.updateMicrofrontend(correlationId, microfrontend, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }
    deleteMicrofrontendById(correlationId, microfrontendId, callback) {
        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
        this._controller.deleteMicrofrontendById(correlationId, microfrontendId, (err, microfrontend) => {
            timing.endTiming();
            callback(err, microfrontend);
        });
    }
}
exports.MicrofrontendsDirectClientV1 = MicrofrontendsDirectClientV1;
//# sourceMappingURL=MicrofrontendsDirectClientV1.js.map