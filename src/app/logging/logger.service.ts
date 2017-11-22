import { Injectable } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

@Injectable()
export class AppInsightsService {
    private config: Microsoft.ApplicationInsights.IConfig = {
        instrumentationKey: 'ee846cbc-14ab-4233-905e-a13bfd30200d'
    };

    constructor() {
        if (!AppInsights.config) {
            AppInsights.downloadAndSetup(this.config);
        }
    }

    logPageView(name?: string, url?: string, properties?: any,
        measurements?: any, duration?: number) {
        AppInsights.trackPageView(name, url, properties, measurements, duration);
    }

    logEvent(name: string, properties?: any, measurements?: any) {
        AppInsights.trackEvent(name, properties, measurements);
    }

    logException(exception: Error, handledAt?: string, properties?: any, measurements?: any) {
        AppInsights.trackException(exception, handledAt, properties, measurements);
    }

    logTrace(message: string, properties?: any, severityLevel?: any) {
        AppInsights.trackTrace(message, properties, severityLevel);
    }
}