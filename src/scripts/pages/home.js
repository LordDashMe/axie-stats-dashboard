import { h } from 'preact';
import { useState, useEffect } from 'preact/compat';

import Card from '../components/card';
import Stats from '../components/stats';
import Footer from '../components/footer';

import { convertCommaSeparatedNumber } from '../global';

import '../../styles/third_party/font-awesome-6.0.0/font-awesome';

import '../../styles/pages/home.scss';

export default (props) => {

    const [stats, setStats] = useState({
        total_slp_earned: 0,
        leaderboard_rank: 0,
        elo_rating: 0
    });

    useEffect(() => {

        let roninAddress = props.roninAddress.replace('ronin:', '0x');

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

    }, []);

    return (
        <div class="at-home">
            <div class="content-wrapper content-padding">
                <Card>
                    <h1>Axie Tracker Dashboard</h1>
                    <p>A simplified dashboard for your axie account stats.</p>
                    <div class="at-axie-watermark-1" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"></div>
                    <div class="at-axie-watermark-2" style="background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"></div>
                    <Stats 
                        total_slp_earned={convertCommaSeparatedNumber(stats.total_slp_earned)}
                        leaderboard_rank={convertCommaSeparatedNumber(stats.leaderboard_rank)} 
                        elo_rating={convertCommaSeparatedNumber(stats.elo_rating)} 
                    />
                </Card>
            </div>
            <Footer />
        </div>
    );
    
};
