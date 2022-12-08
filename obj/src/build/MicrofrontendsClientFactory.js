"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsClientFactory = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const MicrofrontendsNullClientV1_1 = require("../version1/MicrofrontendsNullClientV1");
const MicrofrontendsDirectClientV1_1 = require("../version1/MicrofrontendsDirectClientV1");
const MicrofrontendsHttpClientV1_1 = require("../version1/MicrofrontendsHttpClientV1");
const MicrofrontendsLambdaClientV1_1 = require("../version1/MicrofrontendsLambdaClientV1");
class MicrofrontendsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(MicrofrontendsClientFactory.NullClientV1Descriptor, MicrofrontendsNullClientV1_1.MicrofrontendsNullClientV1);
        this.registerAsType(MicrofrontendsClientFactory.DirectClientV1Descriptor, MicrofrontendsDirectClientV1_1.MicrofrontendsDirectClientV1);
        this.registerAsType(MicrofrontendsClientFactory.HttpClientV1Descriptor, MicrofrontendsHttpClientV1_1.MicrofrontendsHttpClientV1);
        this.registerAsType(MicrofrontendsClientFactory.LambdaClientV1Descriptor, MicrofrontendsLambdaClientV1_1.MicrofrontendsLambdaClientV1);
    }
}
exports.MicrofrontendsClientFactory = MicrofrontendsClientFactory;
MicrofrontendsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'factory', 'default', 'default', '1.0');
MicrofrontendsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'client', 'null', 'default', '1.0');
MicrofrontendsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'client', 'direct', 'default', '1.0');
MicrofrontendsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'client', 'http', 'default', '1.0');
MicrofrontendsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=MicrofrontendsClientFactory.js.map