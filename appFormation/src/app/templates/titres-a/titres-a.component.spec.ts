import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresAComponent } from './titres-a.component';

describe('TitresAComponent', () => {
  let component: TitresAComponent;
  let fixture: ComponentFixture<TitresAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitresAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
