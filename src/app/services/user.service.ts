import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import * as _ from 'lodash';

import { User } from '../models/user';
import { USERS } from '../shared/mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(uid: string): Observable<User> {
    const user = _.find(USERS, {'uid' : uid});
    
    return of(user);
  }

}
