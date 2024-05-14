import { Injectable } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})
export class ArduinoMqttService {
  constructor(private mqttService: MqttService) { }

  public leakLevel?: string;

  conectMQTT() {
    this.mqttService.connect();
  }

  postMessage(topic: string, message: string) {
    this.mqttService.publish(topic, message);
  }

  getMessage(topic: string) {
    this.mqttService.observe(topic).subscribe((message: IMqttMessage) => {
      this.leakLevel = message.payload.toString();
    });
  }
}
