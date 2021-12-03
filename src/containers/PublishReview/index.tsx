import React from "react";
import Manga from "../../types/Manga";
import Review from "../../types/Review";
import DetailPublish from "../../components/PublishDetail";
import MangaShelfService from "../../services/MangaShelfService";
import SessionStorageHelper from "../../tools/SessionStorageHelper";
import { RouteComponentProps } from "react-router";
import { SelectChangeEvent } from "@mui/material/Select";
import NavigationBar from "../../components/NavBar";


interface MangaState {
    mangas: Manga[];    
    userId: number;    
    mangaId: number;    
    description: string;
    rate: number;
    date: string;
    descriptionModified: boolean;
}
/**
 * Home Reviews Container
 * @extends {Component<Props, State>}
 */
class PublishReview extends React.Component<RouteComponentProps, MangaState> {

    state = {
        mangas: [] as Manga[],
        review: {} as Review,
        userId: 0,    
        mangaId: 0,    
        description: "",
        rate: 0,
        date: "",
        descriptionModified: false
    }

    render() {
        return (
            <>
            <NavigationBar /><DetailPublish mangas={this.state.mangas}
                userId={this.state.userId} mangaId={this.state.mangaId} description={this.state.description}
                rate={this.state.rate} date={this.state.date} onSubmit={this.handleSubmit}
                onDescriptionChange={this.handleDescriptionChange} onRateChange={this.handleChangeRate} />
                </>)
        
    }

    handleSubmit = (event: any, manga:Manga) =>{
        
        this.state.review = {userId:SessionStorageHelper.getUserId(), mangaId:manga.id as number, description:this.state.description, 
            rate:this.state.rate, date:this.getDate(new Date()), mangaTitle:manga.title, username:SessionStorageHelper.getUsername()}
            MangaShelfService.postReview(this.state.review)
        .then((response)=>{
            console.log(response.statusText);
        })
        .catch((error)=>{
            console.log(error);
        })
        this.props.history.push('/home');
        console.log(this.state.review);
    }

    handleChangeRate = (event: SelectChangeEvent) => {
        var rate = event.target.value;
        this.setState({rate:parseInt(rate)});
      };

    handleDescriptionChange = (event:any) =>{
        let target = event.currentTarget as HTMLInputElement;
        let value = target.value;
        this.setState({
            description: value, 
            descriptionModified: true
        });
    }

    componentDidMount(){
        MangaShelfService.getAll()
        .then((response)=>{
            const mangas=response.data;
            console.log(mangas);
            
            this.setState({
                mangas
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    postReview(review:Review){
        MangaShelfService.postReview(review)
        .then((response)=>{
            console.log(response.statusText);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    getDate(yourDate:Date){
        const offset = yourDate.getTimezoneOffset()
        yourDate = new Date(yourDate.getTime() - (offset*60*1000))
        return yourDate.toISOString().split('T')[0]
    }

    
}

export default PublishReview;