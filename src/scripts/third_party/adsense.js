import { useEffect } from "preact/hooks";

export default () => {

    useEffect(() => {

        if (typeof window !== 'undefined' && ! window.adsbygoogle) {

            (window.adsbygoogle = window.adsbygoogle || []).push({});

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            document.body.appendChild(script);
        }

    });

};
