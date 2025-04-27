import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificationsListPage } from './modifications-list.page';

describe('ModificationsListPage', () => {
  let component: ModificationsListPage;
  let fixture: ComponentFixture<ModificationsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
