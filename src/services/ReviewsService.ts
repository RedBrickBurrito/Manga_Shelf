import Review from '../types/Review';
import ReviewsAPI from './ReviewsAPI';
import SessionStorageHelper from './../tools/SessionStorageHelper'


class ReviewsService {
    getAll(){
        var mangas = ReviewsAPI.get("/mangas",{headers:this.createHeaders()});
        console.log(mangas);
        return mangas;
    }

    postReview(review:Review){
        console.log(review);
        return ReviewsAPI.post("/reviews",review,{headers:this.createHeaders()})
    }

    createHeaders(): any {
        var headers={Authorization:"Bearer "+ SessionStorageHelper.getToken()};
        return headers;
    }
}

export default new ReviewsService();