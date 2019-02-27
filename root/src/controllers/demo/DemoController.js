"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@overnightjs/core");
var simple_color_print_1 = require("simple-color-print");
var DemoController = (function () {
    function DemoController() {
        this.SUC_MSG = 'hello';
        this.ERR_MSG = 'cant say hello';
    }
    DemoController.prototype.sayHello = function (req, res) {
        try {
            var name_1 = req.params.name;
            if (name_1 === 'makeitfail') {
                throw Error('User triggered failure');
            }
            simple_color_print_1.cinfo('API: "GET /api/say-hello/:name" called with param: ' + name_1);
            res.status(250).json({ response: this.SUC_MSG });
        }
        catch (err) {
            simple_color_print_1.cerr(err);
            res.status(400).json({ response: this.ERR_MSG });
        }
    };
    tslib_1.__decorate([
        core_1.Get(':name'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], DemoController.prototype, "sayHello", null);
    DemoController = tslib_1.__decorate([
        core_1.Controller('api/say-hello')
    ], DemoController);
    return DemoController;
}());
exports.default = DemoController;
//# sourceMappingURL=DemoController.js.map