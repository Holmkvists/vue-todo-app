export class Todo {
  id: number;
  constructor(public name: string, public date: string, public done: boolean) {
    this.id = new Date().getTime();
  }
}
