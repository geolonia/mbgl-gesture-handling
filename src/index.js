"use strict"

let timer;

class GestureHandling {
  constructor(options) {
    this.settings = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textColor: '#ffffff',
      textMessage: 'Use alt + scroll to zoom the map.',
      timeout: 100,
      ...options
    };

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

    this.alertBox.addEventListener('wheel', () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        this.alertBox.style.display = 'none';
        map.scrollZoom.disable();
      }, this.settings.timeout);
    });

    map.getContainer().addEventListener('wheel', (event) => {
      if (event.altKey) {
        this.alertBox.style.display = 'none';
        map.scrollZoom.enable();
      } else {
        const rect = map.getContainer().getBoundingClientRect();
        this.alertBox.style.top = `${rect.top + window.scrollY}px`;
        this.alertBox.style.left = `${rect.left + window.scrollX}px`;
        this.alertBox.style.width = `${rect.width}px`;
        this.alertBox.style.height = `${rect.height}px`;
        this.alertBox.style.display = 'flex';
      }
    })
  }
}

export default GestureHandling;
