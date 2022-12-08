"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services_microfrontends_node_1 = require("pip-services-microfrontends-node");
const pip_services_microfrontends_node_2 = require("pip-services-microfrontends-node");
const pip_services_microfrontends_node_3 = require("pip-services-microfrontends-node");
const MicrofrontendsGrpcClientV1_1 = require("../../src/version1/MicrofrontendsGrpcClientV1");
const MicrofrontendsClientFixtureV1_1 = require("./MicrofrontendsClientFixtureV1");
var httpConfig = pip_services3_commons_node_2.ConfigParams.fromTuples("connection.protocol", "http", "connection.host", "localhost", "connection.port", 3000);
suite('MicrofrontendsGrpcClientV1', () => {
    let service;
    let client;
    let fixture;
    suiteSetup((done) => {
        let logger = new pip_services3_components_node_1.ConsoleLogger();
        let persistence = new pip_services_microfrontends_node_1.MicrofrontendsMemoryPersistence();
        let controller = new pip_services_microfrontends_node_2.MicrofrontendsController();
        service = new pip_services_microfrontends_node_3.MicrofrontendsGrpcServiceV1();
        service.configure(httpConfig);
        let references = pip_services3_commons_node_3.References.fromTuples(new pip_services3_commons_node_1.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_node_1.Descriptor('pip-services-microfrontends', 'service', 'grpc', 'default', '1.0'), service);
        controller.setReferences(references);
        service.setReferences(references);
        client = new MicrofrontendsGrpcClientV1_1.MicrofrontendsGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);
        fixture = new MicrofrontendsClientFixtureV1_1.MicrofrontendsClientFixtureV1(client);
        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});
//# sourceMappingURL=MicrofrontendsGrpcClientV1.test.js.map