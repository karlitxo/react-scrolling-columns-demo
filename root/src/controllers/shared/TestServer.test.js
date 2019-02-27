"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bodyParser = require("body-parser");
var core_1 = require("@overnightjs/core");
var TestServer = (function (_super) {
    tslib_1.__extends(TestServer, _super);
    function TestServer() {
        var _this = _super.call(this) || this;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        return _this;
    }
    TestServer.prototype.setController = function (ctlr) {
        _super.prototype.addControllers.call(this, ctlr);
    };
    TestServer.prototype.getExpressInstance = function () {
        return this.app;
    };
    return TestServer;
}(core_1.Server));
exports.default = TestServer;
//# sourceMappingURL=TestServer.test.js.map