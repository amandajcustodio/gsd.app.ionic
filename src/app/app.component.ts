import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet, IonContent, IonInfiniteScroll } from "@ionic/angular/standalone";
import { Subscription, filter } from 'rxjs';
import { MenuModule } from './components/menu/menu.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, CommonModule, IonRouterOutlet, RouterOutlet, IonApp, MenuModule, IonInfiniteScroll, HeaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy{
  title = 'gsd.app.ionic';

  constructor(
    private readonly router: Router,
  ) {
    this.routeSubscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: any) => {
          this.canShowNavbar = !this.routesWithoutNavbar.includes(route.urlAfterRedirects);
          this.canShowHeader = this.routesWithHeader.includes(route.urlAfterRedirects);
      })
  }

  public canShowNavbar: boolean = false;

  public canShowHeader: boolean = false;

  // Lista de páginas em que deve (ou não) acontecer algo
  public routesWithoutNavbar: string[] = ['/login', '/registration'];
  public routesWithHeader: string[] = ['/home'];

  public routeSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
