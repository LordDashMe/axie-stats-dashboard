import { useEffect } from 'preact/hooks';

export default (props) => {

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.crossOrigin = 'anonymous'
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + props.adClient;
            document.body.appendChild(script);
        }

    });

};
