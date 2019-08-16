import {Injectable, OnDestroy, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import * as env from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})

export class WebSocketService  implements OnInit {

  socket;

  constructor(private auth: AuthService) {
    this.socket = io.connect(env.environment.webSocketUrl, {
      query: {token: localStorage.getItem("accessToken")}
    });
    this.socket.on('connect', () => {
      console.log('Successfully connected!');
    });
  }

  ngOnInit(){
    
  }


}