import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddModificationPage } from './add-modification.page';

describe('AddModificationPage', () => {
  let component: AddModificationPage;
  let fixture: ComponentFixture<AddModificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
