import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoComponent } from './bingo.component';

describe('BingoComponent', () => {
  let component: BingoComponent;
  let fixture: ComponentFixture<BingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BingoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('title').textContent).toContain('Welcome to the Bingo Game!');
  });
});
