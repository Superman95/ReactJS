import {TOGGLE_SIDEBAR} from '../constants';

/**
 * action which toggles sidebar
 * @returns {{type: string}}
 */
export function toggle() {
  return {
    type: TOGGLE_SIDEBAR
  };
}
