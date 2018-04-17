"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(_routEx) {
        this._routEx = _routEx;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    /**
     * getWords
     */
    MenuComponent.prototype.getWords = function () {
        this._routEx.navigate(["app-words"], {
            transition: {
                name: "slide",
                duration: 400,
                curve: "ease"
            }
        });
    };
    /**
     * getWheater
     */
    MenuComponent.prototype.getWheater = function () {
        this._routEx.navigate(["app-wheater"], {
            transition: {
                name: "slide",
                duration: 400,
                curve: "ease"
            }
        });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: './pages/menu/menu.component.html',
            styleUrls: ['./pages/menu/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBUW5EO0lBRUMsdUJBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQUksQ0FBQztJQUVsRCxnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkOztPQUVHO0lBQ0ksZ0NBQVEsR0FBZjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2I7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBVSxHQUFqQjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2I7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBOUJXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDOUMsQ0FBQzt5Q0FJNEIseUJBQWdCO09BRmpDLGFBQWEsQ0ErQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbWVudScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdC8qKlxuXHQgKiBnZXRXb3Jkc1xuXHQgKi9cblx0cHVibGljIGdldFdvcmRzKCkge1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJhcHAtd29yZHNcIl0sIHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0bmFtZTogXCJzbGlkZVwiLFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRjdXJ2ZTogXCJlYXNlXCJcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBnZXRXaGVhdGVyXG5cdCAqL1xuXHRwdWJsaWMgZ2V0V2hlYXRlcigpIHtcblx0XHR0aGlzLl9yb3V0RXgubmF2aWdhdGUoW1wiYXBwLXdoZWF0ZXJcIl0sIHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0bmFtZTogXCJzbGlkZVwiLFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRjdXJ2ZTogXCJlYXNlXCJcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSJdfQ==