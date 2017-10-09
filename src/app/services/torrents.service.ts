import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TorrentsService {

  constructor(private http: Http) { }

  getTorrentsList(): Observable<any> {
    return this.http.get('/query/torrents')
      .map((response: Response) => response.json());
  }

}
