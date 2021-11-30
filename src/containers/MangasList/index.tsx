import React from "react";
import ToReadList from "../../components/ToReadList";
import Manga from "../../types/Manga";
import ToRead from "../../types/ToRead";

interface ListState {
    toReadList: ToRead[];
  }

/**
 * Mangas List Container
 * @extends {Component<Props, State>}
 */
class MangasList extends React.Component<{}, ListState> {

    state = {
        toReadList: [] as ToRead[],
      };

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
    
        return (        
                <ToReadList 
                toReadList={this.state.toReadList} 
                deleteMangaFromToRead={this.deleteMangaFromToRead} 
                addMangaToRead={this.addMangaToRead}
                />
            );
    }

    componentDidMount(){
        const toReadList = [
            {
                id: 1, 
                userId:3,
                mangaId:333,   
            },
            {
                id: 2,
                userId:3,
                mangaId:333,   
            },
            {
                id: 3,
                userId:3,
                mangaId:333,   
            },
            {
                id: 4,
                userId:3,
                mangaId:333,   
            },
            {
                id: 5,
                userId:3,
                mangaId:333,   
            },
            {
                id: 6,
                userId:3,
                mangaId:333,   
            },
            {
                id: 7,
                userId:3,
                mangaId:333,   
            },
            {
                id: 8,
                userId:3,
                mangaId:333, 
            },
        ];

        const toReadListUpdate = [] as ToRead[];

        for (const toRead of toReadList) {

            const manga = {
                id: 333,    
                title: "Manga To Read Title",    
                author: "Manga To Read Author", 
                publicationDate: "01-03-2015"   
            } as Manga;

            const toReadUpdate = {...toRead, 
                mangaTitle: manga.title,
                mangaAuthor: manga.author,    
                mangaPublicationDate: manga.publicationDate,
            };

            toReadListUpdate.push(toReadUpdate);                       
          }

        this.setState({ toReadList: toReadListUpdate});

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
 
export default MangasList;