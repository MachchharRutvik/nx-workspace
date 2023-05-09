import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
// import { MaterialComponentsModule } from '@test/material-components';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports:[CardComponent]
})
export class CardModule {}
