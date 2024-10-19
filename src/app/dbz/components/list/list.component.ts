import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  @Input()
  public characterList: Character[] = [
    {
      name: "Trunk",
      power: 10
    }
  ]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void{
    console.log(id);
    if(!id) return;
    this.onDeleteId.emit(id);
  }
}
