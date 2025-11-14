import { Highlight } from './highlight';
import { ElementRef } from '@angular/core';

describe('Highlight', () => {
  it('should create an instance', () => {
    const eleRefMock = new ElementRef(document.getElementById('p'));
    const directive = new Highlight(eleRefMock);
    expect(directive).toBeTruthy();
  });
});
