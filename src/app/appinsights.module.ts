import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppInsightsService } from './appinsights.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  exports: [],
  providers: [AppInsightsService],
  bootstrap: []
})
export class AppInsightsModule {

  static forRoot(instrumentationKey: string): ModuleWithProviders {
    return {
      ngModule: AppInsightsModule,
      providers: [AppInsightsService, { provide: 'instrumentationKey', useValue: instrumentationKey }]
    };
  }
}