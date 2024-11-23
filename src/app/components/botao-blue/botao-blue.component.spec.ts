import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoBlueComponent } from './botao-blue.component';

describe('BotaoBlueComponent', () => {
  let component: BotaoBlueComponent;
  let fixture: ComponentFixture<BotaoBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
