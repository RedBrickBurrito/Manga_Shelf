import './index.css';
import { Box, Button, Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Review from '../../types/Review';
import { Alert } from '@mui/material';
import React from 'react';

interface ReviewPreviewProps {
    reviews: Review[];
    addMangaToRead(mangaId: any): void;
    deleteMangaFromToRead(mangaId: any): void;
    imageUrl: string;
}

/**
 * Review preview elements
 * @returns ProductPreview UI elements
 */
 const ReviewPreview: React.FC<ReviewPreviewProps> = (props) => {
    const [manga, setManga] = React.useState({id:0, title:" " as any});
    const [openAdded, setOpenAdded] = React.useState(false);
    const [openDeleted, setOpenDeleted] = React.useState(false);
    // var listPrice = 0.0;
    // if (
    //     props.product !== undefined &&
    //     props.product.childSkus !== undefined &&
    //     props.product.childSkus[0] !== undefined
    // ) {
    //     listPrice = props.product.childSkus[0].listPrice;
    // }

    // var salePrice = 0.0;
    // if (
    //     props.product !== undefined &&
    //     props.product.childSkus !== undefined &&
    //     props.product.childSkus[0] !== undefined
    // ) {
    //     salePrice = props.product.childSkus[0].salePrice;
    // }

    // var mediumImageUrl = "";
    // if (
    //     props.product !== undefined &&
    //     props.product.childSkus !== undefined &&
    //     props.product.childSkus[0] !== undefined
    // ) {
    //     mediumImageUrl = props.product.childSkus[0].mediumImageUrl;
    // } else {
    //     mediumImageUrl = "https://dummyimage.com/200x200/000/0011ff"
    // }

    return (
        <div className="ReviewPreview">
            <Grid container className="preview-review-grid" spacing={2}>
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
                                        props.deleteMangaFromToRead(manga.id); 
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
                                    setManga({id: review.mangaId, title: review.mangaTitle});
                                    setOpenAdded(true);
                                    setOpenDeleted(false);
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