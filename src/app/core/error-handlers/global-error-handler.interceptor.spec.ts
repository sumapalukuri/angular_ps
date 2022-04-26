import { TestBed } from '@angular/core/testing';
import { GlobalErrorHandler } from './global-error-handler.interceptor';


describe('GlobalErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalErrorHandler
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalErrorHandler = TestBed.inject(GlobalErrorHandler);
    expect(interceptor).toBeTruthy();
  });
});
