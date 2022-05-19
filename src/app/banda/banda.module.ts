import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent } from './banda-list/banda-list.component';
import { BandaService } from './banda.service';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaListComponent, BandaDetailComponent],
  exports: [BandaListComponent,BandaDetailComponent],
  providers: [BandaService]

})
export class BandaModule { }
