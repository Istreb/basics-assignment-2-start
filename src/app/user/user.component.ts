import {Component} from '@angular/core';

@Component ({
  selector: 'app-username',
  templateUrl: 'user.component.html'
})

export class UserComponent {
  username = '';
  AllowClickOnTheButton = true;

  onClearUsername() {
    this.username='';
  }
  ifTheButtonCanBeClicked(){
    if (this.username == '') {return true; }
    else return false;
  }

}
