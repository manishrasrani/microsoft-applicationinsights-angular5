# microsoft-applicationinsights-angular5

This is a wrapper library for Angular 5+ modules over Microsoft Application Insights SDK.

Working example at [https://github.com/manishrasrani/microsoft-applicationinsights-angular5-example](https://github.com/manishrasrani/microsoft-applicationinsights-angular5-example)

___
Application Insights is an Azure service for monitoring web applications. It includes analytics tools to help you understand application usage and to diagnose issues with the goal of continuously improving performance and usability. To read more on ApplicationInsights, refer [here](https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview).
___

 <h2>Consumption of the library</h2>

 **Step 1: Install the package**
 ```bash
npm i microsoft-applicationinsights-angular5
```
Also add it to your dependencies section in package.json so that it is restored when you do an npm install.

**Step 2: Import the AppInsights module**

In the root mosule of your application, do import the AppInsights module.

```bash
import { AppInsightsModule } from 'microsoft-applicationinsights-angular5';
```

Add it to the imports array in your root module by providing the Instrumentation Key of the AppInsights resource where you want to log the insights.

```bash
@NgModule({
  declarations: [
    AppComponent,
    ---
  ],
  imports: [
    BrowserModule, 
    AppInsightsModule.forRoot('<YOUR INSTRUMENTATION KEY>'), <------------ ADD
    ---
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Step 3: Consuming the library in your application**

Wherever you do want to consume the library, just import the AppInsightsService and inject it in your constructor.

```bash
import { AppInsightsService } from 'microsoft-applicationinsights-angular5';
---

constructor(private logger: AppInsightsService) { }
---
```

Send telemetry data to AppInsights as shown below - 

```bash
this.logger.logTrace("This is a trace");
this.logger.logEvent("This is an event");
this.logger.logPageView("Page", "http://localhost:4200");
this.logger.logException(new Error("This is an exception"));
```

Additional properties to the above methods can also be set if required. Example - 
```bash
this.logger.logEvent({name: "My custom event", properties: {customProperty: "custom property value"}});
```

With these steps your application should be up and running with Application Insights. 
