import './index.css';
import { Box, Button, Collapse, Grid, Paper, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import React from 'react';
import Review from '../../types/Review';

interface ReviewDetailProps {
    relatedReviews: Review[];
    review: Review;
    addMangaToRead(mangaId: any): void;
    deleteMangaFromToRead(mangaId: any): void;
}

/**
 * Review Detail elements
 * @returns ProductPreview UI elements
 */
 const ReviewDetail: React.FC<ReviewDetailProps> = (props) => {
    const [openAdded, setOpenAdded] = React.useState(false);
    const [openDeleted, setOpenDeleted] = React.useState(false);
         
    return (
        <div className="ReviewPreview">
            <Grid container className="detail-review-grid" spacing={2}>
                <Grid item lg={12}>
                    <Collapse in={openAdded}>
                        <Alert 
                            className="detail-alert" 
                            severity="success"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-undo-btn" 
                                    variant="contained"
                                    onClick={()=>{
                                        props.deleteMangaFromToRead(props.review.mangaId); 
                                        setOpenAdded(false);
                                        setOpenDeleted(true);
                                        }}>
                                    UNDO
                                </Button>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{setOpenAdded(false)}}>
                                    CLOSE
                                </Button>
                                </Box>
                            }
                        >
                        {props.review.mangaTitle} added to read later!
                        </Alert>
                    </Collapse>

                    <Collapse in={openDeleted}>
                        <Alert 
                            className="detail-alert" 
                            severity="warning"
                            action={
                            <Box>
                                <Button 
                                    className="detail-alert-close-btn"
                                    variant="outlined" 
                                    onClick={()=>{setOpenDeleted(false)}}>
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
                                    src="https://static.zara.net/photos///2021/I/0/1/p/4365/212/406/2/w/750/4365212406_1_1_1.jpg?ts=1626866635860"
                                    alt="Jeans cropped flare"
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
                            setOpenAdded(true);
                            setOpenDeleted(false);
                             }}>
                        <AddIcon className="detail-add-icon"></AddIcon>
                    </IconButton>
                </Grid>
               
               
                <Grid item lg={12}>
                    <Typography className="detail-more-reviews"> Other reviews about this Manga...</Typography>
                </Grid>
                <Grid container className="detail-reviews-container" spacing={2}>
                    {props.relatedReviews.map((review)=>(
                         <Grid item lg={3} className="detail-review-container"> 
                            <Link className="detail-link" to={`/detail?reviewId=${review.id}`}> 
                                 <Paper className="detail-review-card">
                                     <Typography  className="detail-review-title">{review.mangaTitle}</Typography>                           
                                     <Typography  className="detail-review-description">{review.description}</Typography>
                                     <Typography  className="detail-review-author">- {review.username}</Typography>
                                 </Paper>
                             </Link>
                         </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default ReviewDetail;