import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenShotComponent } from './golden-shot.component';

describe('GoldenShotComponent', () => {
  let component: GoldenShotComponent;
  let fixture: ComponentFixture<GoldenShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenShotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
