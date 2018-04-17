import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";

import { NavegateRouters, pageRoutes } from "./app.routing";

import { AppComponent } from "./app.component";

import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@NgModule({
  declarations: [AppComponent,...NavegateRouters],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptAnimationsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(pageRoutes)],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
