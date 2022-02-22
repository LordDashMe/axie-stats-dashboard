import { h } from 'preact';

import '../../styles/components/card.scss';

export default (props) => {

    return (
        <div class="atd-card">
            {props.children}
        </div>
    );
    
};
