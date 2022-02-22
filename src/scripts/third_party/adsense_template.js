import '../../styles/third_party/adsense_template.scss';

export default (props) => {

    return (
        <ins 
            class="adt-adsense adsbygoogle"
            data-ad-client={props.adClient}
            data-ad-slot={props.adSlot}
            data-ad-format={props.adformat}
            data-full-width-responsive={props.fullWidthResponsive}>
        </ins>
    );

};
