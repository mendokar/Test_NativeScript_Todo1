"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var getWheater_service_1 = require("../../services/getWheater.service");
var wheather_modal_1 = require("./wheather.modal");
var page_1 = require("tns-core-modules/ui/page/page");
var getLocation_modal_1 = require("../../functions/getLocation.modal");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var dialogs = require("ui/dialogs");
var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(_page, _serviceWheater) {
        this._page = _page;
        this._serviceWheater = _serviceWheater;
        this._rotateImage = "";
        this._dataWheater = new wheather_modal_1.WheatherModal();
        this._page.actionBarHidden = true;
        this._globalfunctions = new getLocation_modal_1.GlobalComponent();
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this._globalfunctions.loadingView();
        this.getLocationDevice();
    };
    /**
     * rotateImage
     */
    WeatherComponent.prototype.rotateImage = function () {
        this._rotateImage == "hide" ? this.show() : this.hide();
        console.log(this._rotateImage);
    };
    /**
     * show
     */
    WeatherComponent.prototype.show = function () {
        this._rotateImage = "show";
    };
    WeatherComponent.prototype.hide = function () {
        this._rotateImage = "hide";
    };
    /**
     * name
     */
    WeatherComponent.prototype.getDataServiceAPI = function () {
        var _this = this;
        this._serviceWheater.getResponseInfo(this._dataWheater).subscribe(function (response) {
            //console.log(JSON.stringify(response));
            var strJSON = JSON.stringify(response);
            var objJSON = eval("(function(){return " + strJSON + ";})()");
            var status = objJSON.status;
            if (status === 200) {
                _this.timeZone = objJSON._body.timezone;
                _this.summary = objJSON._body.currently.summary;
                _this.icon = objJSON._body.currently.icon;
                _this.precipProbability = objJSON._body.currently.precipProbability;
                _this.precipProbability = _this.calculateSummary(_this.precipProbability);
                _this.temperature = objJSON._body.currently.temperature;
                _this.humidity = objJSON._body.currently.humidity;
                setTimeout(function () {
                    _this._globalfunctions.loadingHide();
                }, 2000);
            }
            else {
                _this.viewMessage("Error al consultar el estado del tiempo : " + objJSON.statusText);
            }
        });
    };
    WeatherComponent.prototype.calculateSummary = function (data) {
        var numero = parseFloat(data) * 100;
        return numero.toFixed(1);
    };
    /**
     * getLocationDevice
     */
    WeatherComponent.prototype.getLocationDevice = function () {
        var _this = this;
        this._globalfunctions.getUrlLocation().then(function (response) {
            console.log("Response location" + JSON.stringify(response.latitude));
            console.log("Response location" + JSON.stringify(response.longitude));
            _this._dataWheater._latitude = response.latitude.toString();
            _this._dataWheater._longitude = response.longitude.toString();
            _this.getDataServiceAPI();
        });
    };
    /**
     * viewMessage
     * function that allows to inform the user about lack of data
     */
    WeatherComponent.prototype.viewMessage = function (mensaje) {
        dialogs.alert({
            title: "Mensaje",
            message: mensaje,
            okButtonText: "Aceptar"
        }).then(function () {
            console.log("Dialog closed!");
        });
    };
    /**
     * reloadData
     */
    WeatherComponent.prototype.reloadData = function () {
        this._globalfunctions.loadingView();
        this.getLocationDevice();
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: './pages/weather/weather.component.html',
            styleUrls: ['./pages/weather/weather.component.css'],
            providers: [getWheater_service_1.GetWeatherService],
            animations: [
                core_1.trigger('menuState', [
                    core_1.state('hide', core_1.style({ transform: 'rotate(0)' })),
                    core_1.state('show', core_1.style({ transform: 'rotate(-180deg)' })),
                    core_1.transition('hide => show', [core_1.style({ transform: 'rotate(-360deg)' }), core_1.animate('350ms ease-out')]),
                    core_1.transition('show => hide', core_1.animate('350ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page, getWheater_service_1.GetWeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQUM5Rix3RUFBc0U7QUFDdEUsbURBQWlEO0FBQ2pELHNEQUFxRDtBQUNyRCx1RUFBb0U7QUFDcEUsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBR25ELG9DQUFzQztBQWlCdEM7SUFVQywwQkFBb0IsS0FBVyxFQUFVLGVBQWtDO1FBQXZELFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFXM0UsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFWakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRDs7T0FFRztJQUNJLHNDQUFXLEdBQWxCO1FBQ0MsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLCtCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sK0JBQUksR0FB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cnQgeyBDb21wb25lbnQsIE9uSW5pdCwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXRXZWF0aGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dldFdoZWF0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXaGVhdGhlck1vZGFsIH0gZnJvbSAnLi93aGVhdGhlci5tb2RhbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgR2xvYmFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2dldExvY2F0aW9uLm1vZGFsJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dlYXRoZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbR2V0V2VhdGhlclNlcnZpY2VdLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignbWVudVN0YXRlJywgW1xuXHRcdFx0c3RhdGUoJ2hpZGUnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwKScgfSkpLFxuXHRcdFx0c3RhdGUoJ3Nob3cnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTgwZGVnKScgfSkpLFxuXHRcdFx0dHJhbnNpdGlvbignaGlkZSA9PiBzaG93JywgW3N0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKC0zNjBkZWcpJyB9KSwgYW5pbWF0ZSgnMzUwbXMgZWFzZS1vdXQnKV0pLFxuXHRcdFx0dHJhbnNpdGlvbignc2hvdyA9PiBoaWRlJywgYW5pbWF0ZSgnMzUwbXMgZWFzZS1pbicpKVxuXHRcdF0pXG5cdF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRodW1pZGl0eTogYW55O1xuXHR0ZW1wZXJhdHVyZTogYW55O1xuXHRwcmVjaXBQcm9iYWJpbGl0eTogYW55O1xuXHRpY29uOiBhbnk7XG5cdHN1bW1hcnk6IGFueTtcblx0dGltZVpvbmU6IGFueTtcblx0X2dsb2JhbGZ1bmN0aW9uczogR2xvYmFsQ29tcG9uZW50O1xuXHRfZGF0YVdoZWF0ZXI6IFdoZWF0aGVyTW9kYWw7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX3NlcnZpY2VXaGVhdGVyOiBHZXRXZWF0aGVyU2VydmljZSkge1xuXHRcdHRoaXMuX2RhdGFXaGVhdGVyID0gbmV3IFdoZWF0aGVyTW9kYWwoKTtcblx0XHR0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5fZ2xvYmFsZnVuY3Rpb25zID0gbmV3IEdsb2JhbENvbXBvbmVudCgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5fZ2xvYmFsZnVuY3Rpb25zLmxvYWRpbmdWaWV3KCk7XG5cdFx0dGhpcy5nZXRMb2NhdGlvbkRldmljZSgpO1xuXHR9XG5cblx0X3JvdGF0ZUltYWdlID0gXCJcIjtcblx0LyoqXG5cdCAqIHJvdGF0ZUltYWdlXG5cdCAqL1xuXHRwdWJsaWMgcm90YXRlSW1hZ2UoKSB7XG5cdFx0dGhpcy5fcm90YXRlSW1hZ2UgPT0gXCJoaWRlXCIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX3JvdGF0ZUltYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBzaG93XG5cdCAqL1xuXHRwdWJsaWMgc2hvdygpIHtcblx0XHR0aGlzLl9yb3RhdGVJbWFnZSA9IFwic2hvd1wiO1xuXHR9XG5cblx0cHVibGljIGhpZGUoKSB7XG5cdFx0dGhpcy5fcm90YXRlSW1hZ2UgPSBcImhpZGVcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBuYW1lXG5cdCAqL1xuXHRwdWJsaWMgZ2V0RGF0YVNlcnZpY2VBUEkoKSB7XG5cblx0XHR0aGlzLl9zZXJ2aWNlV2hlYXRlci5nZXRSZXNwb25zZUluZm8odGhpcy5fZGF0YVdoZWF0ZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cdFx0XHR2YXIgc3RySlNPTiA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKTtcblx0XHRcdHZhciBvYmpKU09OID0gZXZhbChcIihmdW5jdGlvbigpe3JldHVybiBcIiArIHN0ckpTT04gKyBcIjt9KSgpXCIpO1xuXHRcdFx0bGV0IHN0YXR1cyA9IG9iakpTT04uc3RhdHVzO1xuXHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdHRoaXMudGltZVpvbmUgPSBvYmpKU09OLl9ib2R5LnRpbWV6b25lO1xuXHRcdFx0XHR0aGlzLnN1bW1hcnkgPSBvYmpKU09OLl9ib2R5LmN1cnJlbnRseS5zdW1tYXJ5O1xuXHRcdFx0XHR0aGlzLmljb24gPSBvYmpKU09OLl9ib2R5LmN1cnJlbnRseS5pY29uO1xuXHRcdFx0XHR0aGlzLnByZWNpcFByb2JhYmlsaXR5ID0gb2JqSlNPTi5fYm9keS5jdXJyZW50bHkucHJlY2lwUHJvYmFiaWxpdHk7XG5cdFx0XHRcdHRoaXMucHJlY2lwUHJvYmFiaWxpdHkgPSB0aGlzLmNhbGN1bGF0ZVN1bW1hcnkodGhpcy5wcmVjaXBQcm9iYWJpbGl0eSk7XG5cdFx0XHRcdHRoaXMudGVtcGVyYXR1cmUgPSBvYmpKU09OLl9ib2R5LmN1cnJlbnRseS50ZW1wZXJhdHVyZTtcblx0XHRcdFx0dGhpcy5odW1pZGl0eSA9IG9iakpTT04uX2JvZHkuY3VycmVudGx5Lmh1bWlkaXR5O1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2dsb2JhbGZ1bmN0aW9ucy5sb2FkaW5nSGlkZSgpO1xuXHRcdFx0XHR9LCAyMDAwKTtcblxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnZpZXdNZXNzYWdlKFwiRXJyb3IgYWwgY29uc3VsdGFyIGVsIGVzdGFkbyBkZWwgdGllbXBvIDogXCIgKyBvYmpKU09OLnN0YXR1c1RleHQpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBjYWxjdWxhdGVTdW1tYXJ5KGRhdGEpIHtcdFx0XG5cdFx0bGV0IG51bWVybyA9IHBhcnNlRmxvYXQoZGF0YSkgKiAxMDA7XG5cdFx0cmV0dXJuICBudW1lcm8udG9GaXhlZCgxKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIGdldExvY2F0aW9uRGV2aWNlXG5cdCAqL1xuXHRwdWJsaWMgZ2V0TG9jYXRpb25EZXZpY2UoKSB7XG5cdFx0dGhpcy5fZ2xvYmFsZnVuY3Rpb25zLmdldFVybExvY2F0aW9uKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGxvY2F0aW9uXCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5sYXRpdHVkZSkpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZXNwb25zZSBsb2NhdGlvblwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UubG9uZ2l0dWRlKSk7XG5cdFx0XHR0aGlzLl9kYXRhV2hlYXRlci5fbGF0aXR1ZGUgPSByZXNwb25zZS5sYXRpdHVkZS50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5fZGF0YVdoZWF0ZXIuX2xvbmdpdHVkZSA9IHJlc3BvbnNlLmxvbmdpdHVkZS50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5nZXREYXRhU2VydmljZUFQSSgpO1xuXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiB2aWV3TWVzc2FnZVxuXHQgKiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBpbmZvcm0gdGhlIHVzZXIgYWJvdXQgbGFjayBvZiBkYXRhXG5cdCAqL1xuXHRwdWJsaWMgdmlld01lc3NhZ2UobWVuc2FqZSkge1xuXHRcdGRpYWxvZ3MuYWxlcnQoe1xuXHRcdFx0dGl0bGU6IFwiTWVuc2FqZVwiLFxuXHRcdFx0bWVzc2FnZTogbWVuc2FqZSxcblx0XHRcdG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogcmVsb2FkRGF0YVxuXHQgKi9cblx0cHVibGljIHJlbG9hZERhdGEoKSB7XG5cdFx0dGhpcy5fZ2xvYmFsZnVuY3Rpb25zLmxvYWRpbmdWaWV3KCk7XG5cdFx0dGhpcy5nZXRMb2NhdGlvbkRldmljZSgpO1xuXHR9XG59Il19