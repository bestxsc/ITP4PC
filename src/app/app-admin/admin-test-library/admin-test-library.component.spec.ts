import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestLibraryComponent } from './admin-test-library.component';

describe('AdminTestLibraryComponent', () => {
  let component: AdminTestLibraryComponent;
  let fixture: ComponentFixture<AdminTestLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTestLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
