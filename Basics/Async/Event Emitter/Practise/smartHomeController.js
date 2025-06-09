const { EventEmitter } = require('events');

class SmartHomeController extends EventEmitter {
  constructor() {
    super();
    this.state = {
      lightOn: false,
      doorOpen: false,
      nightMode: false,
      currentTemp: 22,
      alarmTriggered: false
    };
  }

  // for Motion in Room
  detectMotion(room) {
    this.emit('motionDetected', room);
  }

  // For opening Door
  openDoor() {
    this.state.doorOpen = true;
    this.emit('doorOpened');
  }

  // For Change the temperature
  changeTemperature(temp) {
    this.state.currentTemp = temp;
    this.emit('temperatureChange', temp);
  }

  // For Activating night mode
  enableNightMode() {
    this.state.nightMode = true;
    this.emit('nightMode');
  }

  // Print status
  status() {
    console.log("Current Smart Home Status:");
    console.log(this.state);
  }
}

const home = new SmartHomeController();

// Light control
home.on('motionDetected', (room) => {
  home.state.lightOn = true;
  console.log(`Motion detected in ${room}. Light turned ON.`);
});

// Thermostat
home.on('temperatureChange', (temp) => {
  console.log(`Thermostat adjusted to ${temp}°C.`);
});

// Alarm system
function alarmListener() {
  home.state.alarmTriggered = true;
  console.log(`Alarm Triggered! Unauthorized entry detected.`);
}

// Door event logic based on nightMode
// For night mode more security
home.on('doorOpened', () => {
  console.log('🚪 Door opened.');
  if (home.state.nightMode) {
    home.emit('alarmTriggered');
  }
});

home.once('alarmTriggered', alarmListener);

// Night mode activated
home.on('nightMode', () => {
  console.log('🌙 Night mode activated. Security enhanced.');
});

home.detectMotion('Living Room');
home.changeTemperature(25);
home.enableNightMode();
home.openDoor();
home.status();

home.openDoor();
