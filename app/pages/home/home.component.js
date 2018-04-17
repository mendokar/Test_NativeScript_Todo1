"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_modal_1 = require("./data.modal");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var dialogs = require("ui/dialogs");
var router_1 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routEx) {
        this._routEx = _routEx;
        this._viewResponse = false;
        this._dato = new data_modal_1.DataModalString();
    }
    HomeComponent.prototype.ngOnInit = function () { };
    /**
     * changePositionString
     * Function that allows changing the order of the word test or the words that are entered.
     */
    HomeComponent.prototype.changePositionString = function () {
        this._viewResponse = false;
        if (this._dato._word !== "" && this._dato._word !== undefined && this._dato._word !== null) {
            var cadena = this._dato._word;
            this._newCadena = "";
            var size = cadena.length;
            for (var i = 0; i < cadena.length + 1; i++) {
                this._newCadena = this._newCadena + cadena.charAt(cadena.length - i);
            }
            this._viewResponse = true;
        }
        else {
            this.viewMessage("Por favor ingresa una palabra");
        }
    };
    /**
     * viewMessage
     * function that allows to inform the user about lack of data
     */
    HomeComponent.prototype.viewMessage = function (mensaje) {
        dialogs.alert({
            title: "Mensaje",
            message: mensaje,
            okButtonText: "Aceptar"
        }).then(function () {
            console.log("Dialog closed!");
        });
    };
    /**
     * getBack
     * navigation back page
     */
    HomeComponent.prototype.getBack = function () {
        this._routEx.back();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './pages/home/home.component.html',
            styleUrls: ['./pages/home/home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyQ0FBK0M7QUFDL0MsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBRW5ELG9DQUFzQztBQUN0QyxzREFBK0Q7QUFRL0Q7SUFZQyx1QkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFMNUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFNOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDRCQUFlLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFHZDs7O09BR0c7SUFDSSw0Q0FBb0IsR0FBM0I7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBRUYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG1DQUFXLEdBQWxCLFVBQW1CLE9BQU87UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNiLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxTQUFTO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksK0JBQU8sR0FBZDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFEVyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBYzJCLHlCQUFnQjtPQVpoQyxhQUFhLENBMkR6QjtJQUFELG9CQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YU1vZGFsU3RyaW5nIH0gZnJvbSAnLi9kYXRhLm1vZGFsJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2hvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblx0Lypcblx0KlBsYWNlIGZvciB0aGUgZGVjbGFyYXRpb24gb2YgdGhlIHZhcmlhYmxlc1xuXHQqL1xuXHRfZGF0bzogRGF0YU1vZGFsU3RyaW5nO1xuXHRfdmlld1Jlc3BvbnNlOiBib29sZWFuID0gZmFsc2U7XG5cdF9uZXdDYWRlbmE6IHN0cmluZztcblxuXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMpIHtcblx0XHR0aGlzLl9kYXRvID0gbmV3IERhdGFNb2RhbFN0cmluZygpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXG5cdC8qKlxuXHQgKiBjaGFuZ2VQb3NpdGlvblN0cmluZ1xuXHQgKiBGdW5jdGlvbiB0aGF0IGFsbG93cyBjaGFuZ2luZyB0aGUgb3JkZXIgb2YgdGhlIHdvcmQgdGVzdCBvciB0aGUgd29yZHMgdGhhdCBhcmUgZW50ZXJlZC5cblx0ICovXG5cdHB1YmxpYyBjaGFuZ2VQb3NpdGlvblN0cmluZygpIHtcblx0XHR0aGlzLl92aWV3UmVzcG9uc2UgPSBmYWxzZTtcblx0XHRpZiAodGhpcy5fZGF0by5fd29yZCAhPT0gXCJcIiAmJiB0aGlzLl9kYXRvLl93b3JkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fZGF0by5fd29yZCAhPT0gbnVsbCkge1x0XHRcdFxuXHRcdFx0bGV0IGNhZGVuYSA9IHRoaXMuX2RhdG8uX3dvcmQ7XG5cdFx0XHR0aGlzLl9uZXdDYWRlbmEgPSBcIlwiO1xuXHRcdFx0bGV0IHNpemUgPSBjYWRlbmEubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYWRlbmEubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuX25ld0NhZGVuYSA9IHRoaXMuX25ld0NhZGVuYSArIGNhZGVuYS5jaGFyQXQoY2FkZW5hLmxlbmd0aCAtIGkpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdmlld1Jlc3BvbnNlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3TWVzc2FnZShcIlBvciBmYXZvciBpbmdyZXNhIHVuYSBwYWxhYnJhXCIpO1xuXHRcdH1cblxuXHR9XG5cdC8qKlxuXHQgKiB2aWV3TWVzc2FnZVxuXHQgKiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0byBpbmZvcm0gdGhlIHVzZXIgYWJvdXQgbGFjayBvZiBkYXRhXG5cdCAqL1xuXHRwdWJsaWMgdmlld01lc3NhZ2UobWVuc2FqZSkge1xuXHRcdGRpYWxvZ3MuYWxlcnQoe1xuXHRcdFx0dGl0bGU6IFwiTWVuc2FqZVwiLFxuXHRcdFx0bWVzc2FnZTogbWVuc2FqZSxcblx0XHRcdG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogZ2V0QmFja1xuXHQgKiBuYXZpZ2F0aW9uIGJhY2sgcGFnZVxuXHQgKi9cblx0cHVibGljIGdldEJhY2soKSB7XG5cdFx0dGhpcy5fcm91dEV4LmJhY2soKTtcblx0fVxufSJdfQ==