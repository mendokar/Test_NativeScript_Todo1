"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var geolocation = require("nativescript-geolocation");
var application_settings_1 = require("tns-core-modules/application-settings/application-settings");
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var GlobalComponent = /** @class */ (function () {
    function GlobalComponent() {
        this.loader = new LoadingIndicator();
    }
    GlobalComponent.prototype.ngOnInit = function () {
    };
    /**
 * getUrlLocation
 */
    GlobalComponent.prototype.getUrlLocation = function () {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest().then(function () {
                geolocation.getCurrentLocation({ timeout: 20000 })
                    .then(function (location) {
                    var latitude = location.latitude;
                    var longitude = location.longitude;
                    console.log("Latitud" + latitude);
                    console.log("Longitud" + longitude);
                    application_settings_1.setString("latitud", '' + latitude);
                    application_settings_1.setString("longitud", '' + longitude);
                    return location;
                    //setString("latitud",''+'4.5892016');
                    //setString("longitud",''+'-74.1378283');
                    //this.firstWebViewSRC ="https://www.google.com/maps/search/veterinaria/@"+latitude+","+longitude+",20z";
                    //console.log("URL PARA MAPAS"+this.firstWebViewSRC);
                });
            });
        }
        else {
            return geolocation.getCurrentLocation({ timeout: 20000 })
                .then(function (location) {
                var latitude = location.latitude;
                var longitude = location.longitude;
                console.log("Latitud" + latitude);
                console.log("Longitud" + longitude);
                //setString("latitud",''+'4.5892016');
                //setString("longitud",''+'-74.1378283');
                application_settings_1.setString("latitud", '' + latitude);
                application_settings_1.setString("longitud", '' + longitude);
                return location;
                //this.firstWebViewSRC ="https://www.google.com/maps/search/veterinaria/@"+latitude+","+longitude+",20z";
                //console.log("URL PARA MAPAS"+this.firstWebViewSRC);
            });
        }
    };
    /**
 * loadingView
 */
    GlobalComponent.prototype.loadingView = function () {
        var options = {
            message: 'Cargando...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                details: "Cargando",
                margin: 10,
                dimBackground: false,
                color: "#000000",
                // background box around indicator
                // hideBezel will override this if true
                backgroundColor: "yellow",
                userInteractionEnabled: false,
                hideBezel: true,
            }
        };
        this.loader.show(options);
    };
    /**
     * loadingHide
     */
    GlobalComponent.prototype.loadingHide = function () {
        this.loader.hide();
    };
    return GlobalComponent;
}());
exports.GlobalComponent = GlobalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TG9jYXRpb24ubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRMb2NhdGlvbi5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNEQUF3RDtBQUN4RCxtR0FBdUY7QUFFdkYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVsRjtJQUFBO1FBRUksV0FBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQTZGcEMsQ0FBQztJQTNGRyxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVEOztHQUVEO0lBQ1Esd0NBQWMsR0FBckI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7cUJBQzdDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBRVYsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDakMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUE7b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxnQ0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsc0NBQXNDO29CQUN0Qyx5Q0FBeUM7b0JBQ3pDLHlHQUF5RztvQkFDekcscURBQXFEO2dCQUN6RCxDQUFDLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDbkQsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNqQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUE7Z0JBQ25DLHNDQUFzQztnQkFDdEMseUNBQXlDO2dCQUV6QyxnQ0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEIseUdBQXlHO2dCQUN6RyxxREFBcUQ7WUFFekQsQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDO0lBR0wsQ0FBQztJQUVPOztHQUVEO0lBQ0kscUNBQVcsR0FBbEI7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsY0FBYyxFQUFFLFVBQVMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ3JFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixpQkFBaUIsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxVQUFVO2dCQUNuQixNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsS0FBSztnQkFDcEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLGtDQUFrQztnQkFDbEMsdUNBQXVDO2dCQUN2QyxlQUFlLEVBQUUsUUFBUTtnQkFDekIsc0JBQXNCLEVBQUUsS0FBSztnQkFDN0IsU0FBUyxFQUFFLElBQUk7YUFHaEI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUNBQVcsR0FBbEI7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFVCxzQkFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgc2V0U3RyaW5nIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG52YXIgTG9hZGluZ0luZGljYXRvciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIikuTG9hZGluZ0luZGljYXRvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gKiBnZXRVcmxMb2NhdGlvblxyXG4gKi9cclxuICAgIHB1YmxpYyBnZXRVcmxMb2NhdGlvbigpIHtcclxuICAgICAgICBpZiAoIWdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgdGltZW91dDogMjAwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGF0aXR1ZFwiICsgbGF0aXR1ZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRcIiArIGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcImxhdGl0dWRcIiwgJycgKyBsYXRpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcImxvbmdpdHVkXCIsICcnICsgbG9uZ2l0dWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NldFN0cmluZyhcImxhdGl0dWRcIiwnJysnNC41ODkyMDE2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0U3RyaW5nKFwibG9uZ2l0dWRcIiwnJysnLTc0LjEzNzgyODMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZpcnN0V2ViVmlld1NSQyA9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL3ZldGVyaW5hcmlhL0BcIitsYXRpdHVkZStcIixcIitsb25naXR1ZGUrXCIsMjB6XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJVUkwgUEFSQSBNQVBBU1wiK3RoaXMuZmlyc3RXZWJWaWV3U1JDKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgcmV0dXJuIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IHRpbWVvdXQ6IDIwMDAwIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhdGl0dWRcIiArIGxhdGl0dWRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRcIiArIGxvbmdpdHVkZSlcclxuICAgICAgICAgICAgICAgICAgICAvL3NldFN0cmluZyhcImxhdGl0dWRcIiwnJysnNC41ODkyMDE2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZXRTdHJpbmcoXCJsb25naXR1ZFwiLCcnKyctNzQuMTM3ODI4MycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcImxhdGl0dWRcIiwgJycgKyBsYXRpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwibG9uZ2l0dWRcIiwgJycgKyBsb25naXR1ZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZmlyc3RXZWJWaWV3U1JDID1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvdmV0ZXJpbmFyaWEvQFwiK2xhdGl0dWRlK1wiLFwiK2xvbmdpdHVkZStcIiwyMHpcIjtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVVJMIFBBUkEgTUFQQVNcIit0aGlzLmZpcnN0V2ViVmlld1NSQyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAqIGxvYWRpbmdWaWV3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvYWRpbmdWaWV3KCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDYXJnYW5kby4uLicsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbihkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxyXG4gICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICAgICAgICAgICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICAgICAgICAgICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQ2FyZ2FuZG9cIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgICAgICAgZGltQmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIiwgLy8gY29sb3Igb2YgaW5kaWNhdG9yIGFuZCBsYWJlbHNcclxuICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZCBib3ggYXJvdW5kIGluZGljYXRvclxyXG4gICAgICAgICAgICAgICAgICAvLyBoaWRlQmV6ZWwgd2lsbCBvdmVycmlkZSB0aGlzIGlmIHRydWVcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSwgLy8gZGVmYXVsdCB0cnVlLiBTZXQgZmFsc2Ugc28gdGhhdCB0aGUgdG91Y2hlcyB3aWxsIGZhbGwgdGhyb3VnaCBpdC5cclxuICAgICAgICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLCAvLyBkZWZhdWx0IGZhbHNlLCBjYW4gaGlkZSB0aGUgc3Vycm91bmRpbmcgYmV6ZWxcclxuICAgICAgICAgICAgICAgICAvLyB2aWV3OiBVSVZpZXcsIC8vIFRhcmdldCB2aWV3IHRvIHNob3cgb24gdG9wIG9mIChEZWZhdWx0cyB0byBlbnRpcmUgd2luZG93KVxyXG4gICAgICAgICAgICAgICAgICAvL21vZGU6IC8vIHNlZSBpT1Mgc3BlY2lmaWMgb3B0aW9ucyBiZWxvd1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGxvYWRpbmdIaWRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvYWRpbmdIaWRlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbn0iXX0=