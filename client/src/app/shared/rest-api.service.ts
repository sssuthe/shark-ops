import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Account } from '../shared/account';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
providedIn: 'root'
})
export class RestApiService {
// Define API
apiURL = 'http://localhost:5000';
 // Http Options
 httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}  

constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
  console.log('Constructor');
}


private async request(method: string, url: string, data?: any) {
  const token = await this.oktaAuth.getAccessToken();

  console.log('request ' + JSON.stringify(data));
  const result = this.http.request(method, url, {
    body: data,
    responseType: 'json',
    observe: 'body',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return new Promise<any>((resolve, reject) => {
    result.subscribe(resolve as any, reject as any);
  });
}

getAccounts() {
  return this.request('get', `${this.apiURL}/accounts`);
}




/*========================================
CRUD Methods for consuming RESTful API
=========================================*/

// HttpClient API get() method => Fetch employees list
// getAccounts(): Observable<Account> {
// return this.http.get<Account>(this.apiURL + '/accounts')
// .pipe(
// retry(1),
// catchError(this.handleError)
// )
// }

  // private newMethod(req: HttpRequest) {
  //   const token = this.authStorage.getItem('access_token');
  //   const header = 'Bearer ' + token;
  //   const headers = req.headers.set('Authorization', header);
  //   req = req.clone({ headers });
  // }

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
handleError(error) {
let errorMessage = '';
if(error.error instanceof ErrorEvent) {
// Get client-side error
errorMessage = error.error.message;
} else {
// Get server-side error
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
window.alert(errorMessage);
return throwError(errorMessage);
}
}