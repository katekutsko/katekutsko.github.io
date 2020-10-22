import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
