"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let process = require('process');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const MicrofrontendsClientFixtureV1_1 = require("./MicrofrontendsClientFixtureV1");
const MicrofrontendsLambdaClientV1_1 = require("../../src/version1/MicrofrontendsLambdaClientV1");
suite('MicrofrontendsLambdaClient', () => {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";
    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;
    let config = pip_services3_commons_node_1.ConfigParams.fromTuples("lambda.connection.protocol", "aws", "lambda.connection.arn", AWS_LAMDBA_ARN, "lambda.credential.access_id", AWS_ACCESS_ID, "lambda.credential.access_key", AWS_ACCESS_KEY, "lambda.options.connection_timeout", 30000);
    let lambdaConfig = config.getSection('lambda');
    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;
    let client;
    let fixture;
    setup((done) => {
        client = new MicrofrontendsLambdaClientV1_1.MicrofrontendsLambdaClientV1();
        client.configure(lambdaConfig);
        fixture = new MicrofrontendsClientFixtureV1_1.MicrofrontendsClientFixtureV1(client);
        client.open(null, done);
    });
    teardown((done) => {
        client.close(null, done);
    });
    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });
});
//# sourceMappingURL=MicrofrontendsLambdaClientV1.test.js.map