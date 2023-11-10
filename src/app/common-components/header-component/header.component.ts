import { Component, OnDestroy, OnInit } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { filter, map, of, pipe } from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
})

export class HeaderComponent implements OnDestroy, OnInit {
    randomText = 'I am a header';


    randomObservable = of(1, 2, 3, 4, 6, 13);

    kvadrati = map((val: number) => val * val);


    filtriDaKvadrati = pipe(
        filter((n: number) => n % 2 !== 0),
        map((val: number) => val * val),
    );


    gakvadratebuli = this.kvadrati(this.randomObservable);

    gakvadratebuliDaGafiltruli = this.filtriDaKvadrati(this.randomObservable);

    

    constructor(public myService: SharedService) {

    }

    ngOnInit(): void {
        this.myService.logger(false);
        this.randomObservable.subscribe((result: any) => {
            console.log('sacyisi', result);
        });

        this.gakvadratebuli.subscribe((res: any) => {
            console.log('gakvadratebuli', res);
        });
        this.gakvadratebuliDaGafiltruli.subscribe((res: any) => {
            console.log('gakvadratebuliDaGafiltruli', res);
        });
    }

    ngOnDestroy() {
        console.log('component has ended');
    }

    updateNews(operationToDo: string) {
        this.myService.newToUpdate.next(operationToDo);
    }
}