import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASK } from 'src/app/ModelClass/Task';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class GetPastTasksService {

  constructor(private HTTP:HttpClient,private jwtToken:TokenService) {}
  getPastTasksUrl:string= "http://localhost:9000/api/v3/pastTasks";
  getTasks():Observable<TASK[]>
  {
    const token = this.jwtToken.getheader();
    const a = {headers:token}
    return this.HTTP.get<TASK[]>(`${this.getPastTasksUrl}`,a);
  }
  
}