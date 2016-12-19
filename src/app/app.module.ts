import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// our app Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Include our TeslaBatteryModule
    TeslaBatteryModule
  ],
  providers: [],
  // bootstrap the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule {}