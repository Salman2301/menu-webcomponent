import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wix-menu-tag',
  styleUrl: 'menu-tag.css',
  shadow: true
})
export class MenuTag {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
