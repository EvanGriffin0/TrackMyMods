import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackMapPage } from './track-map.page';

describe('TrackMapPage', () => {
  let component: TrackMapPage;
  let fixture: ComponentFixture<TrackMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
