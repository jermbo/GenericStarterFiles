export default class Dashboard {
  constructor(name){
    this.name = name;
  }

  display(){
    console.log(`Welcome to dashboard, ${this.name}`);
  }
}
