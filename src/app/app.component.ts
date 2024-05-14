import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet, IonContent, IonInfiniteScroll } from "@ionic/angular/standalone";
import { Subscription, filter } from 'rxjs';
import { MenuModule } from './components/menu/menu.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ArduinoMqttService } from './services/mqtt/mqtt.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, CommonModule, IonRouterOutlet, RouterOutlet, IonApp, MenuModule, IonInfiniteScroll, HeaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gsd.app.ionic';

  constructor(
    private readonly router: Router,
    // private arduinoMqttService: ArduinoMqttService
  ) {
    this.routeSubscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: any) => {
          this.canShowNavbar = !this.routesWithoutNavbar.includes(route.urlAfterRedirects);
          this.canShowHeader = this.routesWithHeader.includes(route.urlAfterRedirects);
      })
  }

  //#region Public Properties

  public canShowNavbar: boolean = false;

  public canShowHeader: boolean = false;

  public routesWithoutNavbar: string[] = ['/login', '/registration'];

  public routesWithHeader: string[] = ['/home'];

  public routeSubscription: Subscription;

  //#endregion

  //#region Public Methods to connet arduino

  // public ngOnInit(): void {
  //   this.arduinoMqttService.conectMQTT();
  //   this.arduinoMqttService.getMessage('vazamento');
  // }

  // public ngOnDestroy(): void {
  //   this.routeSubscription.unsubscribe();
  // }

  // public submit(): void {
  //   this.arduinoMqttService.postMessage('comando', 'ligar_led');
  // }

  //#endregion
}
