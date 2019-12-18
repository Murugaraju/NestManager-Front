import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorlistComponent } from './floorlist.component';

describe('FloorlistComponent', () => {
  let component: FloorlistComponent;
  let fixture: ComponentFixture<FloorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
