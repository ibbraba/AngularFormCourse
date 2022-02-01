import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private client:HttpClient) {
  }

  url = "http://localhost:3000/enroll"

  enroll(userData: any){
   return this.client.post<any>(this.url, userData)
  }
}
