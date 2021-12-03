import React from "react";
import NavigationBar from "../../components/NavBar";
import ReviewPreview from "../../components/PreviewReview";
import LoginService from "../../services/LoginService";
import Manga from "../../types/Manga";
import Review from "../../types/Review";
import ToRead from "../../types/ToRead";

interface ListState {
    reviews: Review[];
    imageURL: string;
    newToRead: ToRead;
    mangaToRead: Manga;
    openAdded: boolean;
    openDeleted: boolean;
  }

/**
 * Home Reviews Container
 * @extends {Component<Props, State>}
 */
class Home extends React.Component<{}, ListState> {

    state = {
        reviews: [] as Review[],
        imageURL: "",
        newToRead: {} as ToRead,
        mangaToRead: {} as Manga,
        openAdded: false,
        openDeleted: false,
      };

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
    
        return (     
                <>
                <NavigationBar />
                <ReviewPreview
                    reviews={this.state.reviews}
                    addMangaToRead={this.addMangaToRead}
                    deleteMangaFromToRead={this.deleteMangaFromToRead}
                    closeAlert={this.closeAlert}
                    imageUrl={this.state.imageURL} newToRead={this.state.newToRead} mangaToRead={this.state.mangaToRead}
                    openAdded={this.state.openAdded} openDeleted={this.state.openDeleted}/>
                </>
            );
    }

    async componentDidMount(){

        const resImange = await (await fetch("https://api.waifu.pics/sfw/waifu")).json();
        const imageURL = resImange.url;
        this.setState({imageURL});
        
        LoginService.getReviews()
          .then(async(response) => {
            const reviews = response.data as Review[];
            console.log(reviews);
            this.setState({ reviews});

          })
          .catch((error) => {
            console.log(error);
            });          
    }

    addMangaToRead = (mangaId: any) => {      
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
                console.log("Manga " + mangaId + " added to list");

                const newToRead = response.data as ToRead;

                LoginService.getManga(mangaId)
                    .then(async(response) => {
                        const mangaToRead = response.data as Manga;
                        this.setState({mangaToRead});
                        console.log(mangaToRead);
                    })
                    .catch((error) => {
                        console.log(error);
                    });          

                this.setState({newToRead, openAdded: true, openDeleted: false});
            })
            .catch((error) => {
            console.log(error);
            console.log("Error adding manga "+ mangaId + " to list");
            });  
    }
    
    deleteMangaFromToRead = () => {

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
 
export default Home;