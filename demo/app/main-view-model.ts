import { Observable } from 'tns-core-modules/data/observable';
import { Fontawesome } from 'nativescript-fontawesome';

export class HelloWorldModel extends Observable {
  public message: string;
  private fontawesome: Fontawesome;

  constructor() {
    super();

    this.fontawesome = new Fontawesome();
    this.message = this.fontawesome.message;
  }
}
