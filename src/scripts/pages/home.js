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

    const [stats, setStats] = useState({
        total_slp_earned: 0,
        name: 'N/A',
        leaderboard_rank: 0,
        elo_rating: 0
    });

    useEffect(() => {

        const queryParamId = getUrlQueryParameter('id', window.location.href);

        if (queryParamId) {
            
            const roninAddress = queryParamId.replace('ronin:', '0x');
        

            const handleStatsChange = (newStats) => {
                
                setStats(
                    (prevStats) => {
                        return {...prevStats, ...newStats}
                    }
                );

            };

            fetch(`https://game-api.axie.technology/slp/${roninAddress}`).then((response) => {

                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(false);

            }).then((json) => {

                handleStatsChange({
                    total_slp_earned: json[0].total || 0
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
                    name: json[0].items[1].name || 'N/A',
                    leaderboard_rank: json[0].items[1].rank || 0,
                    elo_rating: json[0].items[1].elo || 0
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
                        <h2 class="atd-home-sub-title">Account Stats</h2>
                        <Stats>
                            <StatsMetric label="SLP Earned" value={convertCommaSeparatedNumber(stats.total_slp_earned)}>
                                <i class="fa-solid fa-flask"></i> 
                            </StatsMetric>
                        </Stats>
                        <h2 class="atd-home-sub-title">Battle Stats</h2>
                        <Stats>
                            <StatsMetric label="Name" value={stats.name}>
                                <i class="fa-solid fa-address-card"></i> 
                            </StatsMetric>
                            <StatsMetric label="Elo Rating (MMR)" value={convertCommaSeparatedNumber(stats.elo_rating)}>
                                <i class="fa-solid fa-shield"></i> 
                            </StatsMetric>
                            <StatsMetric label="Leaderboard Rank" value={convertCommaSeparatedNumber(stats.leaderboard_rank)}>
                                <i class="fa-solid fa-trophy"></i> 
                            </StatsMetric>
                        </Stats>
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
