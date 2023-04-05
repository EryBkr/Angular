import { Route } from "@angular/router";
import { C1Component } from "./c1.component";

//Route yapılarını bu şekilde bölüp, app-routing.module kısmına ekleyebiliriz
export const C1Route:Route={
  path:"c1",
  component:C1Component
}
