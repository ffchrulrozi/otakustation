import { Box, TextField, Paper, Pagination, Tabs, Tab, Typography, Card, CardMedia, CardContent } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LeftBar from "../_/LeftBar";
import { getImg } from "../../util";

// import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export default function Anime() {
    return (
        <>
            <main className="grid grid-cols-6">
                <div className="col-span-1">
                    <LeftBar />
                </div>
                <div className="col-span-5 main">
                    <section>
                        {/* <TopSliderSec /> */}

                        <TopSec />
                    </section>
                    <section className="px-10">
                        <LatestSec />
                    </section>
                    <section className="px-10">
                        <WeeklySec />
                    </section>
                    <section className="px-10">
                        <NewsSec />
                    </section>
                </div>
            </main>
        </>
    )
}

/*
function TopSliderSec() {
    interface IStatex {
        goToSlide: number,
        offsetRadius: number,
        showNavigation: boolean,
        config: any
    }
    const [statex, setStatex] = useState<IStatex>({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    });

    const [slides] = useState([
        {
            key: 0,
            content: <img src="https://picsum.photos/800/801/?random" alt="1" />
        },
        {
            key: 1,
            content: <img src="https://picsum.photos/800/802/?random" alt="2" />
        },
        {
            key: 2,
            content: <img src="https://picsum.photos/600/803/?random" alt="3" />
        },
        {
            key: 3,
            content: <img src="https://picsum.photos/800/500/?random" alt="4" />
        },
        {
            key: 4,
            content: <img src="https://picsum.photos/800/804/?random" alt="5" />
        },
        {
            key: 5,
            content: <img src="https://picsum.photos/500/800/?random" alt="6" />
        }
    ]);

    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            <Carousel
                slides={slides}
                goToSlide={statex.goToSlide}
                offsetRadius={statex.offsetRadius}
                animationConfig={statex.config}
                showNavigation={false}
            />
            <div
                style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div>
                    <button
                        onClick={() => {
                            setStatex({ ...statex, goToSlide: statex.goToSlide - 1 });
                        }}
                    >
                        Left Arrow
                    </button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                        onClick={() => {
                            setStatex({ ...statex, goToSlide: statex.goToSlide + 1 });
                        }}
                    >
                        Right Arrow
                    </button>
                </div>
            </div>
        </div>
    );
}
*/
function TopSec() {
    interface ITop {
        title: string;
        img: string;
        url: string;
    }

    const [tops] = useState<ITop[]>([
        { title: 'Black Clover', url: '/anime/dr-stone', img: 'bc.jpg' },
        { title: 'Shingeki no Kyojin', url: '/anime/dr-stone', img: 'aot.jpg' },
        { title: 'Kuroko no Basuke', url: '/anime/dr-stone', img: 'knb.jpg' },
        { title: 'Chainsaw Man', url: '/anime/dr-stone', img: 'csm.jpg' },
        { title: 'Akame ga Kill', url: '/anime/dr-stone', img: 'agk.jpg' },
        { title: 'Magi', url: '/anime/dr-stone', img: 'magi.jpg' },
        { title: 'Dr. Stone', url: '/anime/dr-stone', img: 'stone.jpg' },
        { title: 'Tate no Yuusha', url: '/anime/dr-stone', img: 'tny.jpg' },
        { title: 'Kimetsu no Yaiba', url: '/anime/dr-stone', img: 'kny.jpg' },
        { title: 'Higehiro', url: '/anime/dr-stone', img: 'higehiro.jpg' },
    ])

    return (
        <>
            <h1>Home</h1>
            <h2>Top Animes</h2>
            <hr />
            <div className="flex gap-5 overflow-x-auto">
                {tops.map((top, topKey) => (
                    <Paper key={topKey} className="flex-shrink-0">
                        <img src={getImg(top.img)} style={{ width: 150, height: 200 }} />
                    </Paper>
                ))}
            </div>
        </>
    )
}

function LatestSec() {
    interface ILatest {
        title: string;
        updatedAt: string;
        img: string;
        subTitle: string;
        url: string;
    }

    const [latests] = useState<ILatest[]>([
        { title: 'Black Clover', url: '/anime/dr-stone', img: 'bc.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Shingeki no Kyojin', url: '/anime/dr-stone', img: 'aot.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Kuroko no Basuke', url: '/anime/dr-stone', img: 'knb.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Chainsaw Man', url: '/anime/dr-stone', img: 'csm.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Akame ga Kill', url: '/anime/dr-stone', img: 'agk.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Magi', url: '/anime/dr-stone', img: 'magi.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Dr. Stone', url: '/anime/dr-stone', img: 'stone.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Tate no Yuusha', url: 'tny.jpg', img: 'tny.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Kimetsu no Yaiba', url: 'kny.jpg', img: 'kny.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
    ])

    return (
        <>
            <h2>Latest Animes</h2>
            <div className='flex justify-center mb-5'>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        background: 'white'
                    }}
                >
                    <TextField fullWidth placeholder="Search..." size="small" />
                </Box>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-5">
                {latests.map((latest, latestKey) => (
                    <Paper key={latestKey} className="flex hover:bg-blue-200" onClick={()=>router.push(latest.url)}>
                        <img src={getImg(latest.img)} style={{ width: 100, height: 125 }} />
                        <div className="px-5 py-2 flex flex-col justify-between">
                            <div>
                                <p className="font-bold text-xl">{latest.title}</p>
                                <p>{latest.subTitle}</p>
                            </div>
                            <p><CalendarMonthIcon className="text-blue-500" /> {latest.updatedAt}</p>
                        </div>
                    </Paper>
                ))}
            </div>
            <div className="flex justify-end">
                <Pagination count={10} color="primary" size="large" variant="outlined" />
            </div>
        </>
    )
}

