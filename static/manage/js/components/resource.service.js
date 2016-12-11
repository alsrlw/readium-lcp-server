"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ResourceService = (function () {
    // private headers = new Headers ({'Content-Type': 'application/json'});
    function ResourceService(http) {
        this.http = http;
        this.resourceUrl = 'http://localhost:8989/contents'; // THIS SHOULD BE EQUAL TO THE URL of the lcp webserver+/contents )
    }
    ResourceService.prototype.getResources = function () {
        return this.http.get(this.resourceUrl)
            .toPromise()
            .then(function (response) {
            var resources = [];
            for (var _i = 0, _a = response.json(); _i < _a.length; _i++) {
                var jsonResult = _a[_i];
                resources[resources.length] = {
                    id: jsonResult.id, location: jsonResult.location, length: jsonResult.length, sha256: jsonResult.sha356
                };
            }
            return resources;
        })
            .catch(this.handleError);
    };
    ResourceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ResourceService.prototype.getUser = function (id) {
        return this.getResources()
            .then(function (resources) { return resources.find(function (resource) { return resource.id === id; }); });
    };
    return ResourceService;
}());
ResourceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map