import {NgModule} from '@angular/core';
import {AngularMaterialTreeSelectComponent} from './angular-material-tree-select.component';
import {TreeSelectComponent} from './tree-select/tree-select.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AngularMaterialTreeSelectComponent,
    TreeSelectComponent],
  imports: [
    CommonModule,
    CdkTreeModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  exports: [AngularMaterialTreeSelectComponent, TreeSelectComponent]
})
export class AngularMaterialTreeSelectModule {
}
