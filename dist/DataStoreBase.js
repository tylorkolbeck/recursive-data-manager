"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandOperation = void 0;
var History_1 = require("./history/History");
var DataStoreBase = /** @class */ (function () {
    function DataStoreBase() {
        this.history = new History_1.default();
        this._data = null;
        this.subscribeCallback = null;
    }
    DataStoreBase.prototype.set = function (value) {
        this._data = structuredClone(value);
        if (this.subscribeCallback !== null)
            this.subscribeCallback(this._get());
    };
    DataStoreBase.prototype._get = function () {
        return structuredClone(this._data);
    };
    DataStoreBase.prototype.insert = function (command) {
        if (command.target === null)
            this.set(command.value);
    };
    DataStoreBase.prototype.delete = function (command) {
        throw new Error("Delete not implemented");
    };
    return DataStoreBase;
}());
exports.default = DataStoreBase;
var CommandOperation;
(function (CommandOperation) {
    CommandOperation["delete"] = "delete";
    CommandOperation["insert"] = "insert";
})(CommandOperation = exports.CommandOperation || (exports.CommandOperation = {}));
//# sourceMappingURL=DataStoreBase.js.map