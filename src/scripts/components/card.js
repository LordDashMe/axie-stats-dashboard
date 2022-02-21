import { h } from 'preact';

import '../../styles/components/card.scss';

export default (props) => {

    return (
        <div class="at-card">
            {props.children}
        </div>
    );
    
};
