import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { banda } from './banda';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BandaService {
  constructor(private http: HttpClient) { }
  getBandas(): Observable<banda[]> {
    return this.http.get<banda[]>("https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/rockbands.json");
  }

}
