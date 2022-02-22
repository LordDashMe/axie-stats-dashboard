import { h } from 'preact';
import { useState, useEffect } from 'preact/compat';

import { convertCommaSeparatedNumber, getUrlQueryParameter } from '../global';

import Gtag from '../third_party/gtag';
import AdsenseAuto from '../third_party/adsense_auto';

import Background from '../components/background';
import Card from '../components/card';
import Stats from '../components/stats';
import Footer from '../components/footer';

import '../../styles/third_party/font-awesome-6.0.0/font_awesome.scss';

import '../../styles/pages/home.scss';

export default () => {

    const [stats, setStats] = useState({
        total_slp_earned: 0,
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
                        <h1 class="atd-home-title">Axie Tracker Dashboard</h1>
                        <p class="atd-home-description">A simplified dashboard for your axie account stats.</p>
                        <p class="atd-home-description">Other features coming soon!</p>
                        <div class="atd-home-axie-watermark-1" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"></div>
                        <div class="atd-home-axie-watermark-2" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"></div>
                        <Stats 
                            total_slp_earned={convertCommaSeparatedNumber(stats.total_slp_earned)}
                            leaderboard_rank={convertCommaSeparatedNumber(stats.leaderboard_rank)} 
                            elo_rating={convertCommaSeparatedNumber(stats.elo_rating)} 
                        />
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
