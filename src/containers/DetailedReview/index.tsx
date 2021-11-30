import React from "react";
import ReviewDetail from "../../components/ReviewDetail";
import Manga from "../../types/Manga";
import Review from "../../types/Review";
import User from "../../types/User";

interface DetailState {
    relatedReviews: Review[];
    review: Review;
}

/**
 * Review Detail Container
 * @extends {Component<Props, State>}
 */
class DetailedReview extends React.Component<{}, DetailState>  {

    state = {
        relatedReviews: [] as Review[],
        review: {} as Review
    }

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <ReviewDetail 
            relatedReviews={this.state.relatedReviews} review={this.state.review}
            addMangaToRead={this.addMangaToRead} deleteMangaFromToRead={this.deleteMangaFromToRead} 
            />
        )
    }
    componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reviewId = Number(urlParams.get('reviewId'));  

        const review = {
            id: reviewId,
            userId: 11,    
            mangaId: 111,    
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rate: 4.4

        } as Review;

        const user = {
            id: 57,    
            username: "Scyruz",    
            password: "root",    
            email: "email@tec.mx"
        } as User; 

        const manga = {
            id: 103,    
            title: "Manga Name",    
            author: "CLAMP",    
        } as Manga;

        const reviewUpdate = {...review, 
            username: user.username,
            mangaTitle: manga.title,
        };

        this.setState({
            review: reviewUpdate
        });
        
        const relatedReviews = [
            {
                id: 1,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 2,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 3,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 4,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 5,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 6,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 7,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
            {
                id: 8,
                userId: 11,    
                mangaId: 111,    
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                rate: 4.4,
            },
        ];

        const reviewsUpdate = [] as Review[];

        for (const review of relatedReviews) {
            const user = {
                id: 57,    
                username: "Username",    
                password: "root",    
                email: "email@tec.mx"
            } as User; 

            const manga = {
                id: 103,    
                title: "Related Manga Name",    
                author: "CLAMP",    
            } as Manga;

            const reviewUpdate = {...review, 
                username: user.username,
                mangaTitle: manga.title,
            };

            reviewsUpdate.push(reviewUpdate);                       
          }

        this.setState({ relatedReviews: reviewsUpdate});

    }

    addMangaToRead(mangaId: any){
        try
        {
            console.log("Manga "+ mangaId + " added to list");

        }
        catch(e){
            console.log("Error adding manga " + mangaId + " to list");
        }
    }
    
    deleteMangaFromToRead(mangaId: any){
        try
        {
            console.log("Manga " + mangaId + " deleted from list");
        }
        catch(e)
        {
            console.log("Error deleting manga " + mangaId + " from list");
        }
    }
}
 
export default DetailedReview;