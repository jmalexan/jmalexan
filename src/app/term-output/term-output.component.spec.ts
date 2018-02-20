import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOutputComponent } from './term-output.component';

describe('TermOutputComponent', () => {
  let component: TermOutputComponent;
  let fixture: ComponentFixture<TermOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
