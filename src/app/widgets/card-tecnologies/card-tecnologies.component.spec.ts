/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTecnologiesComponent } from './card-tecnologies.component';

describe('CardTecnologiesComponent', () => {
  let component: CardTecnologiesComponent;
  let fixture: ComponentFixture<CardTecnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTecnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
