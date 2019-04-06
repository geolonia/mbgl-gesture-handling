"use strict"

let timer;

class GestureHandling {
  constructor(options) {
    this.id = 'mbgl-gesture-handling-help';

    this.settings = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textColor: '#ffffff',
      textMessage: 'Use alt + scroll to zoom the map.',
      textMessageMobile: 'Use two fingers to move the map.',
      timeout: 3000,
      ...options
    };

    this.helpElement = document.querySelector(`#${this.id}`);

    if (null === this.helpElement) {
      this.helpElement = document.createElement('div');
      this.helpElement.id = this.id;
      this.helpElement.style.backgroundColor = this.settings.backgroundColor;
      this.helpElement.style.position = 'absolute';
      this.helpElement.style.display = 'none';
      this.helpElement.style.zIndex = 9999;
      this.helpElement.style.justifyContent = 'center';
      this.helpElement.style.alignItems = 'center';

      const textBox = document.createElement('div');
      textBox.style.textAlign = 'center';
      textBox.style.color = this.settings.textColor;
      textBox.innerText = "";

      this.helpElement.appendChild(textBox);
      document.body.appendChild(this.helpElement);
    }
  }

  showHelp(map, message) {
    const rect = map.getContainer().getBoundingClientRect();
    this.helpElement.style.top = `${rect.top + window.scrollY}px`;
    this.helpElement.style.left = `${rect.left + window.scrollX}px`;
    this.helpElement.style.width = `${rect.width}px`;
    this.helpElement.style.height = `${rect.height}px`;
    this.helpElement.style.display = 'flex';

    this.helpElement.querySelector('div').innerText = message;
  }

  addTo(map) {
    map.scrollZoom.disable();

    this.helpElement.addEventListener('wheel', () => {
      if (event.altKey) {
        this.helpElement.style.display = 'none';
        event.preventDefault()
      } else {
        clearTimeout(timer);

        timer = setTimeout(() => {
          this.helpElement.style.display = 'none';
          map.scrollZoom.disable();
        }, this.settings.timeout);
      }
    });

    map.getContainer().addEventListener('wheel', (event) => {
      if (event.altKey) {
        map.scrollZoom.enable();
      } else {
        this.showHelp(map, this.settings.textMessage);
      }
    });

    map.on('movestart', (event) => {
      if (event.originalEvent && 'touches' in event.originalEvent && event.originalEvent.touches.length >= 2) {
      } else if (event.originalEvent && 'touches' in event.originalEvent) {
        this.showHelp(map, this.settings.textMessageMobile);
        map.dragPan.disable();
        timer = setTimeout(() => {
          map.dragPan.enable();
          this.helpElement.style.display = 'none';
        }, this.settings.timeout);
      }
    });
  }
}

export default GestureHandling;
