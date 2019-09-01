
export class TransactionDataModal{
  timeDate;
  amount;
  description;
  catacory;
  location;

  constructor(time: Date, amnt: number, descr: string, cat: string, loc: string) {

    this.timeDate = time;
    this.amount = amnt;
    this.description = descr;
    this.catacory = cat;
    this.location = loc;
  }
}
