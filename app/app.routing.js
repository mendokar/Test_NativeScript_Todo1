"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./pages/home/home.component");
var weather_component_1 = require("./pages/weather/weather.component");
var menu_component_1 = require("./pages/menu/menu.component");
exports.pageRoutes = [
    { path: "", component: menu_component_1.MenuComponent },
    { path: "app-words", component: home_component_1.HomeComponent },
    { path: "app-wheater", component: weather_component_1.WeatherComponent }
];
exports.NavegateRouters = [
    menu_component_1.MenuComponent,
    home_component_1.HomeComponent,
    weather_component_1.WeatherComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCx1RUFBcUU7QUFDckUsOERBQTREO0FBRS9DLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtDQUN2RCxDQUFBO0FBRVksUUFBQSxlQUFlLEdBQUc7SUFDM0IsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLG9DQUFnQjtDQUNuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgV2VhdGhlckNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJhcHAtd29yZHNcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiYXBwLXdoZWF0ZXJcIiwgY29tcG9uZW50OiBXZWF0aGVyQ29tcG9uZW50IH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmVnYXRlUm91dGVycyA9IFtcclxuICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgV2VhdGhlckNvbXBvbmVudFxyXG5dIl19