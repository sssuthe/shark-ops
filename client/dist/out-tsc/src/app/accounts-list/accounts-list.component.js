import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
var AccountsListComponent = /** @class */ (function () {
    function AccountsListComponent(restApi) {
        this.restApi = restApi;
        this.Account = [];
    }
    AccountsListComponent.prototype.ngOnInit = function () {
        console.log('on init here');
        this.loadAccounts();
    };
    // Get employees list
    AccountsListComponent.prototype.loadAccounts = function () {
        var _this = this;
        console.log('calling load accounts');
        return this.restApi.getAccounts().subscribe(function (data) {
            _this.Account = data;
        });
    };
    AccountsListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-accounts-list',
            templateUrl: './accounts-list.component.html',
            styleUrls: ['./accounts-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RestApiService])
    ], AccountsListComponent);
    return AccountsListComponent;
}());
export { AccountsListComponent };
//# sourceMappingURL=accounts-list.component.js.map