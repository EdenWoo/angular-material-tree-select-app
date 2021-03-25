import { NgModule } from '@angular/core';
import { AngularMaterialTreeSelectComponent } from './angular-material-tree-select.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';



@NgModule({
  declarations: [AngularMaterialTreeSelectComponent, TreeSelectComponent],
  imports: [
  ],
  exports: [AngularMaterialTreeSelectComponent]
})
export class AngularMaterialTreeSelectModule { }
