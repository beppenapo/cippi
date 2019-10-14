import { Injectable } from '@angular/core';
import { Script } from '../models/script';

export const ScriptStore: Script[] = [
  {name: 'leafletJs', src: '../assets/leaflet-1.5/leaflet.js', type: 'js'},
  {name: 'leafletCss', src: '../assets/leaflet-1.5/leaflet.css', type: 'css'},
];

declare var document: any;

@Injectable({ providedIn: 'root' })
export class LoadScriptService {
  private scripts: any = {};
  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
        type: script.type
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve) => {
      if (!this.scripts[name].loaded) {
        if (this.scripts[name].type === 'css') {
          const script = document.createElement('link');
          script.rel = 'stylesheet';
          script.href = this.scripts[name].src;
          if (script.readyState) {  // IE
            script.onreadystatechange = () => {
              if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
              }
            };
          } else {
            script.onload = () => {
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            };
          }
          script.onerror = () => resolve({script: name, loaded: false, status: 'Loaded'});
          document.getElementsByTagName('head')[0].appendChild(script);
        } else {
          const script = document.createElement('script');
          script.src = this.scripts[name].src;
          script.charset = 'utf-8';
          if (script.readyState) {  // IE
            script.onreadystatechange = () => {
              if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
              }
            };
          } else {
            script.onload = () => {
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            };
          }
          script.onerror = () => resolve({script: name, loaded: false, status: 'Loaded'});
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}
