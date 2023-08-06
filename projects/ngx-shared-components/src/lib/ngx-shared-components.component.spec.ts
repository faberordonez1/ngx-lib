import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSharedComponentsComponent } from './ngx-shared-components.component';

describe('NgxSharedComponentsComponent', () => {
  let component: NgxSharedComponentsComponent;
  let fixture: ComponentFixture<NgxSharedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSharedComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSharedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
