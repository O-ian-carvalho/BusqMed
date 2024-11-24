import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRemedioComponent } from './card-remedio.component';

describe('CardRemedioComponent', () => {
  let component: CardRemedioComponent;
  let fixture: ComponentFixture<CardRemedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRemedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRemedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
