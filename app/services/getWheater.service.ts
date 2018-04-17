import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";



import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { WheatherModal } from "../pages/weather/wheather.modal";


@Injectable()
export class GetWeatherService {

    serverUrl = "";
    _urlServerAPI = "https://api.darksky.net/forecast/";
    _tokenAPI = "dd355c7232fb9751501144f9e9066fa6";

    
    constructor(private http: Http) { 
    }

    public getResponseInfo(_dataWheater:WheatherModal) {
        this.serverUrl = this._urlServerAPI+''+this._tokenAPI+'/'+_dataWheater._latitude+","+_dataWheater._longitude
        //this.serverUrl = "https://api.darksky.net/forecast/dd355c7232fb9751501144f9e9066fa6/37.8267,-122.4233"
        console.log("URL a consultar"+this.serverUrl);       
        return this.http.get(this.serverUrl)
            .do(res => res);
    }

}