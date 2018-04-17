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
        return parseFloat(data) * 100;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWF0aGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQUM5Rix3RUFBc0U7QUFDdEUsbURBQWlEO0FBQ2pELHNEQUFxRDtBQUNyRCx1RUFBb0U7QUFDcEUsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBR25ELG9DQUFzQztBQWlCdEM7SUFVQywwQkFBb0IsS0FBVyxFQUFVLGVBQWtDO1FBQXZELFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFXM0UsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFWakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRDs7T0FFRztJQUNJLHNDQUFXLEdBQWxCO1FBQ0MsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLCtCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sK0JBQUksR0FB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UztTQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0kscUNBQVUsR0FBakI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQTlHVyxnQkFBZ0I7UUFmNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7WUFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7WUFDOUIsVUFBVSxFQUFFO2dCQUNYLGNBQU8sQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLFlBQUssQ0FBQyxNQUFNLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ2hELFlBQUssQ0FBQyxNQUFNLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFDdEQsaUJBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2hHLGlCQUFVLENBQUMsY0FBYyxFQUFFLGNBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDcEQsQ0FBQzthQUNGO1NBQ0QsQ0FBQzt5Q0FZMEIsV0FBSSxFQUEyQixzQ0FBaUI7T0FWL0QsZ0JBQWdCLENBK0c1QjtJQUFELHVCQUFDO0NBQUEsQUEvR0QsSUErR0M7QUEvR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2V0V2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXRXaGVhdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2hlYXRoZXJNb2RhbCB9IGZyb20gJy4vd2hlYXRoZXIubW9kYWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IEdsb2JhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9nZXRMb2NhdGlvbi5tb2RhbCc7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3ZWF0aGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzJ10sXG5cdHByb3ZpZGVyczogW0dldFdlYXRoZXJTZXJ2aWNlXSxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoJ21lbnVTdGF0ZScsIFtcblx0XHRcdHN0YXRlKCdoaWRlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGUoMCknIH0pKSxcblx0XHRcdHN0YXRlKCdzaG93Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGUoLTE4MGRlZyknIH0pKSxcblx0XHRcdHRyYW5zaXRpb24oJ2hpZGUgPT4gc2hvdycsIFtzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtMzYwZGVnKScgfSksIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JyldKSxcblx0XHRcdHRyYW5zaXRpb24oJ3Nob3cgPT4gaGlkZScsIGFuaW1hdGUoJzM1MG1zIGVhc2UtaW4nKSlcblx0XHRdKVxuXHRdXG59KVxuXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aHVtaWRpdHk6IGFueTtcblx0dGVtcGVyYXR1cmU6IGFueTtcblx0cHJlY2lwUHJvYmFiaWxpdHk6IGFueTtcblx0aWNvbjogYW55O1xuXHRzdW1tYXJ5OiBhbnk7XG5cdHRpbWVab25lOiBhbnk7XG5cdF9nbG9iYWxmdW5jdGlvbnM6IEdsb2JhbENvbXBvbmVudDtcblx0X2RhdGFXaGVhdGVyOiBXaGVhdGhlck1vZGFsO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9zZXJ2aWNlV2hlYXRlcjogR2V0V2VhdGhlclNlcnZpY2UpIHtcblx0XHR0aGlzLl9kYXRhV2hlYXRlciA9IG5ldyBXaGVhdGhlck1vZGFsKCk7XG5cdFx0dGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMuX2dsb2JhbGZ1bmN0aW9ucyA9IG5ldyBHbG9iYWxDb21wb25lbnQoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuX2dsb2JhbGZ1bmN0aW9ucy5sb2FkaW5nVmlldygpO1xuXHRcdHRoaXMuZ2V0TG9jYXRpb25EZXZpY2UoKTtcblx0fVxuXG5cdF9yb3RhdGVJbWFnZSA9IFwiXCI7XG5cdC8qKlxuXHQgKiByb3RhdGVJbWFnZVxuXHQgKi9cblx0cHVibGljIHJvdGF0ZUltYWdlKCkge1xuXHRcdHRoaXMuX3JvdGF0ZUltYWdlID09IFwiaGlkZVwiID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9yb3RhdGVJbWFnZSk7XG5cdH1cblxuXHQvKipcblx0ICogc2hvd1xuXHQgKi9cblx0cHVibGljIHNob3coKSB7XG5cdFx0dGhpcy5fcm90YXRlSW1hZ2UgPSBcInNob3dcIjtcblx0fVxuXG5cdHB1YmxpYyBoaWRlKCkge1xuXHRcdHRoaXMuX3JvdGF0ZUltYWdlID0gXCJoaWRlXCI7XG5cdH1cblxuXHQvKipcblx0ICogbmFtZVxuXHQgKi9cblx0cHVibGljIGdldERhdGFTZXJ2aWNlQVBJKCkge1xuXG5cdFx0dGhpcy5fc2VydmljZVdoZWF0ZXIuZ2V0UmVzcG9uc2VJbmZvKHRoaXMuX2RhdGFXaGVhdGVyKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXHRcdFx0dmFyIHN0ckpTT04gPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSk7XG5cdFx0XHR2YXIgb2JqSlNPTiA9IGV2YWwoXCIoZnVuY3Rpb24oKXtyZXR1cm4gXCIgKyBzdHJKU09OICsgXCI7fSkoKVwiKTtcblx0XHRcdGxldCBzdGF0dXMgPSBvYmpKU09OLnN0YXR1cztcblx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHR0aGlzLnRpbWVab25lID0gb2JqSlNPTi5fYm9keS50aW1lem9uZTtcblx0XHRcdFx0dGhpcy5zdW1tYXJ5ID0gb2JqSlNPTi5fYm9keS5jdXJyZW50bHkuc3VtbWFyeTtcblx0XHRcdFx0dGhpcy5pY29uID0gb2JqSlNPTi5fYm9keS5jdXJyZW50bHkuaWNvbjtcblx0XHRcdFx0dGhpcy5wcmVjaXBQcm9iYWJpbGl0eSA9IG9iakpTT04uX2JvZHkuY3VycmVudGx5LnByZWNpcFByb2JhYmlsaXR5O1xuXHRcdFx0XHR0aGlzLnByZWNpcFByb2JhYmlsaXR5ID0gdGhpcy5jYWxjdWxhdGVTdW1tYXJ5KHRoaXMucHJlY2lwUHJvYmFiaWxpdHkpO1xuXHRcdFx0XHR0aGlzLnRlbXBlcmF0dXJlID0gb2JqSlNPTi5fYm9keS5jdXJyZW50bHkudGVtcGVyYXR1cmU7XG5cdFx0XHRcdHRoaXMuaHVtaWRpdHkgPSBvYmpKU09OLl9ib2R5LmN1cnJlbnRseS5odW1pZGl0eTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9nbG9iYWxmdW5jdGlvbnMubG9hZGluZ0hpZGUoKTtcblx0XHRcdFx0fSwgMjAwMCk7XG5cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy52aWV3TWVzc2FnZShcIkVycm9yIGFsIGNvbnN1bHRhciBlbCBlc3RhZG8gZGVsIHRpZW1wbyA6IFwiICsgb2JqSlNPTi5zdGF0dXNUZXh0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgY2FsY3VsYXRlU3VtbWFyeShkYXRhKSB7XG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoZGF0YSkgKiAxMDA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBnZXRMb2NhdGlvbkRldmljZVxuXHQgKi9cblx0cHVibGljIGdldExvY2F0aW9uRGV2aWNlKCkge1xuXHRcdHRoaXMuX2dsb2JhbGZ1bmN0aW9ucy5nZXRVcmxMb2NhdGlvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZXNwb25zZSBsb2NhdGlvblwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UubGF0aXR1ZGUpKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgbG9jYXRpb25cIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmxvbmdpdHVkZSkpO1xuXHRcdFx0dGhpcy5fZGF0YVdoZWF0ZXIuX2xhdGl0dWRlID0gcmVzcG9uc2UubGF0aXR1ZGUudG9TdHJpbmcoKTtcblx0XHRcdHRoaXMuX2RhdGFXaGVhdGVyLl9sb25naXR1ZGUgPSByZXNwb25zZS5sb25naXR1ZGUudG9TdHJpbmcoKTtcblx0XHRcdHRoaXMuZ2V0RGF0YVNlcnZpY2VBUEkoKTtcblxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogdmlld01lc3NhZ2Vcblx0ICogZnVuY3Rpb24gdGhhdCBhbGxvd3MgdG8gaW5mb3JtIHRoZSB1c2VyIGFib3V0IGxhY2sgb2YgZGF0YVxuXHQgKi9cblx0cHVibGljIHZpZXdNZXNzYWdlKG1lbnNhamUpIHtcblx0XHRkaWFsb2dzLmFsZXJ0KHtcblx0XHRcdHRpdGxlOiBcIk1lbnNhamVcIixcblx0XHRcdG1lc3NhZ2U6IG1lbnNhamUsXG5cdFx0XHRva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJlbG9hZERhdGFcblx0ICovXG5cdHB1YmxpYyByZWxvYWREYXRhKCkge1xuXHRcdHRoaXMuX2dsb2JhbGZ1bmN0aW9ucy5sb2FkaW5nVmlldygpO1xuXHRcdHRoaXMuZ2V0TG9jYXRpb25EZXZpY2UoKTtcblx0fVxufSJdfQ==