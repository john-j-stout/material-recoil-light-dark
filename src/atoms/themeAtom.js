import { atom } from 'recoil';

import { defaultTheme } from '../theme';

const themeAtom = atom({
  key: 'applicationTheme',
  default: defaultTheme,
});

export default themeAtom;
