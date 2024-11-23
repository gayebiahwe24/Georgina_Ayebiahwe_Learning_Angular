import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMovieListComponent } from './modify-movie-list.component';

describe('ModifyMovieListComponent', () => {
  let component: ModifyMovieListComponent;
  let fixture: ComponentFixture<ModifyMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyMovieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
