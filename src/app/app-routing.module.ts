import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';

// const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: 'IP_DO_SERVIDOR_MQTT',
//   port: 4200,
//   username: 'NOME_DE_USUARIO_MQTT',
//   password: 'SENHA_MQTT',
// };

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
