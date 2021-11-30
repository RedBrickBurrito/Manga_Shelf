import React from "react";
import ReviewPreview from "../../components/PreviewReview";
import Manga from "../../types/Manga";
import Review from "../../types/Review";
import User from "../../types/User";

interface ListState {
    reviews: Review[];
  }

/**
 * Home Reviews Container
 * @extends {Component<Props, State>}
 */
class Home extends React.Component<{}, ListState> {

    state = {
        reviews: [] as Review[],
      };

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
    
        return (        
                <ReviewPreview 
                reviews={this.state.reviews} 
                addMangaToRead={this.addMangaToRead} 
                deleteMangaFromToRead={this.deleteMangaFromToRead} 
                />
            );
    }

    componentDidMount(){
        const reviews = [
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

        for (const review of reviews) {
            const user = {
                id: 11,    
                username: "Scyruz",    
                password: "root",    
                email: "email@tec.mx"
            } as User; 

            const manga = {
                id: 111,    
                title: "Manga Title",    
                author: "CLAMP",    
            } as Manga;

            const reviewUpdate = {...review, 
                username: user.username,
                mangaTitle: manga.title,
            };

            reviewsUpdate.push(reviewUpdate);                       
          }

        this.setState({ reviews: reviewsUpdate});
    }

    addMangaToRead(mangaId: any){
        try
        {
            console.log("Manga "+ mangaId + " added to list");

        }
        catch(e){
            console.log("Error adding manga "+ mangaId + " to list");
        }
    }
    
    deleteMangaFromToRead(mangaId: any){
        try
        {
            console.log("Manga "+ mangaId + " deleted from list");
        }
        catch(e)
        {
            console.log("Error deleting manga "+ mangaId + " from list");
        }
    }
}
 
export default Home;