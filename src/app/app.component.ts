import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
status="Please wait...."
  
  constructor() {
    setTimeout(()=>{
      this.status='Your have pending bills';
    },5000);
  }

  taketoPaymentPage(data) {
    console.log('Will take to payment page...', data);
  }
  
}
