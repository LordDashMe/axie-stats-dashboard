import { h } from 'preact';
import { useState, useEffect } from 'preact/compat';
import { convertCommaSeparatedNumber, getUrlQueryParameter } from '../global';

import Gtag from '../third_party/gtag';
import AdsenseAuto from '../third_party/adsense_auto';
import Background from '../components/background';
import Card from '../components/card';
import Stats, { StatsMetric } from '../components/stats';
import Footer from '../components/footer';

import '../../styles/third_party/font-awesome-6.0.0/font_awesome.scss';
import '../../styles/pages/home.scss';

export default () => {

    let roninAddress = '';

    const [stats, setStats] = useState({
        roninAddress: '',
        current_slp: 0,
        name: 'N/A',
        leaderboard_rank: 0,
        elo_rating: 0
    });

    useEffect(() => {

        const queryParamId = getUrlQueryParameter('id', window.location.href);

        if (queryParamId) {
            
            roninAddress = queryParamId.replace('ronin:', '0x');

            const handleStatsChange = (newStats) => {
                
                setStats(
                    (prevStats) => {
                        return {...prevStats, ...newStats}
                    }
                );

            };

            handleStatsChange({
                roninAddress: roninAddress
            });

            fetch(`https://game-api.axie.technology/slp/${roninAddress}`).then((response) => {

                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(false);

            }).then((json) => {

                handleStatsChange({
                    current_slp: json[0].total || 0
                });

            }).catch(() => {

                console.error('Axie API for SLP is not working.');

            });

            fetch(`https://game-api.axie.technology/mmr/${roninAddress}`).then((response) => {

                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(false);

            }).then((json) => {

                handleStatsChange({
                    leaderboard_rank: json[0].items[0].rank || 0,
                    elo_rating: json[0].items[0].elo || 0
                });

            }).catch(() => {

                console.error('Axie API for MMR is not working.');

            });
        }

    }, []);

    return (
        <>
        <Background>
            <div class="atd-home">
                <div class="atd-home-content content-wrapper content-padding">
                    <Card>
                        <h1 class="atd-home-title">Axie Stats Dashboard</h1>
                        <p class="atd-home-description">A simplified dashboard for your Axie Infinity stats.</p>
                        <div class="atd-home-axie-watermark-1" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"></div>
                        <div class="atd-home-axie-watermark-2" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"></div>
                        <p class="atd-home-ronin-address">Your <img alt="ronin" width="30px" height="30px" src="https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa82e3e99-37f2-4262-95f3-c36d83433874_512x512.png"></img>onin Address is <a href={'https://explorer.roninchain.com/address/' + stats.roninAddress} target="_blank">{stats.roninAddress}</a></p>
                        <h2 class="atd-home-sub-title">Account Stats</h2>
                        <Stats>
                            <StatsMetric label="Current SLP" value={convertCommaSeparatedNumber(stats.current_slp)}>
                                <i class="fa-solid fa-flask"></i> 
                            </StatsMetric>
                        </Stats>
                        <h2 class="atd-home-sub-title">Battle Stats - V2</h2>
                        <Stats>
                            <StatsMetric label="Elo Rating (MMR)" value={convertCommaSeparatedNumber(stats.elo_rating)}>
                                <i class="fa-solid fa-shield"></i> 
                            </StatsMetric>
                            <StatsMetric label="Leaderboard Rank" value={convertCommaSeparatedNumber(stats.leaderboard_rank)}>
                                <i class="fa-solid fa-trophy"></i> 
                            </StatsMetric>
                        </Stats>
                        <h2 class="atd-home-sub-title">Battle Stats - Origin</h2>
                        <p class="atd-home-sub-description">Coming Soon...</p>
                        <p class="atd-home-remarks"><i>*Above details are live data.</i></p>
                    </Card>
                </div>
                <Footer />
                <Gtag trackingId="UA-128894279-1" />
                <AdsenseAuto adClient="ca-pub-3427694918014398" />
            </div>
        </Background>
        </>
    );
    
};
