
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { MicrofrontendsMemoryPersistence } from 'pip-services-microfrontends-node';
import { MicrofrontendsController } from 'pip-services-microfrontends-node';
import { MicrofrontendsDirectClientV1 } from '../../src/version1/MicrofrontendsDirectClientV1';
import { MicrofrontendsClientFixtureV1 } from './MicrofrontendsClientFixtureV1';

suite('MicrofrontendsDirectClientV1', () => {
    let client: MicrofrontendsDirectClientV1;
    let fixture: MicrofrontendsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-microfrontends', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MicrofrontendsDirectClientV1();
        client.setReferences(references);

        fixture = new MicrofrontendsClientFixtureV1(client);

        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
