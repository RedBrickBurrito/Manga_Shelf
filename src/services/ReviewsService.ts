import Manga from '../types/Manga';
import Review from '../types/Review';
import ReviewsAPI from './ReviewsAPI';


class ReviewsService {
    getAll(){
        var mangas = ReviewsAPI.get("/mangas",{headers:this.createHeaders()});
        console.log(mangas);
        return mangas;
    }

    postReview(review:Review){
        //console.log(review);
        return ReviewsAPI.post("/reviews",review,{headers:this.createHeaders()})
    }

    createHeaders(): any {
        var headers={Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjM4NDIzNTEyLCJpYXQiOjE2Mzg0MDU1MTJ9.NfzNtYD9zcQaVWMQXYb1YliNYyqHz3M1F5BnpVr8TwgPi0EjUb0rZkGbrtPbfroPJkjLdCLGlTES0DemYNiVuQ"};
        return headers;
    }
}

export default new ReviewsService();