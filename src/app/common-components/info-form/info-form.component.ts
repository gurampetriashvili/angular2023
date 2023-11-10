import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  chosenNews: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( (params) => {
      console.log('params', params);
    })
  }

  navigateTo(page: string) {
    this.router.navigate(['../../contact'], { relativeTo: this.route })
  }

  
  // authorisationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   alias: new FormControl(''),
  //   jobs: new FormGroup({
  //     first: new FormControl(''),
  //     last: new FormControl('')
  //   }),

  // });

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

  addField() {
    // this.getCarsForm.push(this.formBuilder.control(''));
  }


}
