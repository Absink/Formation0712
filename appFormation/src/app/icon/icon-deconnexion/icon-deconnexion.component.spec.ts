import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDeconnexionComponent } from './icon-deconnexion.component';

describe('IconDeconnexionComponent', () => {
  let component: IconDeconnexionComponent;
  let fixture: ComponentFixture<IconDeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDeconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
