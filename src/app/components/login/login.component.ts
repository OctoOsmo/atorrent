import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  set version(value) {
    this._version = value;
  }
  set qbittorrentVersion(value) {
    this._qbittorrentVersion = value;
  }
  set password(value: string) {
    this._password = value;
  }
  set login(value: string) {
    this._login = value;
  }
  get password(): string {
    return this._password;
  }

  get login(): string {
    return this._login;
  }

  get qbittorrentVersion() {
    return this._qbittorrentVersion;
  }

  get version() {
    return this._version;
  }

  private _version;
  private _qbittorrentVersion;
  private _login: string;
  private _password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // this.authService.login('admin', 'qbadmin');
    this.authService.getApiVersion().subscribe(data => {
      this._version = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
    this.authService.getQbittorrentVersion().subscribe(data => {
      this._qbittorrentVersion = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  signIn() {
    this.authService.login(this.login, this.password);
  }

}
