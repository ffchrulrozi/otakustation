import { getImg } from "@/util"
import { Avatar, Box, Card, CardContent, CardMedia, Container, List, ListItem, ListItemAvatar, ListItemText, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs } from "@mui/material"
import Paper from '@mui/material/Paper';
import { useState } from "react"
import Footer from "../_/Footer";

export default function AnimeDetail() {
    return (
        <>
            <Container>

                <div className="grid grid-cols-4 gap-5 mb-10">
                    <div className="col-span-1">
                        <LeftInfoSec />
                    </div>
                    <div className="col-span-3">
                        <RightInfoSec />
                    </div>
                </div>

                <section>
                    <PartSec />
                </section>
                <section>
                    <RecommendSec />
                </section>
            </Container>
            <Footer />
        </>
    )
}

function LeftInfoSec() {
    interface IDetail {
        name: string;
        value: string;
    };

    const [details] = useState<IDetail[]>([
        { name: 'Aired', value: 'Nov 2018' },
        { name: 'Status', value: 'On Going' },
        { name: 'Score', value: '8.4' },
        { name: 'Studio', value: 'Mappa' },
        { name: 'Genre', value: 'Adventure, Slice of Life' },
    ]);

    return (
        <>
            <div className="card">
                <img src={getImg('stone.jpg')} alt="" />
            </div>

            <div className="card">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {details.map((detail, detailIndex) => (
                                <TableRow
                                    key={detailIndex}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {detail.name}
                                    </TableCell>
                                    <TableCell align="right">{detail.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

function RightInfoSec() {
    interface IFigure {
        img: string;
        name: string;
        status: string;
    }

    const [figures] = useState<IFigure[]>([
        { name: 'Senku', img: 'stone-senku.jpg', status: 'Officia id aute aute et non exercitation nulla consectetur.' },
        { name: 'Chrome', img: 'stone-chrome.jpg', status: 'Commodo pariatur culpa eiusmod ullamco eu nisi eiusmod consectetur eiusmod reprehenderit.' },
        { name: 'Kohaku', img: 'stone-kohaku.jpg', status: 'Duis velit tempor sunt aliqua dolore eiusmod incididunt.' },
        { name: 'Gen', img: 'stone-gen.jpg', status: 'Excepteur consectetur mollit irure incididunt deserunt adipisicing duis.' },
        { name: 'Tsukasa', img: 'stone-tsukasa.jpg', status: 'Aliqua veniam eu in cupidatat sunt proident et fugiat nostrud aliqua officia dolore.' },
        { name: 'Byakuya', img: 'stone-byakuya.jpg', status: 'Voluptate voluptate non sunt est voluptate.' }
    ]);

    return (
        <>
            <h1 className="font-bold text-3xl mb-10">Nostrud dolore aliquip est commodo laboris ea culpa.</h1>

            <Card className="mb-10">
                <CardContent>
                    <h2 className="font-bold text-xl">Synonim</h2>
                    <hr className="mb-5" />
                    <p>Ullamco ut non eu nulla voluptate Lorem ad tempor labore mollit dolor nisi quis. Aliquip pariatur officia eu nostrud reprehenderit sit deserunt duis ea minim. Nostrud officia sunt occaecat anim laborum dolore.</p>
                    <p>Reprehenderit exercitation Lorem ex quis ullamco dolore ullamco dolore dolore incididunt occaecat. Amet est tempor ut occaecat nostrud consequat dolor esse exercitation ut ea. Eu aliqua magna nulla ut dolore et dolor est dolore sunt sint duis. Pariatur aliqua ea mollit est tempor dolor do ex sint et anim veniam deserunt quis. Quis qui pariatur eiusmod dolor. Aliqua tempor reprehenderit Lorem non.</p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
                {figures.map((figure, figureIndex) => (
                    <div className="col-span-1" key={figureIndex}>
                        <Paper className="flex hover:bg-blue-200">
                            <img src={getImg(figure.img)} style={{ width: '100px', height: 125 }} />
                            <div className="px-5 py-2 flex flex-col justify-between">
                                <div>
                                    <p className="font-bold text-sm">{figure.name}</p>
                                    <p className="text-sm">{figure.status}</p>
                                </div>
                            </div>
                        </Paper>
                    </div>
                ))}
            </div>
        </>
    )
}

function PartSec() {
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    interface IPart {
        index: number;
        name: string;
        isActive: boolean;
    }

    interface IEpisode {
        partId: number;
        name: string;
        img: string;
    }

    const [value, setValue] = useState(0);
    const [parts] = useState<IPart[]>([
        { index: 0, name: 'Season 1', isActive: false },
        { index: 1, name: 'Season 2 Part 1', isActive: true },
        { index: 2, name: 'Season 2 Part 2', isActive: false },
        { index: 3, name: 'Movie: Ryuzui', isActive: false },
        { index: 4, name: 'Season 3', isActive: false }
    ]);
    const [episodes] = useState<IEpisode[]>([
        { partId: 0, name: 'Episode 7', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 6', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 5', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 4', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 3', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 2', img: 'stone.jpg' },
        { partId: 0, name: 'Episode 1', img: 'stone.jpg' }
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
            <h2 className="font-bold text-xl">Watch</h2>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} aria-label="basic tabs example">
                    {parts.map((part, partIndex) => (
                        <Tab label={part.name} {...a11yProps(partIndex)} key={partIndex} />
                    ))}
                </Tabs>
            </Box>

            <Box sx={{ p: 3 }} className="grid grid-cols-5 gap-5">
                {episodes.map((episode, episodeIndex) => (
                    <Card sx={{ maxWidth: 345 }} key={episodeIndex}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={getImg(episode.img)}
                            style={{ maxHeight: 140 }}
                        />
                        <CardContent>
                            <p>{episode.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    )
}

function RecommendSec() {
    interface IRecommend {
        title: string;
        updatedAt: string;
        img: string;
        subTitle: string;
        url: string;
    };

    const [recommends] = useState<IRecommend[]>([
        { title: 'Black Clover', url: '', img: 'bc.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Shingeki no Kyojin', url: '', img: 'aot.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Kuroko no Basuke', url: '', img: 'knb.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Chainsaw Man', url: '', img: 'csm.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Akame ga Kill', url: '', img: 'agk.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' },
        { title: 'Magi', url: '', img: 'magi.jpg', subTitle: 'Season 1 episode 12', updatedAt: '20 August, 20:10' }
    ])
    return (
        <>
            <h2 className="font-bold text-xl">Recommendations</h2>
            <div className="grid grid-cols-3 gap-5 mb-5">
                {recommends.map((recommend, recommendKey) => (
                    <Paper key={recommendKey} className="flex hover:bg-blue-200">
                        <img src={getImg(recommend.img)} style={{ width: 100, height: 125 }} />
                        <div className="px-5 py-2 flex flex-col justify-between">
                            <div>
                                <p className="font-bold text-xl">{recommend.title}</p>
                                <p>{recommend.subTitle}</p>
                            </div>
                        </div>
                    </Paper>
                ))}
            </div>
        </>
    )
}