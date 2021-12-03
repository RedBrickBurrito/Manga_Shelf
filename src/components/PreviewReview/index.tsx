import './index.css';
import { Box, Button, Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Review from '../../types/Review';
import { Alert } from '@mui/material';
import React from 'react';
import ToRead from '../../types/ToRead';
import Manga from '../../types/Manga';

interface ReviewPreviewProps {
    reviews: Review[];
    addMangaToRead(mangaId: any): void;
    deleteMangaFromToRead(): void;
    closeAlert(alert: string): void;
    imageUrl: string;
    newToRead: ToRead;
    openAdded: boolean;
    openDeleted: boolean;
    mangaToRead: Manga;
}

/**
 * Review preview elements
 * @returns ProductPreview UI elements
 */
 const ReviewPreview: React.FC<ReviewPreviewProps> = (props) => {

    return (
        <div className="ReviewPreview">
            <Grid container className="preview-review-grid" spacing={2}>
                <Grid item lg={12}>
                    <Collapse in={props.openAdded}>
                        <Alert 
                            className="detail-alert" 
                            severity="success"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-undo-btn" 
                                    variant="contained"
                                    onClick={()=>{
                                        props.deleteMangaFromToRead(); 
                                        }}>
                                    UNDO
                                </Button>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{props.closeAlert("added")}}>
                                    CLOSE
                                </Button>
                                </Box>
                            }
                        >
                        {props.mangaToRead.title} added to read later!
                        </Alert>
                    </Collapse>

                    <Collapse in={props.openDeleted}>
                        <Alert 
                            className="detail-alert" 
                            severity="warning"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{props.closeAlert("deleted")}}>
                                    CLOSE
                                </Button>
                                </Box>
                            }
                        >
                        {props.mangaToRead.title} deleted from list
                        </Alert>
                    </Collapse>
                </Grid>
                <Grid item lg={12}>
                   <Typography className="preview-title">recent reviews</Typography>
                </Grid>
                <Grid container className="preview-reviews-container" spacing={2}>
                    {props.reviews.map((review) => (
                        <Grid item lg={3} className="preview-review-container"> 
                            <Link className="detail-link" to={`/detail?reviewId=${review.id}`}> 
                                <Paper className="preview-review-card">
                                    <Typography  className="preview-review-title">{review.mangaTitle}</Typography>                           
                                    <Typography  className="preview-review-description">{review.description}</Typography>
                                    <Typography  className="preview-review-author">- {review.username}</Typography>
                                    <img className="preview-img"
                                        src={props.imageUrl}
                                        alt="Waifu"
                                    />
                                </Paper>
                            </Link>
                            <IconButton 
                                className="preview-add-btn" 
                                onClick={()=>{
                                    props.addMangaToRead(review.mangaId);
                                     }}>
                                <AddIcon className="preview-add-icon"></AddIcon>
                            </IconButton> 
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default ReviewPreview;