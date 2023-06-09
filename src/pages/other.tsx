import { AppBar, Avatar, Badge, Box, Card, CardActionArea, CardContent, CardMedia, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, List, ListItem, ListItemAvatar, ListItemText, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'

export default function Home() {
  interface ITop {
    title: string;
    rating: number;
    voterTotal: number;
    img: string;
  }

  interface ILatest {
    title: string;
    img: string;
    url: string;
  }

  interface INew {
    title: string;
    url: string;
    img: string;
    mindesc: string;
  }

  const [tops] = useState<ITop[]>([
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' },
    { title: 'Naruto', rating: 8, voterTotal: 10, img: '' }
  ]);

  const [latests] = useState<ILatest[]>([
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
    { title: 'Asd', img: '', url: '' },
  ])

  const [infos] = useState<INew[]>([
    {
      title: 'Ad do eiusmod sunt aliqua laboris quis dolor aute reprehenderit aliquip duis dolor culpa.',
      mindesc: 'Tempor voluptate voluptate cillum labore officia sunt cillum esse eu nisi.',
      img: 'asd',
      url: ''
    },
    {
      title: 'Ad do eiusmod sunt aliqua laboris quis dolor aute reprehenderit aliquip duis dolor culpa.',
      mindesc: 'Tempor voluptate voluptate cillum labore officia sunt cillum esse eu nisi.',
      img: 'asd',
      url: ''
    },
    {
      title: 'Ad do eiusmod sunt aliqua laboris quis dolor aute reprehenderit aliquip duis dolor culpa.',
      mindesc: 'Tempor voluptate voluptate cillum labore officia sunt cillum esse eu nisi.',
      img: 'asd',
      url: ''
    },
    {
      title: 'Ad do eiusmod sunt aliqua laboris quis dolor aute reprehenderit aliquip duis dolor culpa.',
      mindesc: 'Tempor voluptate voluptate cillum labore officia sunt cillum esse eu nisi.',
      img: 'asd',
      url: ''
    },
    {
      title: 'Ad do eiusmod sunt aliqua laboris quis dolor aute reprehenderit aliquip duis dolor culpa.',
      mindesc: 'Tempor voluptate voluptate cillum labore officia sunt cillum esse eu nisi.',
      img: 'asd',
      url: ''
    }
  ]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <section className="cover">
          <div className='flex justify-between py-5 px-20 bg-blue-400'>
            <div className='flex gap-10'>
              <p>Anime</p>
              <p>Manga</p>
            </div>
            <div>LOGIN</div>
          </div>
        </section>
        <section className="px-32 grid grid-cols-6">
          <div className="col-span-1">
            <Card className="p-5">
              <FormGroup>
                <FormLabel id="demo-radio-buttons-group-label">Genres</FormLabel>
                <FormControlLabel control={<Checkbox />} label="Action" />
                <FormControlLabel control={<Checkbox />} label="Adventure" />
                <FormControlLabel control={<Checkbox />} label="Comedy" />
                <FormControlLabel control={<Checkbox />} label="Drama" />
                <FormControlLabel control={<Checkbox />} label="Fantasy" />
                <FormControlLabel control={<Checkbox />} label="Horror" />
                <FormControlLabel control={<Checkbox />} label="Isekai" />
                <FormControlLabel control={<Checkbox />} label="Mystery" />
                <FormControlLabel control={<Checkbox />} label="School" />
                <FormControlLabel control={<Checkbox />} label="Sci-Fi" />
                <FormControlLabel control={<Checkbox />} label="Supernatural" />
              </FormGroup>
            </Card>
          </div>
          <div className="col-span-5 px-5">
            <div className='flex justify-center'>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  background: 'white'
                }}
              >
                <TextField fullWidth placeholder="Search..." />
              </Box>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {latests.map((latest, latestKey) => (
                <Card sx={{ maxWidth: 345 }} key={latestKey}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/assets/img/box.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <p>Black Clover</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className='px-32'>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              {infos.map((info, infoKey) => infoKey == 0 ? (
                <Card className='grid grid-cols-5 mb-5' key={infoKey}>
                  <div className='col-span-2'>
                    <div style={{ background: 'red', width: '100%', height: 300 }}></div>
                  </div>
                  <div className="col-span-3">
                    In eiusmod incididunt aliqua fugiat eu enim aute.
                  </div>
                </Card>
              ) : (
                <Card className='grid grid-cols-5 mb-5' key={infoKey}>
                  <div className='col-span-1'>
                    <div style={{ background: 'red', width: '100%', height: 150 }}></div>
                  </div>
                  <div className="col-span-4">
                    In eiusmod incididunt aliqua fugiat eu enim aute.
                  </div>
                </Card>
              ))}
            </div>
            <div className="col-span-1">
              Viral
              <Card className='top-anime'>
                <h2>10 Top Anime</h2>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {tops.map((top, topKey) => (
                    <ListItem alignItems="flex-start" key={topKey}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                          <>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>

            </div>
          </div>
        </section >
        <footer></footer>
      </main >
    </>
  )
}
