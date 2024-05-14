import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { canEffectuateLogin } from '../../shared/utils/functions';

@Component({
  selector: 'app-login',
  template: `<section class="flex flex-column align-items-center">
    <div class="background"></div>
    <div
      class="flex flex-column justify-content-center align-items-center gap-2 bg-white border-round-2xl card"
    >
      <div class="flex flex-column justify-content-center align-items-center">
        <img
          class="w-4rem"
          src="assets/images/logo.png"
          alt="GasSecure Defender Logo"
        />
        <h3>FAZER LOGIN</h3>
        <small>Acesse sua conta</small>
      </div>

      <div
        class="flex flex-column justify-content-center gap-5 align-items-center"
      >
        <ion-list>
          <ion-item>
            <ion-input
              [(ngModel)]="cpf"
              label="CPF"
              labelPlacement="stacked"
              fill="outline"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              label="Senha"
              labelPlacement="stacked"
              [(ngModel)]="password"
              [type]="showPassword ? 'text' : 'password'"
              fill="outline"
            ></ion-input>
            <ion-icon
              (click)="showPassword = !showPassword"
              [name]="showPassword ? 'eye-outline' : 'eye-off-outline'"
              size="large"
            ></ion-icon>
          </ion-item>
        </ion-list>
        <ion-button
          class="w-full border-round-xl"
          style="--background: #0da7cb;"
          (click)="submit()"
          >Entrar</ion-button
        >
        <div class="flex flex-column align-items-center h-min gap-1">
          <p class="m-0">
            Não tem uma conta? <a (click)="navigateTo('/home')">Cadastre-se</a>
          </p>
          <p class="m-0" (click)="navigateTo('/home')" class="">
            Esqueceu a senha?
          </p>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly toastController: ToastController
  ) {}

  //#region Public Properties

  public showPassword: boolean = false;

  public cpf: string = '';

  public password: string = '';

  //#endregion

  //#region Public Methods

  public async submit(): Promise<void> {
    const canSubmit = canEffectuateLogin(this.cpf, this.password);

    if (!canSubmit) {
      const toast = await this.toastController.create({
        message: 'Usuário não encontrado, tente novamente.',
        duration: 3000,
        position: 'bottom',
      });

      await toast.present();
      return;
    }

    this.navigateTo('/home');
  }

  public async navigateTo(route: string): Promise<void> {
    this.router.navigate([route]);
  }

  //#endregion
}
