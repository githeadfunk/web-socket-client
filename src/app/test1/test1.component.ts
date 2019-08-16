import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../Service/web-socket.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  ws;

  constructor(private WebSocket: WebSocketService) {
    this.ws = WebSocket;
  }

  ngOnInit() {
    console.log("oninit");
    this.ws.socket.on('documents', (data) => {
      console.log('data: ', data);
    })
    this.ws.socket.emit('doSomething', {
      token: localStorage.getItem("accessToken"),
      id: 1,
      doc: 'wyh'
    });
  }

}
