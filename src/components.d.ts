/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface MyFirstComponent {
    'name': string;
  }
  interface WixMenuTag {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {}
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };

  interface HTMLWixMenuTagElement extends Components.WixMenuTag, HTMLStencilElement {}
  var HTMLWixMenuTagElement: {
    prototype: HTMLWixMenuTagElement;
    new (): HTMLWixMenuTagElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-first-component': HTMLMyFirstComponentElement;
    'wix-menu-tag': HTMLWixMenuTagElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppProfile {
    'name'?: string;
  }
  interface AppRoot {}
  interface MyFirstComponent {
    'name'?: string;
  }
  interface WixMenuTag {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'my-first-component': MyFirstComponent;
    'wix-menu-tag': WixMenuTag;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'my-first-component': LocalJSX.MyFirstComponent & JSXBase.HTMLAttributes<HTMLMyFirstComponentElement>;
      'wix-menu-tag': LocalJSX.WixMenuTag & JSXBase.HTMLAttributes<HTMLWixMenuTagElement>;
    }
  }
}


