import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'utils/analytics'
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  getThemeVariablesCss,
  THEME_NUMBERS,
  THEME_STORAGE_KEY,
} from 'utils/createTheme'

// Applies the saved (or system-preferred) theme before first paint
const themeScript = `(function(){try{
var saved=Number(localStorage.getItem('${THEME_STORAGE_KEY}'));
var themes=${JSON.stringify(THEME_NUMBERS)};
var light=window.matchMedia('(prefers-color-scheme: light)').matches;
var theme=themes.indexOf(saved)>-1?saved:(light?${DEFAULT_LIGHT_THEME}:${DEFAULT_DARK_THEME});
document.documentElement.dataset.siteTheme=theme;
}catch(e){}})()`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <style
            dangerouslySetInnerHTML={{ __html: getThemeVariablesCss() }}
          />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <link
            rel="preload"
            href="/fonts/plantin/plantin-pro-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/apercu/apercu-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                        page: window.location.pathname
                    });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
