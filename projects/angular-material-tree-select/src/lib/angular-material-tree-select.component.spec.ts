import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTreeSelectComponent } from './angular-material-tree-select.component';

describe('AngularMaterialTreeSelectComponent', () => {
  let component: AngularMaterialTreeSelectComponent;
  let fixture: ComponentFixture<AngularMaterialTreeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialTreeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
