import { Grid, Typography, IconButton, Collapse, Box, Button } from "@material-ui/core";
import ToRead from "../../types/ToRead";
import BackspaceIcon from '@mui/icons-material/Backspace';
import './index.css';
import React from "react";
import { Alert } from "@mui/material";
import ActionSettingsInputAntenna from "material-ui/svg-icons/action/settings-input-antenna";

interface ToReadListProps{
    toReadList: ToRead[];
    deleteMangaFromToRead(mangaId: any): any;
    addMangaToRead(mangaId: any): void;
}

/**
 * ToReadList elements
 * @returns ToReadList UI elements
 */
 const ToReadList: React.FC<ToReadListProps> = (props) => {

    const [manga, setManga] = React.useState({id:0, title:" " as any, open:true});
    const [openAdded, setOpenAdded] = React.useState(false);
    const [openDeleted, setOpenDeleted] = React.useState(false);

    return(
        <div className="ToReadList">
            <Grid container className="toread-container" spacing={2}>
            <Grid item lg={12}>
                    <Collapse in={openAdded}>
                        <Alert 
                            className="detail-alert" 
                            severity="success"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{setOpenAdded(false)}}>
                                    CLOSE
                                </Button>
                                </Box>
                            }
                        >
                        {manga.title} added to read later!
                        </Alert>
                    </Collapse>

                    <Collapse in={openDeleted}>
                        <Alert 
                            className="detail-alert" 
                            severity="warning"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-undo-btn" 
                                    variant="contained"
                                    onClick={()=>{
                                        props.addMangaToRead(manga.id); 
                                        setOpenAdded(true);
                                        setOpenDeleted(false);
                                        }}>
                                    UNDO
                                </Button>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{setOpenDeleted(false)}}>
                                    CLOSE
                                </Button>
                            </Box>
                            }
                        >
                        {manga.title} deleted from list
                        </Alert>
                    </Collapse>
                </Grid>

                <Grid item lg={12}>
                   <Typography className="toread-title">your mangas to read later</Typography>
                </Grid>
                <Grid item lg={2}/>
                <Grid item lg={8}>
                    <Grid container className="toread-list-container" spacing={2}>
                        {props.toReadList.map((toRead)=>(
                            <Grid container className="toread-card-container">
                                <Grid item lg={11} className="toread-manga-info-grid">
                                    <Typography className="toread-manga-title">{toRead.mangaTitle}</Typography>
                                    <Typography className="toread-manga-author">{toRead.mangaAuthor}</Typography>
                                    <Typography className="toread-manga-date">{toRead.mangaPublicationDate}</Typography>
                                </Grid>
                                <Grid item lg={1} className="toread-delete-btn-grid">
                                    <IconButton 
                                            className="delete-toread-btn" 
                                            onClick={()=>{
                                                setManga({id: toRead.mangaId, title: toRead.mangaTitle, open:false})
                                                props.deleteMangaFromToRead(toRead.mangaId); 
                                                setOpenAdded(false);
                                                setOpenDeleted(true);
                                                }}>
                                        <BackspaceIcon className="delete-toread-icon"/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item lg={2}/>
            </Grid>            
        </div>
    );

 }

 export default ToReadList;