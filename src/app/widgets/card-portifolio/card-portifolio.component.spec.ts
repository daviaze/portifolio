/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPortifolioComponent } from './card-portifolio.component';

describe('CardPortifolioComponent', () => {
  let component: CardPortifolioComponent;
  let fixture: ComponentFixture<CardPortifolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPortifolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
