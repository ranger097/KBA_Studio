export const menu = $state({ open: false });

export function menu_button() {
  menu.open = !menu.open;

}

