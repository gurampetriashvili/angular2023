import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  startingText = 'not edited';
  newToUpdate = new Subject<string>();
  emptySubject = new Subject<void>();
  newBehavToUpdate = new BehaviorSubject(1);
  newReplToUpdate = new ReplaySubject(3);

  constructor() { }

  logger(isSuccess: boolean, customMessage?: string): void {
    if (isSuccess) {
      console.log('good job' + ' ' + customMessage);
    } else {
      console.error('oops');
    }
  }
}
