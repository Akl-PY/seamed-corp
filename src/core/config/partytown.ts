// src/config/partytown.config.ts

import type { PartytownOptions } from "@astrojs/partytown";
import type { PartytownConfig } from '@qwik.dev/partytown/integration';

export const partytownConfig: {config:  PartytownConfig } = {
  config: {

    forward: [
      ["dataLayer.push"],
      ["fbq"],
    ],
    

    resolveUrl: (url: URL) => {
      if (url.hostname === "connect.facebook.net") {
        const proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api");
        proxyUrl.searchParams.append("url", url.href);
        return proxyUrl;
      }

      if (url.hostname === "www.googletagmanager.com") {
        return new URL(
          `/proxy-gtm${url.pathname}${url.search}`,
          "https://www.aim.com.ar"
        );
      }

      return url;
    },
  },
};