import bell_icon from './bell.png'
import spotify_home from './spotify_home.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import browser from './browser.png'
import install_icon from './install_icon.png'
import search_icon from './search.png'
import notifation from './notifation.png'
import user from './user.jpg'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'

import trending_now_india_poster from './album/Trending Now India.jpg'
import lofi_beats from './album/lofi_beats.jpg'
import All_Out_2020s from './album/All Out 2020s.jpg'
import Car_driving from './album/Car driving.jpg'
import Trending_Valentine_hits from './album/Trending Valentine hits.jpg'
import karan_Aujia from './album/karan Aujia.jpg'


import Haan_Ke_Haan from './songs/Haan Ke Haan.mp3'
import Haan_Ke_Haan_poster from './songs/Haan_ke_Haan_Poster.jpg'
import Softly from './songs/Softly.mp3'
import Softly_poster from './songs/Softly_poster.jpg'
import Jo_Tum_Mere_Ho from './songs/Jo Tum Mere Ho.mp3'
import jo_tum_poster from './songs/jo_tum_poster.jpg'
import ye_raaten from './songs/Yeh Raaten.mp3'
import ye_raaten_poster from './songs/ye-raaten_poster.jpg'
import Main_koi from './songs/Main_koi.mp3'
import Main_koi_poster from './songs/Main_koi_poster.jpg'
import Sajni from './songs/Sajni.mp3'
import Sajni_poster from './songs/sajni_poster.jpg'
import Tauba_Tauba from './songs/Tauba Tauba.mp3'
import Tauba_Tauba_poster from './songs/Tauba_Tauba_poster.jpg'
import Tu_Hai_Kahan from './songs/Tu Hai Kahan.mp3'
import Tu_hai_kahan_poster from './songs/Tu_hai_kahan_poster.jpg'
import Laal_Ishq from './songs/Laal Ishq.mp3'
import Laal_Ishq_poster from './songs/Laal_Ishq_poster.jpg'
import Millionaire from './songs/Millionaire.mp3'
import Millionaire_poster from './songs/Millionaire_poster.jpg'
import Oonchi_Oonchi_Deewarein from './songs/Oonchi Oonchi Deewarein.mp3'
import Oonchi_Oonchi_Deewarein_Poster from './songs/Oonchi_Oonchi_poster.jpg'
import Kalank from './songs/Kalank.mp3'
import kalank_poster from './songs/kalank_poster.jpg'
import GOAT from './songs/GOAT.mp3'
import GOAT_poster from './songs/GOAT_Poster.jpg'

export const assets = {
    bell_icon,
    spotify_home,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    browser,
    install_icon,
    search_icon,
    notifation,
    user,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Trending Now India",
        image: trending_now_india_poster,
        desc:"Every track you're listening/should be listening to ;) Cover- Stree 2",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Lofi beats",
        image: lofi_beats,
        desc:"chill beats, lofi vibes, new tracks every weeks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "All Out 2020s",
        image: All_Out_2020s,
        desc:"The biggest songs of the 2020s. Cover: Doja Cat",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Car Driving",
        image: Car_driving,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Valentine's hits,",
        image: Trending_Valentine_hits,
        desc:"India's Ultimate Love Playlist. Cover- Rajkummar Rao & Janhvi Kapoor",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "This is karan Aujla",
        image: karan_Aujia,
        desc:"This is Karan Aujla. The essential tracks, all in one playlist.",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Haan Ke Haan",
        image: Haan_Ke_Haan_poster,
        file: Haan_Ke_Haan,
        desc:"Sohail Sen",
        duration:"3:24"
    },
    {
        id:1,
        name: "Softly",
        image: Softly_poster,
        file: Softly,
        desc:"Karan Aujla",
        duration:"2:34"
    },
    {
        id:2,
        name: "Jo Tum Mere Ho",
        image: jo_tum_poster,
        file: Jo_Tum_Mere_Ho,
        desc:"Anuv Jain",
        duration:"4:15"
    },
    {
        id:3,
        name: "Yeh Raaten Yeh Mausam",
        image: ye_raaten_poster,
        file: ye_raaten,
        desc:"Sanam, Siddharth-Garima",
        duration:"3:27"
    },
    {
        id:4,
        name: "Main Koi Aisa Geet Gaoon",
        image: Main_koi_poster,
        file: Main_koi,
        desc: "Abhijeet, Alka Yagnik",
        duration:"5:22"
    },
    {
        id:5,
        name: "Sajni",
        image: Sajni_poster,
        file: Sajni,
        desc:"Ram Sampath,Arijit Singh",
        duration:"2:49"
    },
    {
        id:6,
        name: "Tauba Tauba",
        image: Tauba_Tauba_poster,
        file: Tauba_Tauba,
        desc:"Karan Aujla",
        duration:"3:30"
    },
    {
        id:7,
        name: "Tu Hai Kahan",
        image: Tu_hai_kahan_poster,
        file: Tu_Hai_Kahan,
        desc:"AUR",
        duration:"4:23"
    },
    {
        id:8,
        name: "Laal Ishq",
        image: Laal_Ishq_poster,
        file: Laal_Ishq,
        desc:"Arijit Singh",
        duration:"6:26"
    },
    {
        id:9,
        name: "Millionaire",
        image: Millionaire_poster,
        file: Millionaire,
        desc:"Honey Singh",
        duration:"3:19"
    },
    {
        id:10,
        name: "Kalank",
        image: kalank_poster,
        file: Kalank,
        desc:"Pritam, Arijit Singh",
        duration:"5:11"
    },
    {
        id:11,
        name: "Oonchi Oonchi Deewarein",
        image: Oonchi_Oonchi_Deewarein_Poster,
        file: Oonchi_Oonchi_Deewarein,
        desc:"Manan Bhardwaj",
        duration:"4:11"
    },
    {
        id:12,
        name: "G.O.A.T",
        image: GOAT_poster,
        file: GOAT,
        desc:"Manan Bhardwaj",
        duration:"3:43"
    }
]