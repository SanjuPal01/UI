import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '.app-test',     // 2nd way - now you can use it as a class <div class="app-test"></div>
  // selector: '[app-test]',  // 3rd way - now you can use it as a attribute <div app-test></div>   
  templateUrl: './test.component.html',
  // template: '<h1>Hola</h1>',
  styleUrls: ['./test.component.css'],
  // styles: [`
  // h1{
  //   color: red;
  // }
  // `],
})
export class TestComponent implements OnInit {

  public name="Sanju";
  public siteUrl = window.location.href;
  public isDisabled = false;
  public myID = "testID";
  public hasError = true;
  public successClass = "text-success";
  public isSpecial = true;
  public highlight = "orange";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles = {
    color: "Pink",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Welcome to my Angular Page";
  }
}
