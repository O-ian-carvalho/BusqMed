import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpineComponent } from './opine.component';

describe('OpineComponent', () => {
  let component: OpineComponent;
  let fixture: ComponentFixture<OpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
