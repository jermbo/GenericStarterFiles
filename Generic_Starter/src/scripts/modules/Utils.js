export default class Utils {

  constructor(height, width) {
    this.height = height;
    this.width = width;
    console.log("from the utils file");
  }

  area() {
    return this.height * this.width;
  }
}
