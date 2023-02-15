"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataStoreBase_1 = require("./DataStoreBase");
var DataStore = /** @class */ (function (_super) {
    __extends(DataStore, _super);
    function DataStore() {
        return _super.call(this) || this;
    }
    DataStore.prototype.subscribe = function (subscribeCallback) {
        this.subscribeCallback = subscribeCallback;
    };
    DataStore.prototype.execute = function (command) {
        // this.checkCommandData()
        switch (command.operation) {
            case "insert":
                this.insert(command);
                break;
            case "delete":
                this.delete(command);
            default:
                throw new Error("Command not found: " + command.operation);
        }
        this.history.push(command);
    };
    DataStore.prototype.get = function () { };
    return DataStore;
}(DataStoreBase_1.default));
exports.default = DataStore;
//# sourceMappingURL=DataStore.js.map