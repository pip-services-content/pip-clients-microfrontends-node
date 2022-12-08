
import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { MicrofrontendsMemoryPersistence } from 'pip-services-microfrontends-node';
import { MicrofrontendsController } from 'pip-services-microfrontends-node';
import { MicrofrontendsGrpcServiceV1 } from 'pip-services-microfrontends-node';
import { MicrofrontendsGrpcClientV1 } from '../../src/version1/MicrofrontendsGrpcClientV1';
import { MicrofrontendsClientFixtureV1 } from './MicrofrontendsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MicrofrontendsGrpcClientV1', () => {
    let service: MicrofrontendsGrpcServiceV1;
    let client: MicrofrontendsGrpcClientV1;
    let fixture: MicrofrontendsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController();

        service = new MicrofrontendsGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-microfrontends', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MicrofrontendsGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new MicrofrontendsClientFixtureV1(client);

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
