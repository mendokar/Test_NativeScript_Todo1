import { HomeComponent } from "./pages/home/home.component";
import { WeatherComponent } from "./pages/weather/weather.component";
import { MenuComponent } from "./pages/menu/menu.component";

export const pageRoutes = [
    { path: "", component: MenuComponent },
    { path: "app-words", component: HomeComponent },
    { path: "app-wheater", component: WeatherComponent }
]

export const NavegateRouters = [
    MenuComponent,
    HomeComponent,
    WeatherComponent
]