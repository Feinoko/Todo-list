// all functions that serve a cosmetic-only role in UI (anims, fades, etc...), not functional

// adds the class that fades in created element
export function fadeIn() {
  const item = document.querySelector('.list-item:last-child');
  item.className += ' fade-in';
}