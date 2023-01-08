import {Component} from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})
export class SidePanelComponent {

  mousedown($event: MouseEvent, panel: HTMLDivElement) {
    this.handleDrag(panel, $event.clientY, new MouseEventAdapter());
  }

  touchstart($event: TouchEvent, panel: HTMLDivElement) {
    this.handleDrag(panel, $event.touches[0].clientY, new TouchEventAdapter());
  }

  pointerDown($event: PointerEvent, panel: HTMLDivElement) {
    this.handleDrag(panel, $event.clientY, new PointerEventAdapter());
  }

  handleDrag(panel: HTMLDivElement, y: number, $event: EventAdapter) {
    const startHeight = panel.clientHeight;
    const handler = (event: MouseEvent | TouchEvent) => {
      panel.style.height = "0";
      const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      panel.style.height = (y - clientY + startHeight) + "px";
    };

    const subscriptionMove = $event.listenMove(window, (clientY) => {
      panel.style.height = "0";
      panel.style.height = (y - clientY + startHeight) + "px";
    })
    const subscriptionUp = $event.listenUp(window, () => {
      subscriptionMove.unsubscribe();
      subscriptionUp.unsubscribe();
      subscriptionLeave.unsubscribe();
    });
    const subscriptionLeave = $event.listenLeave(window, () => {
      subscriptionUp.unsubscribe();
      subscriptionMove.unsubscribe();
      subscriptionLeave.unsubscribe();
    });
  }

  beginDrag($event: DragEvent, panel: HTMLDivElement, handler: HTMLDivElement) {
    const startHeight = panel.clientHeight;
    const handlerMethod = (event: DragEvent) => {
      panel.style.height = "0";
      const clientY = event.clientY;
      panel.style.height = ($event.clientY - clientY + startHeight) + "px";
    };
    const removeHandler = () => {
      handler.removeEventListener("drag", handlerMethod);
      handler.removeEventListener("dragend", removeHandler);
    }

    handler.addEventListener("drag", handlerMethod);
    handler.addEventListener("dragend", removeHandler);
  }
}

abstract class EventAdapter {

  abstract listenMove(element: Window, handler: (y: number) => void): { unsubscribe: () => void };

  abstract listenUp(element: Window, handler: (y: number) => void): { unsubscribe: () => void };

  abstract listenLeave(element: Window, handler: (y: number) => void): { unsubscribe: () => void };
}

class TouchEventAdapter extends EventAdapter {

  listenLeave(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const f = (event: TouchEvent) => handler(event.touches[0].clientY);
    element.addEventListener('touchmove', f);

    return {
      unsubscribe: () => {
        element.removeEventListener('touchcancel', f);
      }
    };
  }

  listenMove(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const f = (event: TouchEvent) => handler(event.touches[0].clientY);

    return {
      unsubscribe: () => {
        element.removeEventListener('touchmove', f);
      }
    };
  }

  listenUp(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const f = (event: TouchEvent) => handler(event.touches[0].clientY);
    return {
      unsubscribe: () => {
        element.removeEventListener('touchend', f);
      }
    };
  }
}

class MouseEventAdapter extends EventAdapter {

    listenLeave(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
      const f = (event: MouseEvent) => handler(event.clientY);
      element.addEventListener('mouseleave', f);

      return {
        unsubscribe: () => {
          element.removeEventListener('mouseleave', f);
        }
      };
    }

    listenMove(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
      const f = (event: MouseEvent) => handler(event.clientY);
      element.addEventListener('mousemove', f);

      return {
        unsubscribe: () => {
          element.removeEventListener('mousemove', f);
        }
      };
    }

    listenUp(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
      const f = (event: MouseEvent) => handler(event.clientY);
      element.addEventListener('mouseup', f);

      return {
        unsubscribe: () => {
          element.removeEventListener('mouseup', f);
        }
      };
    }
}

class PointerEventAdapter extends EventAdapter {

  listenLeave(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const f = (event: PointerEvent) => handler(event.clientY);
    element.addEventListener('pointerleave', f);

    return {
      unsubscribe: () => {
        element.removeEventListener('pointerleave', f);
      }
    };
  }

  listenMove(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const fMouse = (event: MouseEvent) => handler(event.clientY);
    element.addEventListener('mousemove', fMouse);

    const fTouch = (event: TouchEvent) => handler(event.touches[0].clientY);
    element.addEventListener('touchmove', fTouch);

    return {
      unsubscribe: () => {
        element.removeEventListener('mousemove', fMouse);
        element.removeEventListener('touchmove', fTouch);
      }
    };
  }

  listenUp(element: Window, handler: (y: number) => void): { unsubscribe: () => void } {
    const f = (event: PointerEvent) => handler(event.clientY);
    element.addEventListener('pointerup', f);

    return {
      unsubscribe: () => {
        element.removeEventListener('pointerup', f);
      }
    };
  }
}
