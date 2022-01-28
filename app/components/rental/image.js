import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  //   //default
  //   constructor(...args) {
  //     //default BUT we dont need them anymore
  //     super(...args);
  //     this.isLarge = false; // can just remove "this" and remove constructor
  //   }

  //? tracked has us save a variable and re-render relied upon templates when this changes

  @tracked isLarge = false;

  //? actions allow us to set callable methods to our template-- aka a callback function (func inside class is method)
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
