"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services_microfrontends_node_1 = require("pip-services-microfrontends-node");
const pip_services_microfrontends_node_2 = require("pip-services-microfrontends-node");
const MicrofrontendsDirectClientV1_1 = require("../../src/version1/MicrofrontendsDirectClientV1");
const MicrofrontendsClientFixtureV1_1 = require("./MicrofrontendsClientFixtureV1");
suite('MicrofrontendsDirectClientV1', () => {
    let client;
    let fixture;
    suiteSetup((done) => {
        let logger = new pip_services3_components_node_1.ConsoleLogger();
        let persistence = new pip_services_microfrontends_node_1.MicrofrontendsMemoryPersistence();
        let controller = new pip_services_microfrontends_node_2.MicrofrontendsController();
        let references = pip_services3_commons_node_2.References.fromTuples(new pip_services3_commons_node_1.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller);
        controller.setReferences(references);
        client = new MicrofrontendsDirectClientV1_1.MicrofrontendsDirectClientV1();
        client.setReferences(references);
        fixture = new MicrofrontendsClientFixtureV1_1.MicrofrontendsClientFixtureV1(client);
        client.open(null, done);
    });
    suiteTeardown((done) => {
        client.close(null, done);
    });
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});
//# sourceMappingURL=MicrofrontendsDirectClientV1.test.js.map