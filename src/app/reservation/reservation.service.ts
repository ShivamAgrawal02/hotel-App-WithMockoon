import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 private reservations:Reservation [] =[];
 private apiUrl= "http://localhost:3001"
 constructor(private httpClient:HttpClient)
 {
  
 }
 //CRUD
 getReservations(): Observable<Reservation[]>  
 {
  return this.httpClient.get<Reservation[]>(this.apiUrl+ "/reservations");
  
 }

 getReservation(id:string):Reservation| undefined
 {
  return this.reservations.find(res=>res.id==id);
 }
 addReservation(reservation:Reservation):void
 {
  reservation.id=Date.now().toString();
  this.reservations.push(reservation);

 }
 deleteReservation(id:string):void
 {
  let index = this.reservations.findIndex(res => res.id == id);
  this.reservations.splice(index,1)

 }
 updateReservation(id:string,updateReservation:Reservation):void{
  let index = this.reservations.findIndex(res=>res.id==id);
  updateReservation.id=id;
  this.reservations[index]=updateReservation;
 }
}