function WeeklySec() {
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    interface IWeek {
        dayCode: number;
        dayName: string;
        isActive: boolean;
    }

    interface IAnimeDate {
        dayCode: number;
        title: string;
        subTitle: string;
        url: string;
        img: string;
    }

    const [value, setValue] = useState(0);
    const [weeks] = useState<IWeek[]>([
        { dayCode: 0, dayName: 'Sunday', isActive: false },
        { dayCode: 1, dayName: 'Monday', isActive: true },
        { dayCode: 2, dayName: 'Tuesday', isActive: false },
        { dayCode: 3, dayName: 'Wednesday', isActive: false },
        { dayCode: 4, dayName: 'Thursday', isActive: false },
        { dayCode: 5, dayName: 'Friday', isActive: false },
        { dayCode: 6, dayName: 'Saturday', isActive: false },
    ]);
    const [animeDates] = useState<IAnimeDate[]>([
        { dayCode: 0, title: 'Shingeki no Kyojin', subTitle: 'Season 4 episode 01', img: 'aot.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Kuroko no Basuke', subTitle: 'Season 4 episode 01', img: 'knb.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Berserk', subTitle: 'Season 4 episode 01', img: 'berserk.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Slime Datta Ken', subTitle: 'Season 4 episode 01', img: 'slime.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'One Punch Man', subTitle: 'Season 4 episode 01', img: 'opm.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Ajin', subTitle: 'Season 4 episode 01', img: 'ajin.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Konosuba', subTitle: 'Season 4 episode 01', img: 'konosuba.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'High School of The Dead', subTitle: 'Season 4 episode 01', img: 'hsd.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Black Clover', subTitle: 'Season 4 episode 01', img: 'bc.jpg', url: '/anime/dr-stone' },
        { dayCode: 0, title: 'Akame ga Kill', subTitle: 'Season 4 episode 01', img: 'agk.jpg', url: '/anime/dr-stone' },
    ])

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {weeks.map((week, weekIndex) => (
                        <Tab label={week.dayName} {...a11yProps(weekIndex)} key={weekIndex} />
                    ))}
                </Tabs>
            </Box>

            <Box sx={{ p: 3 }} className="grid grid-cols-5 gap-5">
                {animeDates.map((animeDate, animeDateIndex) => (
                    <Card sx={{ maxWidth: 345 }} key={animeDateIndex}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={getImg(animeDate.img)}
                            style={{ maxHeight: 140 }}
                        />
                        <CardContent>
                            <p className="text-lg font-bold">{animeDate.title}</p>
                            <p>{animeDate.subTitle}</p>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <div className="flex justify-end">
                <Pagination count={10} color="primary" size="large" variant="outlined" />
            </div>
        </>
    )
}

function NewsSec() {
    interface INew {
        title: string;
        desc: string;
        img: string;
        url: string;
        updatedAt: string;
    }

    const [news] = useState<INew[]>([
        { title: 'Tensura Scarlet Bond will be released', desc: 'Tempor occaecat qui amet mollit reprehenderit quis officia ea.', img: 'slime.jpg', url: '/anime/dr-stone', updatedAt: '06 Mei' },
        { title: 'Black Clover Serial movie will be published in july', desc: 'Ipsum aute officia labore qui officia ipsum dolor ut ut aute in reprehenderit cupidatat.', img: 'bc.jpg', url: '/anime/dr-stone', updatedAt: '06 Mei' },
        { title: 'Magi has no new season for this anime', desc: 'Dolore officia enim amet culpa magna enim eu duis magna labore id eu commodo sint.', img: 'magi.jpg', url: '/anime/dr-stone', updatedAt: '06 Mei' },
        { title: 'Dr. Stone New World is on going!', desc: 'Labore adipisicing ut ad ea anim.', img: 'stone.jpg', url: '/anime/dr-stone', updatedAt: '06 Mei' },
        { title: 'Boruto anime will be hiatus on episode 45', desc: 'Magna enim eiusmod cillum qui consectetur cillum magna.', img: 'boruto.jpg', url: '/anime/dr-stone', updatedAt: '06 Mei' }
    ])

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                <Card className="col-span-1">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={getImg(news[0].img)}
                        style={{ maxHeight: 400 }}
                    />
                    <CardContent>
                        <p className="text-lg font-bold">{news[0].title}</p>
                        <p>{news[0].desc}</p>
                    </CardContent>
                </Card>
                <div className="col-span-2">
                    <div className="flex flex-col justify-between gap-1" style={{ height: 550 }}>
                        {news.map((newx, newxIndex) => (newxIndex > 0) && (
                            <Paper key={newxIndex} className="flex hover:bg-blue-200">
                                <img src={getImg(newx.img)} style={{ width: 100, height: 125 }} />
                                <div className="px-5 py-2 flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold text-xl">{newx.title}</p>
                                        <p>{newx.desc}</p>
                                    </div>
                                    <p><CalendarMonthIcon className="text-blue-500" /> {newx.updatedAt}</p>
                                </div>
                            </Paper>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}