import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})
export class SidePanelComponent {

  mousedown($event: MouseEvent, panel: HTMLDivElement) {
    const startHeight = panel.clientHeight;
    const handler = (event: MouseEvent) => {
      panel.style.height = "0";
      panel.style.height = ($event.clientY - event.clientY + startHeight) + "px";
    };
    const removeHandler = (event: MouseEvent) => {
      window.removeEventListener('mousemove', handler);
      window.removeEventListener('mouseup', removeHandler);
      window.removeEventListener('mouseleave', removeHandler);
    }
    window.addEventListener('mousemove', handler);
    window.addEventListener('mouseup', removeHandler);
    window.addEventListener('mouseleave', removeHandler);
  }
}
