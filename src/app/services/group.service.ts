import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupResponse, IGroup} from '../group/i-group';
import {group} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private readonly URL = 'http://laravel.tinhocdongian.com/api/groups';
  constructor(private http: HttpClient) { }
  getAllGroup(): Observable<GroupResponse>{
    return this.http.get<GroupResponse>(this.URL);
  }

  addGroup(group): Observable<any> {
    return this.http.post<any>(this.URL + '/store', group);
  }

  deleteGroup(id:number): Observable<any>{
    return this.http.delete(this.URL + '/' + id + '/delete');
  }
}
