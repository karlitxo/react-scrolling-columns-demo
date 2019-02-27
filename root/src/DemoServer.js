"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bodyParser = require("body-parser");
var core_1 = require("@overnightjs/core");
var simple_color_print_1 = require("simple-color-print");
var DemoController_1 = require("./controllers/demo/DemoController");
var DemoServer = (function (_super) {
    tslib_1.__extends(DemoServer, _super);
    function DemoServer() {
        var _this = _super.call(this) || this;
        _this._SERVER_START_MSG = 'Demo server started on port: ';
        _this._DEV_MSG = 'Express Server is running in development mode. Start the React ' +
            'development server "npm run start:react" to develop front-end content. Back-end is ' +
            'currently running on port: ';
        _this._port = 3001;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _super.prototype.addControllers.call(_this, new DemoController_1.default());
        if (process.env.NODE_ENV === 'development') {
            simple_color_print_1.cinfo('Starting server in development mode');
            var msg_1 = _this._DEV_MSG + process.env.EXPRESS_PORT;
            _this.app.get('*', function (req, res) { return res.send(msg_1); });
        }
        return _this;
    }
    DemoServer.prototype.start = function () {
        var _this = this;
        this.app.listen(this._port, function () {
            simple_color_print_1.cimp(_this._SERVER_START_MSG + _this._port);
        });
    };
    return DemoServer;
}(core_1.Server));
(function () {
    var server = new DemoServer();
    server.start();
})();
//# sourceMappingURL=DemoServer.js.map