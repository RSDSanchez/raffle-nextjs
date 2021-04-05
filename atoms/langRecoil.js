import { atom } from 'recoil';

export const langState = atom({
  key: 'lang',
  deafult: '',
});

export const isStore = atom({
  key: 'isStore',
  deafult: false,
});
