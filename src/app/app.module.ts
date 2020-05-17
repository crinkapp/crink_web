// ANGULAR
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// LIBS
import { TagInputModule } from "ngx-chips";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { FooterComponent } from './components/footer/footer.component';

// PAGES
import { SignInPageComponent } from "./pages/sign-in-page/sign-in-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CreateArticlePageComponent } from "./pages/create-article-page/create-article-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { ArticlesPageComponent } from "./pages/articles-page/articles-page.component";
import { UnsubscribePageComponent } from './pages/unsubscribe-page/unsubscribe-page.component';

const appRoutes: Routes = [
  { path: "sign-in", component: SignInPageComponent },
  { path: "sign-up", component: SignUpPageComponent },
  { path: "create-article", component: CreateArticlePageComponent },
  { path: "articles", component: ArticlesPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "unsubscribe-newsletter", component: UnsubscribePageComponent },
  { path: "", component: HomePageComponent },
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
    UnsubscribePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
