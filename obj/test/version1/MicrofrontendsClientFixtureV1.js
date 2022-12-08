"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsClientFixtureV1 = void 0;
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
let MICROFRONTEND1 = {
    id: "1",
    name: "Microfrontend 1",
    description: "Main module",
    path_prefix: "md1",
    icon: "icon1",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module1",
    element_name: "main_module",
    params: {}
};
let MICROFRONTEND2 = {
    id: '2',
    name: "Microfrontend 2",
    description: "Second module",
    path_prefix: "md2",
    icon: "icon2",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module2",
    element_name: "second_module",
    params: {}
};
class MicrofrontendsClientFixtureV1 {
    constructor(client) {
        this._client = client;
    }
    testCrudOperations(done) {
        let microfrontend1;
        async.series([
            // Create one microfrontend
            (callback) => {
                this._client.createMicrofrontend(null, MICROFRONTEND1, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, MICROFRONTEND1.name);
                    assert.equal(microfrontend.description, MICROFRONTEND1.description);
                    assert.equal(microfrontend.path_prefix, MICROFRONTEND1.path_prefix);
                    assert.equal(microfrontend.icon, MICROFRONTEND1.icon);
                    assert.equal(microfrontend.type, MICROFRONTEND1.type);
                    assert.equal(microfrontend.remote_entry, MICROFRONTEND1.remote_entry);
                    assert.equal(microfrontend.exposed_module, MICROFRONTEND1.exposed_module);
                    assert.equal(microfrontend.element_name, MICROFRONTEND1.element_name);
                    microfrontend1 = microfrontend;
                    callback();
                });
            },
            // Create another microfrontend
            (callback) => {
                this._client.createMicrofrontend(null, MICROFRONTEND2, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, MICROFRONTEND2.name);
                    assert.equal(microfrontend.description, MICROFRONTEND2.description);
                    assert.equal(microfrontend.path_prefix, MICROFRONTEND2.path_prefix);
                    assert.equal(microfrontend.icon, MICROFRONTEND2.icon);
                    assert.equal(microfrontend.type, MICROFRONTEND2.type);
                    assert.equal(microfrontend.remote_entry, MICROFRONTEND2.remote_entry);
                    assert.equal(microfrontend.exposed_module, MICROFRONTEND2.exposed_module);
                    assert.equal(microfrontend.element_name, MICROFRONTEND2.element_name);
                    callback();
                });
            },
            // Get all microfrontends
            (callback) => {
                this._client.getMicrofrontends(null, null, new pip_services3_commons_node_1.PagingParams(0, 5, false), (err, microfrontends) => {
                    assert.isNull(err);
                    assert.isObject(microfrontends);
                    assert.isTrue(microfrontends.data.length >= 2);
                    callback();
                });
            },
            // Update the microfrontend
            (callback) => {
                microfrontend1.name = 'Updated Name 1';
                this._client.updateMicrofrontend(null, microfrontend1, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isObject(microfrontend);
                    assert.equal(microfrontend.name, 'Updated Name 1');
                    assert.equal(microfrontend.id, MICROFRONTEND1.id);
                    microfrontend1 = microfrontend;
                    callback();
                });
            },
            // Delete microfrontend
            (callback) => {
                this._client.deleteMicrofrontendById(null, microfrontend1.id, (err) => {
                    assert.isNull(err);
                    callback();
                });
            },
            // Try to get delete microfrontend
            (callback) => {
                this._client.getMicrofrontendById(null, microfrontend1.id, (err, microfrontend) => {
                    assert.isNull(err);
                    assert.isNull(microfrontend || null);
                    callback();
                });
            }
        ], done);
    }
}
exports.MicrofrontendsClientFixtureV1 = MicrofrontendsClientFixtureV1;
//# sourceMappingURL=MicrofrontendsClientFixtureV1.js.map