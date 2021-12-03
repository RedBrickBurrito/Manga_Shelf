import React from "react";
import NavigationBar from "../../components/NavBar";
import ToReadList from "../../components/ToReadList";
import MangaShelfService from "../../services/MangaShelfService";
import SessionStorageHelper from "../../tools/SessionStorageHelper";
import Manga from "../../types/Manga";
import ToRead from "../../types/ToRead";

interface ListState {
    toReadList: ToRead[];
    newToRead: ToRead;
    openAdded: boolean;
    openDeleted: boolean;
    title: string;
  }

/**
 * Mangas List Container
 * @extends {Component<Props, State>}
 */
class MangasList extends React.Component<{}, ListState> {

    state = {
        toReadList: [] as ToRead[],
        newToRead: {} as ToRead,
        openAdded: false,
        openDeleted: false,
        title: "Your mangas to read later",
      };

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
    
        return (   
            <>
            <NavigationBar />
            <ToReadList
                    toReadList={this.state.toReadList}
                    deleteMangaFromToRead={this.deleteMangaFromToRead}
                    addMangaToRead={this.addMangaToRead}
                    closeAlert={this.closeAlert} 
                    newToRead={this.state.newToRead} 
                    openAdded={this.state.openAdded} 
                    openDeleted={this.state.openDeleted} 
                    title={this.state.title}
                />
            </>
            );
    }

    componentDidMount(){

        const userId = SessionStorageHelper.getUserId() as number;
        console.log(userId);

        MangaShelfService.getToReadList(userId)
          .then(async(response) => {
            const toReadList = response.data as ToRead[];

            if (toReadList.length === 0){
                const title = "You have no mangas to read"
                this.setState({title});
            } 
            else{

                const toReadListUpdate = [] as ToRead[];

                for (const toRead of toReadList) {
        
                    MangaShelfService.getManga(toRead.mangaId)
                    .then(async(response) => {
                        const manga = response.data as Manga;
    
                        const toReadUpdate = {...toRead, 
                            mangaTitle: manga.title as string,
                            mangaAuthor: manga.author as string,    
                        };
            
                        toReadListUpdate.push(toReadUpdate);    
                    })
                    .catch((error) => {
                        console.log(error);
                    });                             
                  }
        
                this.setState({ toReadList: toReadListUpdate});
                console.log(this.state.toReadList);
    
                
            }

            })
          .catch((error) => {
            console.log(error);
            });          
    }

    addMangaToRead = (toRead: ToRead) => {

        MangaShelfService.addToRead(toRead)
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
    
    deleteMangaFromToRead = (idToDelete: any) => {

        MangaShelfService.getToRead(idToDelete)
        .then(async(response) => {
            const newToRead = response.data as ToRead;
            this.setState({newToRead});
        })
        .catch((error) => {
        console.log(error);
        });         
        MangaShelfService.deleteFromToReadList(idToDelete)
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
 
export default MangasList;