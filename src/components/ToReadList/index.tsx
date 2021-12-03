import { Grid, Typography, IconButton, Collapse, Box, Button } from "@material-ui/core";
import ToRead from "../../types/ToRead";
import BackspaceIcon from '@mui/icons-material/Backspace';
import './index.css';
import React from "react";
import { Alert } from "@mui/material";

interface ToReadListProps{
    toReadList: ToRead[];
    deleteMangaFromToRead(mangaId: any): any;
    addMangaToRead(toRead: ToRead): void;
    closeAlert(alert: string): void; 
    newToRead: ToRead;
    openAdded: boolean;
    openDeleted: boolean;
    title: string;
}

/**
 * ToReadList elements
 * @returns ToReadList UI elements
 */
 const ToReadList: React.FC<ToReadListProps> = (props) => {

    return(
        <div className="ToReadList">
            <Grid container className="toread-container" spacing={2}>
            <Grid item lg={12}>
                    <Collapse in={props.openAdded}>
                        <Alert 
                            className="detail-alert" 
                            severity="success"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{props.closeAlert("added")}}>
                                    CLOSE
                                </Button>
                                </Box>
                            }
                        >
                        {props.newToRead.mangaTitle} added to read later! Refresh to update your list :)
                        </Alert>
                    </Collapse>

                    <Collapse in={props.openDeleted}>
                        <Alert 
                            className="detail-alert" 
                            severity="warning"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-undo-btn" 
                                    variant="contained"
                                    onClick={()=>{
                                        props.addMangaToRead(props.newToRead); 
                                        }}>
                                    UNDO
                                </Button>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{props.closeAlert("deleted")}}>
                                    CLOSE
                                </Button>
                            </Box>
                            }
                        >
                        {props.newToRead.mangaTitle} deleted from queue. Refresh to update your list :)
                        </Alert>
                    </Collapse>
                </Grid>

                <Grid item lg={12}>
                   <Typography className="toread-title">{props.title}</Typography>
                </Grid>
                <Grid item lg={2}/>
                <Grid item lg={8}>
                    <Grid container className="toread-list-container" spacing={2}>
                        {props.toReadList.map((toRead)=>(
                            <Grid container className="toread-card-container">
                                <Grid item lg={11} className="toread-manga-info-grid">
                                    <Typography className="toread-manga-title">{toRead.mangaTitle}</Typography>
                                    <Typography className="toread-manga-author">{toRead.mangaAuthor}</Typography>
                                </Grid>
                                <Grid item lg={1} className="toread-delete-btn-grid">
                                    <IconButton 
                                            className="delete-toread-btn" 
                                            onClick={()=>{
                                                props.deleteMangaFromToRead(toRead.id); 
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