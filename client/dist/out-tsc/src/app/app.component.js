import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { HttpHeaders } from '@angular/common/http';
export var authConfig = {
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    redirectUri: window.location.origin,
    clientId: '0oalqrcqbptWL1ZLA356'
};
var AppComponent = /** @class */ (function () {
    function AppComponent(oauthService) {
        this.oauthService = oauthService;
        this.title = 'ng-secure';
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
    AppComponent.prototype.login = function () {
        this.oauthService.initImplicitFlow();
    };
    AppComponent.prototype.logout = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(AppComponent.prototype, "givenName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims) {
                return null;
            }
            return claims['name'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "HeaderValue", {
        get: function () {
            var headers = new HttpHeaders({ Authorization: "Bearer " + this.oauthService.getAccessToken() });
            console.log(headers.getAll('Authorization'));
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OAuthService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map