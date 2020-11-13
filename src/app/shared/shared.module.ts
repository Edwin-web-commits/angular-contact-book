import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading-spinner/loading.component';

@NgModule({
    declarations:[LoadingComponent,AlertComponent],
    imports:[CommonModule],
    exports:[LoadingComponent,AlertComponent,CommonModule]
})
export class SharedModule {

}