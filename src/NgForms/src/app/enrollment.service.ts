import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private client:HttpClient) {
  }

  url = "http://127.0.0.1:8000/app"

  enroll(userData: any){
   return this.client.post<any>(this.url, userData)
  }
}
