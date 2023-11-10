import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnChanges, OnInit, OnDestroy {
  someVariable: string = 'some text in typescript file';
  isTrueOrFalse: boolean = false;
  isTextOk: boolean = false;
  customInputValue = '';
  bigFont = '20px';
  currentItem: string = '';
  chosenNews: any;

  weekday = 2;

  newsArray = [];


  // authorisationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   alias: new FormControl(''),
  //   jobs: new FormGroup({
  //     first: new FormControl(''),
  //     last: new FormControl('')
  //   }),

  // });


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) {

  }

  authorisationForm = this.formBuilder.group({
    userName: ['', Validators.required],
    alias: [''],
    jobs: this.formBuilder.group({
      first: [''],
      last: [''],
    }),
    ownedCars: this.formBuilder.array([
      this.formBuilder.control(''),
    ])
  })

  get getCarsForm(){
    return this.authorisationForm.get('ownedCars') as FormArray;
  }


  addField() {
    this.getCarsForm.push(this.formBuilder.control(''));
  }




  ngOnChanges(event: SimpleChanges) {
    console.log('event changes', event);
  }

  ngOnInit() {
    console.log('first component has been initialised');
  }

  ngOnDestroy() {
    console.log('component has ended');
  }

  
  navigateTo() {
    this.router.navigate(['info'], { relativeTo: this.route, queryParams: {id: this.weekday} })
  }


  changeValue(): void {
    this.isTrueOrFalse = true;
    this.someVariable = 'this text has been changed in component';
  }


  onTestClick() {
    console.log(this.authorisationForm);
    console.log(this.authorisationForm.value);
    if (this.authorisationForm.valid) {
      console.log('isValid');
      this.authorisationForm.get('userName')?.value;
      console.log(this.authorisationForm.get('userName')?.value);
      console.log(this.authorisationForm.get('userName'));
      // this.authorisationForm.get('userName')?.setValue('value was set')
      
    } else {
      alert('not valid')
    }
    
    // this.authorisationForm.setValue({userName: 'usernmae set', alias: 'alias set'})
    this.authorisationForm.patchValue({alias: 'alias patch'});
    this.authorisationForm.reset();
  }

  changeEventOnInput(changeText: any): void {
    const myElement = changeText.target as HTMLInputElement;
    console.log('changeText', myElement.value);
    this.customInputValue = myElement.value;

    this.isTextOk = this.customInputValue.length > 4;


    // if (this.customInputValue.length > 4) {
    //   this.isTextOk = true;
    // } else {
    //   this.isTextOk = false;
    // }
    // console.log('changeText', changeText);
  }

  ourChildChose(chosen: any) {
    console.log('chosen', chosen);
    this.chosenNews = chosen;
  }


}
