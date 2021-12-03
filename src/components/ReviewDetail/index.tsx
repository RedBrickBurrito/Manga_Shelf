import './index.css';
import { Box, Button, Collapse, Grid, Paper, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import React from 'react';
import Review from '../../types/Review';
import Manga from '../../types/Manga';

interface ReviewDetailProps {
    relatedReviews: Review[];
    review: Review;
    addMangaToRead(mangaId: number): void;
    deleteMangaFromToRead(): void;
    closeAlert(alert: string): void;
    imageUrl: string;
    relatedReviewsTitle: string;
    openAdded: boolean;
    openDeleted: boolean;
}

/**
 * Review Detail elements
 * @returns ProductPreview UI elements
 */
 const ReviewDetail: React.FC<ReviewDetailProps> = (props) => {
         
    return (
        <div className="ReviewPreview">
            <Grid container className="detail-review-grid" spacing={2}>
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
                        {props.review.mangaTitle} added to read later!
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
                        {props.review.mangaTitle} deleted from list
                        </Alert>
                    </Collapse>
                </Grid>

                <Grid item lg={3}>
                    <img className="detail-img"
                                    src={props.imageUrl}
                                    alt="Waifus"
                    />
                </Grid>
                <Grid item lg={6}>
                   <Typography className="detail-title">Review {props.review.mangaTitle}</Typography>
                   <Typography className="detail-by-author">by {props.review.username}</Typography>
                   <Typography className="detail-description">{props.review.description}</Typography>                  
                   <Typography className="detail-rate">Rate: {props.review.rate}</Typography>                
                </Grid>
                <Grid item lg={3}>
                    <IconButton className="detail-add-btn"                             
                        onClick={()=>{
                            props.addMangaToRead(props.review.mangaId);
                        }}>
                        <AddIcon className="detail-add-icon"></AddIcon>
                    </IconButton>
                </Grid>
               
               
                <Grid item lg={12}>
                    <Typography className="detail-more-reviews">{props.relatedReviewsTitle}</Typography>
                </Grid>
                <Grid container className="detail-reviews-container" spacing={2}>
                    {props.relatedReviews.map((review)=>(
                         <Grid item lg={3} className="detail-review-container"> 
                                 <Paper className="detail-review-card">
                                     <Typography  className="detail-review-title">{review.mangaTitle}</Typography>                           
                                     <Typography  className="detail-review-description">{review.description}</Typography>
                                     <Typography  className="detail-review-author">- {review.username}</Typography>
                                 </Paper>
                         </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default ReviewDetail;