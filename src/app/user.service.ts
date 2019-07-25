import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class UserService{
    //activatedEmiter = new EventEmitter<boolean>();    
    activatedEmiter = new Subject<boolean>();    
}