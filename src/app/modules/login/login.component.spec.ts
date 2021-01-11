import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

const LOGIN_SUCCESS_REDIRECT_URL = '/checkout';
const VALID_LOGIN = 'login';
const VALID_PASSWORD = 'password';
const ERROR_MESSAGE = 'Login or password is incorrect';

class MockLoginService {
  redurectUrl = LOGIN_SUCCESS_REDIRECT_URL;

  login(login: string, password: string): boolean {
    return login === VALID_LOGIN && password === VALID_PASSWORD;
  }
}

class MockRouter {
  navigate(url: any[]): Promise<boolean> {
    return Promise.resolve(true);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        { provide: LoginService, useClass: MockLoginService },
        { provide: Router, useClass: MockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    spyOn(MockRouter.prototype, 'navigate').and.callThrough();
    spyOn(MockLoginService.prototype, 'login').and.callThrough();

    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values for login and password', () => {
    expect(component.login).toBe('');
    expect(component.password).toBe('');
  });

  it('should have no initial value for errorMessage', () => {
    expect(component.errorMessage).toBeUndefined();
  });

  it('should call redirect on router with redirectUrl upon successful login', () => {
    component.login = VALID_LOGIN;
    component.password = VALID_PASSWORD;
    component.logIn();
    expect(MockRouter.prototype.navigate).toHaveBeenCalledWith([LOGIN_SUCCESS_REDIRECT_URL]);
  });

  it('should set errorMessage to "Login or password is incorrect" upon unsuccessful login', () => {
    component.logIn();
    expect(component.errorMessage).toEqual(ERROR_MESSAGE);
  });

  it('should change login and password in model after input', () => {
    const loginInput = element.querySelector('[name=login]') as HTMLInputElement;
    const passwordInput = element.querySelector('[name=password]') as HTMLInputElement;

    loginInput.value = VALID_LOGIN;
    passwordInput.value = VALID_PASSWORD;

    const inputEvent = new Event('input');
    loginInput.dispatchEvent(inputEvent);
    passwordInput.dispatchEvent(inputEvent);

    fixture.detectChanges();

    expect(component.login).toEqual(VALID_LOGIN);
    expect(component.password).toEqual(VALID_PASSWORD);
  });

  it('should call logIn() with current login and password after click on button', () => {
    const loginButton = element.querySelector('button');

    component.login = VALID_LOGIN;
    component.password = VALID_PASSWORD;

    loginButton.click();

    expect(MockLoginService.prototype.login).toHaveBeenCalledWith(VALID_LOGIN, VALID_PASSWORD);
  });

  it('should reset errorMessage on input', () => {
    component.errorMessage = ERROR_MESSAGE;
    const loginInput = element.querySelector('[name=login]') as HTMLInputElement;
    loginInput.value = VALID_LOGIN;
    
    const inputEvent = new Event('input');
    loginInput.dispatchEvent(inputEvent);

    fixture.detectChanges();

    expect(component.errorMessage).toBeFalsy();
  });

  it('should display errorMessage', () => {
    component.errorMessage = ERROR_MESSAGE;

    fixture.detectChanges();

    expect(element.querySelector('.error-message').textContent).toEqual(ERROR_MESSAGE);
  });
});
