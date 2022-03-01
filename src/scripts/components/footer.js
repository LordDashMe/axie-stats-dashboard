import { GLOBAL_VERSION, GLOBAL_YEAR } from '../global';

import '../../styles/components/footer.scss';

export default () => {

    return (
        <div class="atd-footer">
            <div class="atd-footer__copyright content-wrapper">
                <p>© {GLOBAL_YEAR} Axie Stats Dashboard | v{GLOBAL_VERSION}</p>
                <p>Made with <i class="fa-solid fa-heart"></i></p>
                <p>Powered by <a href="https://preactjs.com/" rel="noopener noreferrer" target="_blank">Preact</a> and <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a></p>
            </div>
        </div>
    );
    
};
