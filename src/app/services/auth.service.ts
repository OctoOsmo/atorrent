import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const body = `username=${username}&password=${password}`;
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    this.http
      .post('/login', body, options)
      .subscribe(data => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log(data);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  getApiVersion(): Observable<any> {
    return this.http.get('/version/api')
      .map((response: Response) => response.json());
  }

  getQbittorrentVersion(): Observable<any> {
    return this.http.get('/version/qbittorrent')
      .map((response: Response) => response.text());
  }

}
