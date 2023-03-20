import aliveIcon from '../assets/icons/icon-alive.png';
import deadIcon from '../assets/icons/dead.svg';
import unknownIcon from '../assets/icons/unknown.svg';

import { isCharacterStatus } from './typeGuard';

export const getStatusIcon = (status: string) => {
  const statusLowerCase = status.toLowerCase();
  const isValidStatus = isCharacterStatus(statusLowerCase);
  if (isValidStatus) {
    const statusIcon = {
      alive: aliveIcon,
      dead: deadIcon,
      unknown: unknownIcon,
    };
    const res = statusIcon[`${statusLowerCase}`];
    return res;
  }
  return unknownIcon;
};
