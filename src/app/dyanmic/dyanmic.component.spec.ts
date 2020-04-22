import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicComponent } from './dyanmic.component';

describe('DyanmicComponent', () => {
  let component: DyanmicComponent;
  let fixture: ComponentFixture<DyanmicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanmicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
