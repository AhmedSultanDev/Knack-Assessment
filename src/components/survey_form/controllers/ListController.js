import * as helpers from "./arrayHelpers";

export default class ListController {
  constructor(array, callback) {
    this.array = array;
    this.callback = callback;
  }

  set(index, newContent) {
    this.callback(helpers.set(this.array, index, newContent));
  }

  add(newContent) {
    this.callback([...this.array, newContent]);
  }

  remove(index) {
    this.callback(helpers.remove(this.array, index));
  }

  moveUp(index) {
    // First we make sure that the question
    // is not already at the very top before moving it higher
    let newIndex = index === 0 ? index : index - 1;
    this.callback(helpers.move(this.array, index, newIndex));
  }

  moveDown(index) {
    // This time we make sure that the question
    // is not already at the end of the list, before moving it lower
    let newIndex = index === this.array.length - 1 ? index : index + 1;
    this.callback(helpers.move(this.array, index, newIndex));
  }
}
