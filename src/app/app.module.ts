// ANGULAR
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// LIBS
import { TagInputModule } from "ngx-chips";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

// GUARDS
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { FooterComponent } from './components/footer/footer.component';
import { DiagnosticBackBtnComponent } from './components/diagnostic-back-btn/diagnostic-back-btn.component';

// INTERCEPTOR
import { AppHttpInterceptor } from './services/http-interceptor.service';

// PAGES
import { SignInPageComponent } from "./pages/sign-in-page/sign-in-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CreateArticlePageComponent } from "./pages/create-article-page/create-article-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { ArticlesPageComponent } from "./pages/articles-page/articles-page.component";
import { DiagnosticPageComponent } from './pages/diagnostic-page/diagnostic-page.component';
import { UnsubscribePageComponent } from './pages/unsubscribe-page/unsubscribe-page.component';
import { CguPageComponent } from './pages/cgu-page/cgu-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ForgetPasswordComponent } from './modals/forget-password/forget-password.component';

const appRoutes: Routes = [
  { path: "connexion", component: SignInPageComponent },
  { path: "inscription", component: SignUpPageComponent },
  { path: "creation-article", component: CreateArticlePageComponent },
  { path: "articles", component: ArticlesPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "diagnostic", component: DiagnosticPageComponent },
  { path: "profil", component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: "desabonnement-newsletter", component: UnsubscribePageComponent },
  { path: "cgu", component: CguPageComponent },
  { path: "", component: HomePageComponent },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    CreateArticlePageComponent,
    ArticleListComponent,
    ProfilePageComponent,
    ArticlesPageComponent,
    NavbarComponent,
    FooterComponent,
    DiagnosticPageComponent,
    DiagnosticBackBtnComponent,
    UnsubscribePageComponent,
    CguPageComponent,
    NotFoundPageComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' }),
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng5SliderModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgetPasswordComponent
  ]
})
export class AppModule {}
