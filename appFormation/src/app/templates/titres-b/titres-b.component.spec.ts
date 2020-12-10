import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresBComponent } from './titres-b.component';

describe('TitresBComponent', () => {
  let component: TitresBComponent;
  let fixture: ComponentFixture<TitresBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitresBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
