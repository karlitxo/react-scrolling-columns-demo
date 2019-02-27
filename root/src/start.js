/**
 * Start the server for development or production,
 * or run tests.
 *
 */
// Start the server or run tests

const DemoServer=require('./DemoServer');


if (process.argv[2] !== 'test') {
    let tmp = DemoServer.start();
} else {
if (process.argv[2] === 'dev') {

    process.env.NODE_ENV = 'development';
    require('./src/DemoServer');

} else if (process.argv[2] === 'prod') {

    process.env.NODE_ENV = 'production';

} else if (process.argv[2] === 'test') {

    process.env.NODE_ENV = 'test';
}
}
//import { cinfo, cerr } from 'simple-color-print';
// import DemoServer from './DemoServer';
//
//
// // Start the server or run tests
// if (process.argv[2] !== 'test') {
//
//     let server = new DemoServer();
//     server.start();
//
// } else {
//
//     const Jasmine = require('jasmine');
//     const jasmine = new Jasmine();
//
//     jasmine.loadConfig({
//         "spec_dir": "src",
//         "spec_files": [
//             "./controllers/**/*.test.ts"
//         ],
//         "stopSpecOnExpectationFailure": false,
//         "random": true
//     });
//
//     jasmine.onComplete((passed: boolean) => {
//
//         if (passed) {
//             console.log('All tests have passed :)');
//         } else {
//             consol('At least one test has failed :(');
//         }
//     });
//
//     let testPath = process.argv[3];
//
//     if (testPath) {
//         testPath = `./src/${testPath}.test.ts`;
//         jasmine.execute([testPath]);
//     } else {
//         jasmine.execute();
//     }
// }