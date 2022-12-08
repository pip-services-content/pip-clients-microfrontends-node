let process = require('process');

import { ConfigParams } from 'pip-services3-commons-node';

import { MicrofrontendsClientFixtureV1 } from './MicrofrontendsClientFixtureV1';
import { MicrofrontendsLambdaClientV1 } from '../../src/version1/MicrofrontendsLambdaClientV1';

suite('MicrofrontendsLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        "lambda.connection.protocol", "aws",
        "lambda.connection.arn", AWS_LAMDBA_ARN,
        "lambda.credential.access_id", AWS_ACCESS_ID,
        "lambda.credential.access_key", AWS_ACCESS_KEY,
        "lambda.options.connection_timeout", 30000
    );
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: MicrofrontendsLambdaClientV1;
    let fixture: MicrofrontendsClientFixtureV1;

    setup((done) => {
        client = new MicrofrontendsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new MicrofrontendsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});