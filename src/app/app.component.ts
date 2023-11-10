import { Component } from '@angular/core';
import { CoworkerInfo, ContractorInfo, AssistantInfo } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  ngOnInit() {
    enum CardinalDirections {
      North = 1,
      East = 2,
      South = 3,
      West = 4
    };

    let personalInfo: CoworkerInfo = 
    {
        name: 'guram', 
        lastName: 'petr', 
        age: 30, 
        job: [
          {title: 'developer', years: 1, salary: 1000},
          {title: 'CEO', years: 15, salary: 15000}
        ]
    };

    console.log(personalInfo.name);

    let mgebavi: ContractorInfo = {
      name: 'giorgi',
      lastName: 'giorgadze',
      job: [],
      contractDuration: 6,
      contractDescription: 'shegebva',
      compensation: 500
    };

    let miniMgebavi: AssistantInfo = 
    {
      duties: [],
      legalDocument: '',
      contractDuration: 0,
      contractDescription: '',
      compensation: 0,
      name: '',
      lastName: '',
      job: []
    }

    let enumTest: CardinalDirections = CardinalDirections.East;

    console.log('test log');
    let firstName: string = "asd";
    firstName = "dasd";
    console.log(firstName);
    let myArray: readonly string[] = ["guram", "petriashvili"];
    let secondArray = [1, 2, 3];
    secondArray.push(12);
    let chaoticArray: any[];
    let tupleArray: [string, number, boolean];
    tupleArray = ["text", 5, true]
    // let testArray: Array<string> = ["asdfasd", "adasd"];
    // firstName = this.calculateFunction(6);
    console.log('calculateFunction', this.addTextToName('guro'));
    this.changeText('gdsfsdf');
    this.analysePersonalInfo(personalInfo);

    let mercedes: Car = {
      name: '',
      odometer: 0,
    }

    let prius = new CarInfo('prius v', 2014);
    let bmw = new CarInfo('m5', 2020);

    let volvo = new TruckInfo();
    console.log('volvo', volvo);

    volvo.unitSystem = 'imperial';

    if (firstName === 'guro') {
      volvo.cardoLoad = 2000;
    } else {
      volvo.cardoLoad = 500;
    }

    console.log('volvo', volvo);
    console.log('car brand', prius);
    console.log('car brand', prius.showYear());
    console.log('car brand', bmw.getFullBrand('with M mode support'));
  }

  addTextToName(myName: string): string[] {
    return [myName + 'petriashvili'];
  }

  changeText(textToChange: string, textThatWeAlwaysHave: string = 'always text', optionalText?: string): void {
    textToChange = 'text changed';
  }

  analysePersonalInfo(person: CoworkerInfo, analyseFilter?: string) {
    console.log('in function', person.name);
    console.log('in function', person.age);
    console.log('in function job title', person.job[0].title);
    for (let i = 0; i < person?.job?.length; i++) {
      console.log('cycle through jobs', person.job[i].title);
    }
    console.log('in function job years', person.job);
  }

}

class CarInfo {
  public brand: string;
  private year: number;
  readonly enginePower: number = 0;

  constructor(brand: string, year: number) {
    this.brand = brand || '';
    this.year = year || 2015;
  }

  getFullBrand(extraText?: string) {
    return this.brand + ' - ' + this.year + ' - ' + extraText;
  }

  showYear() {
    return this.year
  }
}

class TruckInfo {
  cardoLoad = 1000;
  unitSystem = 'metric';
}

interface Car {
  name: string;
  odometer: number;
}

class Bikes implements Car {
  name = '';
  odometer = 0;

  constructor(name: string, odo: number) {
    this.name = name + ' bike';
  }
}

class Bicycles extends Bikes {
  getName() {
    return this.name + ' yamaha';
   }
}



