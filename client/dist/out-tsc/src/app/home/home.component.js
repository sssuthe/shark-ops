import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(oauthService) {
        this.oauthService = oauthService;
    }
    HomeComponent.prototype.login = function () {
        this.oauthService.initImplicitFlow();
    };
    HomeComponent.prototype.logoff = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(HomeComponent.prototype, "name", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims)
                return null;
            // return claims;
            return 'Sean';
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OAuthService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map