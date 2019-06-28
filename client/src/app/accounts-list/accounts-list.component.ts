import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';

// import sampleConfig from '../.samples.config';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})

export class AccountsListComponent implements OnInit {
  failed: Boolean;
  accounts: Array<Account> [];

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
    this.accounts = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    this.http.get(environment.resourceServer.accountsUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).subscribe((data: any) => {
      let index = 1;
      const accounts = data.map((account) => {
        return {
          accountType: account.accountType,
          lastName: account.lastName,
          firstName: account.firstName,
          balance: account.balance,
          index: index++
        };
      });
      [].push.apply(this.accounts, accounts);
    }, (err) => {
      console.error(err);
      this.failed = true;
    });
  }


  }
