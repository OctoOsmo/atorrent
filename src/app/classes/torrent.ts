export class Torrent {
  added_on: Date;
  category: string;
  completion_on: Date;
  dlspeed: number;
  eta: number;
  f_l_piece_prio: boolean;
  force_start: boolean;
  hash: string;
  name: string;
  num_complete: number;
  num_incomplete: number;
  num_leechs: number;
  num_seeds: number;
  priority: number;
  progress: number;
  ratio: number;
  save_path: string;
  seq_dl: false;
  size: number;
  state: string;
  super_seeding: boolean;
  upspeed: number;
}
