import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Plantin MT Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Plantin MT Pro'), url('./plantin/plantin-pro-regular.ttf') format('truetype');
      },
      /* latin */
      @font-face {
        font-family: 'Akkurat Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Akkurat Pro'), url('./akkurat/lineto-akkurat-pro-regular.woff2') format('woff2');
      }
      `}
  />
)
