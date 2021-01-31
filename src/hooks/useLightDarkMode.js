import { useRecoilState } from 'recoil';

import { themeAtom } from '../atoms';
import { darkTheme, lightTheme } from '../theme';

const useLightDarkMode = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleLightDarkMode = () => {
    const isLightMode = theme.palette.type === 'light';

    const updatedTheme = {
      ...theme,
      palette: isLightMode ? darkTheme.palette : lightTheme.palette,
    };

    setTheme(updatedTheme);
  };

  return [theme.palette.type, toggleLightDarkMode];
};

export default useLightDarkMode;
