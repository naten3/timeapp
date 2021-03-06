
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TodoListComponent } from 'app/todos/todo-list.component';
import { TodoComponent } from 'app/todos/todo.component';
import { NewTodoInputComponent } from 'app/todos/new-todo.component';
import { TodoContainerComponent } from 'app/todos/todo-container.component';

import { TreeNodeComponent } from 'app/tree/tree-node.component';
import { TreeNodeListComponent } from 'app/tree/tree-node-list.component';
import { TreeContainerComponent } from 'app/tree/tree-container.component';

import { MyErrorHandler } from './error-handler';
import { CoreModule } from 'app/core/core.module';
import { routes } from 'app/app.routes';
import { AutoSaveContainerComponent } from './home/auto-save-container.component';
import { SharedModule } from 'app/shared/shared.module';
import { LauncherContainerComponent, EmailVerifyComponent, HomeContainerComponent } from 'app/home';
import { AddUserComponent } from 'app/add-update-user';
import { AuthEffects, UserUpdateEffects } from 'app/core/effects';
import { AuthGuard, LoginGuard, SocialLoginGuard } from 'app/core/guards';
import { EmailVerifyResolver } from 'app/core/resolve';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    AutoSaveContainerComponent,
    NewTodoInputComponent,
    TodoComponent,
    TodoListComponent,
    TodoContainerComponent,
    TreeNodeComponent,
    TreeNodeListComponent,
    TreeContainerComponent,
    LauncherContainerComponent,
    EmailVerifyComponent,
    AddUserComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(UserUpdateEffects)
  ],
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }, AuthGuard, LoginGuard, SocialLoginGuard, EmailVerifyResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

