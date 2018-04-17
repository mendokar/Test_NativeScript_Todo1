import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Color } from "tns-core-modules/color";
import * as geolocation from "nativescript-geolocation";
import { setString } from 'tns-core-modules/application-settings/application-settings';

var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

export class GlobalComponent implements OnInit {

    loader = new LoadingIndicator();

    ngOnInit(): void {

    }

    /**
 * getUrlLocation
 */
    public getUrlLocation() {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest().then(() => {
                geolocation.getCurrentLocation({ timeout: 20000 })
                    .then(location => {
                      
                        let latitude = location.latitude;
                        let longitude = location.longitude;
                        console.log("Latitud" + latitude)
                        console.log("Longitud" + longitude);
                        setString("latitud", '' + latitude);
                        setString("longitud", '' + longitude);
                        return location;
                        //setString("latitud",''+'4.5892016');
                        //setString("longitud",''+'-74.1378283');
                        //this.firstWebViewSRC ="https://www.google.com/maps/search/veterinaria/@"+latitude+","+longitude+",20z";
                        //console.log("URL PARA MAPAS"+this.firstWebViewSRC);
                    })
            });
        }
        else {
           return geolocation.getCurrentLocation({ timeout: 20000 })
                .then(location => {
                    let latitude = location.latitude;
                    let longitude = location.longitude;
                    console.log("Latitud" + latitude)
                    console.log("Longitud" + longitude)
                    //setString("latitud",''+'4.5892016');
                    //setString("longitud",''+'-74.1378283');
                    
                    setString("latitud", '' + latitude);
                    setString("longitud", '' + longitude);
                    return location;
                    //this.firstWebViewSRC ="https://www.google.com/maps/search/veterinaria/@"+latitude+","+longitude+",20z";
                    //console.log("URL PARA MAPAS"+this.firstWebViewSRC);

                })
        }


    }

            /**
         * loadingView
         */
        public loadingView() {
            var options = {
                message: 'Cargando...',
                progress: 0.65,
                android: {
                  indeterminate: true,
                  cancelable: false,
                  cancelListener: function(dialog) { console.log("Loading cancelled") },
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
                  color: "#000000", // color of indicator and labels
                  // background box around indicator
                  // hideBezel will override this if true
                  backgroundColor: "yellow",
                  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
                  hideBezel: true, // default false, can hide the surrounding bezel
                 // view: UIView, // Target view to show on top of (Defaults to entire window)
                  //mode: // see iOS specific options below
                }
              };
              this.loader.show(options);
        }

        /**
         * loadingHide
         */
        public loadingHide() {
            
            this.loader.hide();
        }

}