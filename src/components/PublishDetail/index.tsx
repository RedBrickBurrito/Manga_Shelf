import * as React from 'react';
import './index.css';
import { Button, Grid, Typography } from "@material-ui/core";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import Manga from '../../types/Manga'
import Review from '../../types/Review'
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface PublishDetailProps {
    mangas: Manga[]; 
    userId: number;    
    mangaId: number;    
    description: string;
    rate: number;
    date: string;
    onDescriptionChange(event: any): void;
    onSubmit(event: any, manga:Manga): void;
    onRateChange(event: any): void;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'transparent',
      border: '1px solid #DCDCDC',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#DCDCDC',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

/**
 * Review Detail elements
 * @returns ProductPreview UI elements
 */

const PublishDetail: React.FC<PublishDetailProps> = (props) => {

    const [manga, setManga] = React.useState({} as Manga);
    const [rate, setRate] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setManga(findManga(event.target.value));
        
      };

      const handleChangeRate = (event: SelectChangeEvent) => {
        setRate(event.target.value as string);
        props.onRateChange(event);
      };

      const findManga = (title:string) : Manga =>{
        const result = props.mangas.find(manga => {
            return manga.title === title
          })
          return result as Manga;
      }

      var mangas: any[] = [];

      props.mangas.forEach((manga) => {
        mangas.push(<MenuItem value={manga.title}>{manga.title}</MenuItem>)
      }); 

      
      

    return (
        <div className="PublishScreen">
            <Grid container className="publish-screen-grid" spacing={2} >
                <Grid container item lg={12} className="titleTextGrid" direction="row" justifyContent="center">
                    <Typography className="titleText">
                        Review
                    </Typography>
                </Grid>
                <Grid container item lg={12} className="textGridOne" direction="row">
                    <Typography className="constText">
                        Manga to review
                    </Typography>
                        <Select
                            labelId="select-label"
                            id="manga-select"
                            value={manga.title}
                            input={<BootstrapInput/>}
                            onChange={handleChange}
                        >
                            <MenuItem><em>None</em></MenuItem>
                            {mangas}
                        </Select>
                    {/* </FormControl> */}
                </Grid>
                <Grid container item lg={12} className="textGrid" direction="row" alignItems="center" >
                    <Typography className="constText">
                        Review
                    </Typography>
                    <TextField id="review" variant="outlined" multiline value={props.description} onChange={props.onDescriptionChange}/>
                </Grid>
                <Grid container item lg={12} className="textGrid" direction="row" >
                    <Typography className="constText">
                        Rate
                    </Typography>
                    {/* <InputLabel id="select-label">Rate</InputLabel> */}
                        <Select
                            labelId="select-label"
                            id="rate-select"
                            value={rate}
                            input={<BootstrapInput/>}
                            onChange={handleChangeRate}
                        >
                            <MenuItem><em>None</em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                </Grid>
                <Grid container item lg={12} className="buttonGrid" direction="row" justifyContent="center">
                 <Button className="publishButton" onClick={(e) => props.onSubmit(e, manga) }>Publish</Button>
                </Grid>
            </Grid>
        </div>

    );
}

export default PublishDetail;