import { h } from 'preact';

import '../../styles/components/footer.scss';

export default () => {

    return (
        <div class="at-footer">
            <div class="at-footer__copyright content-wrapper">
                <p>© 2022 Axie Tracker Dashboard | v0.0.1</p>
                <p>Made with <i class="fa-solid fa-heart"></i></p>
                <p>Powered by <a href="https://preactjs.com/" rel="noopener noreferrer" target="_blank">Preact</a> and <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a></p>
            </div>
        </div>
    );
    
};
