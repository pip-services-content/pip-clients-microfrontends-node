"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsNullClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class MicrofrontendsNullClientV1 {
    getMicrofrontends(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getMicrofrontendById(correlationId, microfrontendId, callback) {
        callback(null, null);
    }
    createMicrofrontend(correlationId, microfrontend, callback) {
        callback(null, microfrontend);
    }
    updateMicrofrontend(correlationId, microfrontend, callback) {
        callback(null, microfrontend);
    }
    deleteMicrofrontendById(correlationId, microfrontendId, callback) {
        callback(null, null);
    }
}
exports.MicrofrontendsNullClientV1 = MicrofrontendsNullClientV1;
//# sourceMappingURL=MicrofrontendsNullClientV1.js.map