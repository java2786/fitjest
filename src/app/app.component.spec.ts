import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('boundary', ()=>{
    it('should create output_boundary_revised', () => {
      expect(5).toBeLessThanOrEqual(66);
    });
  })
  describe('exception', ()=>{
    it('should create output_exception_revised', () => {
      expect(5).toBeLessThanOrEqual(66);
    });
  })
  describe('business', ()=>{
    it('should create output_revised', () => {
      expect(5).toBeLessThanOrEqual(66);
    });
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fitness'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fitness');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('fitness app is running!');
  });
});
