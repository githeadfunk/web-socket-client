import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt;
  private _profile;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.callbackURL,
    audience: AUTH_CONFIG.audience,
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt;
    this._profile = {};
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get expiresAt(): string {
    return this._expiresAt;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    console.log('login: ');
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('authResult: ', authResult);
        this.localLogin(authResult);
        this.getUserProfile(authResult.accessToken);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private getUserProfile(accessToken){
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (err) {
          alert(err);
          return;
      }
      this._profile = profile;
      localStorage.setItem("profile", profile);
    });
  }

  private localLogin(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
    localStorage.setItem("expiresAt", expiresAt);
    localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("idToken", authResult.idToken);
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.localLogin(authResult);
       } else if (err) {
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
         this.logout();
       }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = '';
    this._profile = null;
    localStorage.removeItem('idToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('profile');
    this.router.navigate(['/']);
    // this.auth0.logout({
    //   returnTo: window.location.origin
    // });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return tokenNotExpired('idToken');
    // return this._accessToken && Date.now() < this._expiresAt;
  }

}
