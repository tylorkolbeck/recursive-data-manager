"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var History = /** @class */ (function () {
    function History() {
        this._history = [];
    }
    History.prototype.get = function () {
        return this._history;
    };
    History.prototype.push = function (command) {
        this._history.push(command);
    };
    History.prototype.pop = function () {
        var lastCommand = this._history.pop();
        return lastCommand ? lastCommand : null;
    };
    return History;
}());
exports.default = History;
//# sourceMappingURL=History.js.map