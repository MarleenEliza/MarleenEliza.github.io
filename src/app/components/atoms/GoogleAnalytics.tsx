import Script from "next/script";
import { G_ANALYTICS } from "@/app/static/constants";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${G_ANALYTICS}`}
      ></Script>
      <Script id="g-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${G_ANALYTICS}');
        `}
      </Script>
    </>
  );
}
