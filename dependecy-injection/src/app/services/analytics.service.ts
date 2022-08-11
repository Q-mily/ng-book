import { Injectable } from "@angular/core";
import {Metric, AnalyticsImplementation} from '../analytics-demo/analytics-demo.interface';

Injectable({
    providedIn: 'root'
})
export class AnalyticsService{
    constructor(private analyticsImplementation: AnalyticsImplementation){

    }

    record(metric: Metric){
        this.analyticsImplementation.recordEvent(metric);
    }
}