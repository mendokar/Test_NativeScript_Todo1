"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var GetWeatherService = /** @class */ (function () {
    function GetWeatherService(http) {
        this.http = http;
        this.serverUrl = "";
        this._urlServerAPI = "https://api.darksky.net/forecast/";
        this._tokenAPI = "dd355c7232fb9751501144f9e9066fa6";
    }
    GetWeatherService.prototype.getResponseInfo = function (_dataWheater) {
        this.serverUrl = this._urlServerAPI + '' + this._tokenAPI + '/' + _dataWheater._latitude + "," + _dataWheater._longitude;
        //this.serverUrl = "https://api.darksky.net/forecast/dd355c7232fb9751501144f9e9066fa6/37.8267,-122.4233"
        console.log("URL a consultar" + this.serverUrl);
        return this.http.get(this.serverUrl)
            .do(function (res) { return res; });
    };
    GetWeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GetWeatherService);
    return GetWeatherService;
}());
exports.GetWeatherService = GetWeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2hlYXRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0V2hlYXRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUt4RCxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBSzlCO0lBT0ksMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixrQkFBYSxHQUFHLG1DQUFtQyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxrQ0FBa0MsQ0FBQztJQUkvQyxDQUFDO0lBRU0sMkNBQWUsR0FBdEIsVUFBdUIsWUFBMEI7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsR0FBQyxZQUFZLENBQUMsU0FBUyxHQUFDLEdBQUcsR0FBQyxZQUFZLENBQUMsVUFBVSxDQUFBO1FBQzVHLHdHQUF3RztRQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMvQixFQUFFLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWhCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FRaUIsV0FBSTtPQVByQixpQkFBaUIsQ0FrQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCB7IFdoZWF0aGVyTW9kYWwgfSBmcm9tIFwiLi4vcGFnZXMvd2VhdGhlci93aGVhdGhlci5tb2RhbFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdlYXRoZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBzZXJ2ZXJVcmwgPSBcIlwiO1xyXG4gICAgX3VybFNlcnZlckFQSSA9IFwiaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvXCI7XHJcbiAgICBfdG9rZW5BUEkgPSBcImRkMzU1YzcyMzJmYjk3NTE1MDExNDRmOWU5MDY2ZmE2XCI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc3BvbnNlSW5mbyhfZGF0YVdoZWF0ZXI6V2hlYXRoZXJNb2RhbCkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gdGhpcy5fdXJsU2VydmVyQVBJKycnK3RoaXMuX3Rva2VuQVBJKycvJytfZGF0YVdoZWF0ZXIuX2xhdGl0dWRlK1wiLFwiK19kYXRhV2hlYXRlci5fbG9uZ2l0dWRlXHJcbiAgICAgICAgLy90aGlzLnNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvZGQzNTVjNzIzMmZiOTc1MTUwMTE0NGY5ZTkwNjZmYTYvMzcuODI2NywtMTIyLjQyMzNcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIGEgY29uc3VsdGFyXCIrdGhpcy5zZXJ2ZXJVcmwpOyAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybClcclxuICAgICAgICAgICAgLmRvKHJlcyA9PiByZXMpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==