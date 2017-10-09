import {Component, OnInit} from '@angular/core';
import {Torrent} from '../../classes/torrent';
import {TorrentsService} from '../../services/torrents.service';

@Component({
  selector: 'app-torrents-list',
  templateUrl: './torrents-list.component.html',
  styleUrls: ['./torrents-list.component.scss']
})
export class TorrentsListComponent implements OnInit {
  set torrents(value: Torrent[]) {
    this._torrents = value;
  }
  get torrents(): Torrent[] {
    return this._torrents;
  }

  private _torrents: Torrent[];

  constructor(private torrentsService: TorrentsService) {
  }

  ngOnInit() {
    this.torrentsService.getTorrentsList().subscribe(data => {
      this.torrents = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
