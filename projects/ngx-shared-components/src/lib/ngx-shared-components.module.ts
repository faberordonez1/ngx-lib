import { NgModule } from '@angular/core';
import { NgxSharedComponentsComponent } from './ngx-shared-components.component';
import { ErrorComponent } from './components/error/error.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxSharedComponentsComponent, ErrorComponent],
  imports: [CommonModule],
  exports: [NgxSharedComponentsComponent, ErrorComponent],
})
export class NgxSharedComponentsModule {}
