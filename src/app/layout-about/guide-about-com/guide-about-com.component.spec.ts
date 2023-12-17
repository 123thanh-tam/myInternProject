/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuideAboutComComponent } from './guide-about-com.component';

describe('GuideAboutComComponent', () => {
  let component: GuideAboutComComponent;
  let fixture: ComponentFixture<GuideAboutComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideAboutComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAboutComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
