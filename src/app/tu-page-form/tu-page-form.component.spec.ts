import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuPageFormComponent } from './tu-page-form.component';

describe('TuPageFormComponent', () => {
  let component: TuPageFormComponent;
  let fixture: ComponentFixture<TuPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
