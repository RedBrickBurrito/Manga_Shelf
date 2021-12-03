import React from "react";
import NavigationBar from "../../components/NavBar";
import ReviewDetail from "../../components/ReviewDetail";
import LoginService from "../../services/LoginService";
import Manga from "../../types/Manga";
import Review from "../../types/Review";
import ToRead from "../../types/ToRead";
import User from "../../types/User";

interface DetailState {
    relatedReviews: Review[];
    review: Review;
    imageURL: string;
    relatedReviewsTitle: string;
    newToRead: ToRead;
    openAdded: boolean;
    openDeleted: boolean
}

/**
 * Review Detail Container
 * @extends {Component<Props, State>}
 */
class DetailedReview extends React.Component<{}, DetailState>  {

    state = {
        relatedReviews: [] as Review[],
        review: {} as Review,
        imageURL: "",
        relatedReviewsTitle: "Other reviews about this manga",
        newToRead: {} as ToRead,
        mangaToRead: {} as Manga,
        openAdded: false,
        openDeleted: false
    }

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <>
            <NavigationBar />
            <ReviewDetail
                    relatedReviews={this.state.relatedReviews} review={this.state.review}
                    addMangaToRead={this.addMangaToRead} deleteMangaFromToRead={this.deleteMangaFromToRead}
                    closeAlert={this.closeAlert}
                    imageUrl={this.state.imageURL} relatedReviewsTitle={this.state.relatedReviewsTitle} 
                    openAdded={this.state.openAdded} openDeleted={this.state.openDeleted}/>
                </>
        )
    }

    async componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reviewId = Number(urlParams.get('reviewId'));  

        LoginService.getReview(reviewId)
          .then(async(response) => {
            const review = response.data as Review;
            console.log(review);

            LoginService.getMangaReviews(review.mangaId)
          .then(async(response) => {
            const resRelatedReviews = response.data as Review[];

            const relatedReviews = [] as Review[];

            for ( const relatedReview of resRelatedReviews){
                if(relatedReview.id !== reviewId){
                    relatedReviews.push(relatedReview);
                }
            }
             console.log(relatedReviews.length);
             
            if (relatedReviews.length === 0){
                const relatedReviewsTitle = "No more reviews about this manga were found :("
                this.setState({relatedReviewsTitle});
            } 
            else{
                console.log(relatedReviews);
                this.setState({review, relatedReviews});
            }
            
          })
          .catch((error) => {
            console.log(error);
            });        
            this.setState({review, });

          })
          .catch((error) => {
            console.log(error);
            });          

        
        const response = await (await fetch("https://api.waifu.pics/sfw/waifu")).json();
        
        console.log(response);
        const url = response.url;        

        this.setState({
            imageURL: url
        });
        
    }

    addMangaToRead = (mangaId: any) =>{
        const currentDate = new Date().getDate().toString();
        console.log(currentDate);

        const toRead = {
            userId: 21,
            mangaId: mangaId,
            dateAdded: currentDate,
        } as ToRead;


        LoginService.addToRead(toRead)
            .then(async(response) => {
                console.log(response);
                console.log("Manga " + toRead.mangaId + " added to list");
                
                const newToRead = response.data as ToRead;

                this.setState({newToRead, openAdded: true, openDeleted: false});
            })
            .catch((error) => {
            console.log(error);
            console.log("Error adding manga "+ toRead.mangaId + " to list");
            });  

    }
    
    deleteMangaFromToRead = () =>{
        const idToDelete = this.state.newToRead.id as number;

        LoginService.deleteFromToReadList(idToDelete)
        .then(async(response) => {
            console.log(response)
            console.log("Manga "+ idToDelete + " deleted from list");

            this.setState({openAdded: false, openDeleted:true});
        })
        .catch((error) => {
        console.log(error);
        console.log("Error deleting manga "+ idToDelete + " from list");
        });           
    }

    closeAlert = (alert: string) => {
        if (alert === "added"){
            this.setState({openAdded: false});
        }

        if(alert === "deleted"){
            this.setState({openDeleted:false});
        }
    }
}
 
export default DetailedReview;