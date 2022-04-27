import '../../styles/components/stats.scss';

export const StatsMetric = (props) => {

    return (
        <div class="atd-stats-metric">
            {props.children}
            <h3 class="atd-stats-metric__label">{props.label}</h3>: <p class="atd-stats-metric__value">{props.value}</p>
        </div>
    );

} 

export default (props) => {

    return (
        <div class="atd-stats">{props.children}</div>
    );
    
};
