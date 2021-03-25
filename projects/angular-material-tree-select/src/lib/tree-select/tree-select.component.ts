import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

export const TREE_SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TreeSelectComponent),
  multi: true,
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
  providers: [TREE_SELECT_VALUE_ACCESSOR]
})
export class TreeSelectComponent implements OnInit {
  label;
  model = [{name: '1'}, {name: '2'}];
  selectable;
  removable = true;

  @Input() templateOptions;

  treeConfig: any = {};
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();

  treeData$: any;
  triggerGetData$ = new BehaviorSubject(false);
  treeJson: any;
  url: any;
  showAll: any;

  modelChange: (value: any) => void;
  modelTouched: (value: any) => void;

  constructor() {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.modelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.modelTouched = fn;
  }

  writeValue(obj: any): void {
    this.model = obj;
  }
}
