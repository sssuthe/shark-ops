import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
var routes = [
    { path: 'accounts-list', component: AccountsListComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { EmployeeCreateComponent } from './employee-create/employee-create.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
// import { EmployeesListComponent } from './employees-list/employees-list.component';
// const routes: Routes = [
// { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
// { path: 'create-employee', component: EmployeeCreateComponent },
// { path: 'employee-details/:id', component: EmployeeDetailsComponent },
// { path: 'update-employee', component: EmployeeUpdateComponent },
// { path: 'employees-list', component: EmployeesListComponent }  
// ];
// @NgModule({
// imports: [RouterModule.forRoot(routes)],
// exports: [RouterModule]
// })
// export class AppRoutingModule { }
//# sourceMappingURL=app-routing.module.js.map