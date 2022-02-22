import { useEffect } from 'preact/hooks';

export default (props) => {

    useEffect(() => {

        if (typeof window !== 'undefined' && ! window.dataLayer) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.googletagmanager.com/gtag/js?id=' + props.trackingId;
            document.body.appendChild(script);
        } 
    
        const pageViewCall = () => {
    
            if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined' && window.dataLayer) {
    
                // Reference: 
                //  - https://developers.google.com/analytics/devguides/collection/gtagjs
                //  - https://developers.google.com/analytics/devguides/collection/gtagjs/pages
                //  - https://developers.google.com/analytics/devguides/collection/gtagjs/migration
                window.gtag = function () { window.dataLayer.push(arguments); };
                window.gtag('js', new Date());
                window.gtag('config', props.trackingId, { 
                    'send_page_view': true,
                    'page_path': window.document.location.pathname
                });
    
            } else {
    
                // We used setTimeout in order to have a pause (1000 = 1s) time 
                // before calling again the pageViewCall.
                setTimeout(pageViewCall, 1000);
            }
    
        };
    
        if (typeof window !== 'undefined') {
            pageViewCall();
        }

    });
    
};
