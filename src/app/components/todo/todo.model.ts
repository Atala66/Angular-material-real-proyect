
export class TodoModel {
  // tslint:disable-next-line:align
  id: number;
  text: string;
  description: string;
  date: string;
  selectedCategory: any;

  constructor(id: number, text: string, description: string, date: string, selectedCategory: any ) {
    this.id = id;
    this.text = text;
    this.description = description;
    this.date = date;
    this.selectedCategory = selectedCategory;

  }

}
