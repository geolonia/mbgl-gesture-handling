"use strict"

class GestureHandling {
  constructor(options) {
    const defaults = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textColor: '#ffffff',
      textMessage: 'Use [alt] + scroll to zoom the map.',
      timeout: 2000,
    };

    this.settings = {
      ...defaults, ...options
    }

    this.alertBox = document.createElement('div');
    this.alertBox.style.backgroundColor = this.settings.backgroundColor;
    this.alertBox.style.position = 'absolute';
    this.alertBox.style.display = 'none';
    this.alertBox.style.zIndex = 9999;
    this.alertBox.style.justifyContent = 'center';
    this.alertBox.style.alignItems = 'center';

    const textBox = document.createElement('div');
    textBox.style.textAlign = 'center';
    textBox.style.color = this.settings.textColor;
    textBox.innerText = this.settings.textMessage;

    this.alertBox.appendChild(textBox);
    document.body.appendChild(this.alertBox);
  }

  addTo(map) {
    map.scrollZoom.disable();

    const container = map.getContainer();
    const rect = container.getBoundingClientRect();

    this.alertBox.style.top = `${rect.top}px`;
    this.alertBox.style.left = `${rect.left}px`;
    this.alertBox.style.width = `${rect.width}px`;
    this.alertBox.style.height = `${rect.height}px`;

    container.addEventListener('wheel', (event) => {
      if (event.altKey) {
        map.scrollZoom.enable();
      } else {
        this.alertBox.style.display = 'flex';
      }

      setTimeout(() => {
        this.alertBox.style.display = 'none';
        map.scrollZoom.disable();
      }, this.settings.timeout);
    })
  }
}

export default GestureHandling;