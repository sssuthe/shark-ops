import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
var RestApiService = /** @class */ (function () {
    function RestApiService(http, oauthService) {
        this.http = http;
        this.oauthService = oauthService;
        // Define API
        this.apiURL = 'http://localhost:5000';
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        console.log(this.oauthService.getAccessToken());
        this.headers.append('Authorization', this.oauthService.getAccessToken());
    }
    /*========================================
    CRUD Methods for consuming RESTful API
    =========================================*/
    // HttpClient API get() method => Fetch employees list
    RestApiService.prototype.getAccounts = function () {
        return this.http.get(this.apiURL + '/accounts')
            .pipe(retry(1), catchError(this.handleError));
    };
    // // HttpClient API get() method => Fetch employee
    // getEmployee(id): Observable<Employee> {
    // return this.http.get<Employee>(this.apiURL + '/employees/' + id)
    // .pipe(
    // retry(1),
    // catchError(this.handleError)
    // )
    // }  
    // // HttpClient API post() method => Create employee
    // createEmployee(employee): Observable<Employee> {
    // return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    // .pipe(
    // retry(1),
    // catchError(this.handleError)
    // )
    // }  
    // // HttpClient API put() method => Update employee
    // updateEmployee(id, employee): Observable<Employee> {
    // return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    // .pipe(
    // retry(1),
    // catchError(this.handleError)
    // )
    // }
    // // HttpClient API delete() method => Delete employee
    // deleteEmployee(id){
    // return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
    // .pipe(
    // retry(1),
    // catchError(this.handleError)
    // )
    // }
    // Error handling 
    RestApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    };
    RestApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, OAuthService])
    ], RestApiService);
    return RestApiService;
}());
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map