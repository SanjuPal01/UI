import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }
  isVisible = true;
  public color = "blue"
  ngOnInit(): void {
  }
  public colors = ["red", "green", "blue", "pink"]
  // @Input() public parentData:any;
  @Input('parentData') public name:any;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hii from child")
  }
}
