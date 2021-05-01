import React from 'react'
import { Global } from '@emotion/react'

import plantinRegular from '../static/plantin/plantin-pro-regular.ttf'
import apercuRegular from '../static/apercu/apercu-regular-pro.otf'
import apercuMedium from '../static/apercu/apercu-medium-pro.otf'
import apercuBold from '../static/apercu/apercu-bold-pro.otf'

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Plantin MT Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${plantinRegular}) format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Apercu Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${apercuRegular}) format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'Apercu Pro';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url(${apercuMedium}) format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'Apercu Pro';
        font-style: bold;
        font-weight: 600;
        font-display: swap;
        src: url(${apercuBold}) format('opentype');
      }
      `}
  />
)
