import SessionStorageHelper from "../tools/SessionStorageHelper";
import Credentials from "../types/Credentials";
import Review from "../types/Review";
import ToRead from "../types/ToRead";
import MangaShelfAPI from "./MangaShelfAPI";

class MangaShelfService {

  login(username: string, password: string) {
    const credentials = {} as Credentials;
    credentials.username = username;
    credentials.password = password;

    return MangaShelfAPI.post("/authenticate", credentials);
  }

  getReviews() {
    return MangaShelfAPI.get("/reviews", { headers: this.createHeaders() });
  }

  getReview(id: number) {
    return MangaShelfAPI.get(`/reviews/${id}`, { headers: this.createHeaders() });
  }

  getMangaReviews(mangaId: number){
    return MangaShelfAPI.get(`/reviews?mangaId=${mangaId}`, { headers: this.createHeaders() });
  }

  getUser(id: number) {
      return MangaShelfAPI.get(`/user/${id}`, { headers: this.createHeaders()});
    }

  getManga(id: number){
      return MangaShelfAPI.get(`/mangas/${id}`, { headers: this.createHeaders()});
  }

  getToRead(id: number){
    return MangaShelfAPI.get(`/to-read-list/${id}`, { headers: this.createHeaders()});
  }

  getToReadList(userId: number){
    return MangaShelfAPI.get(`/to-read-list?userId=${userId}`, { headers: this.createHeaders()});
  }

  addToRead(toRead: ToRead){
    return MangaShelfAPI.post("/to-read-list", toRead ,{ headers: this.createHeaders()});
  }

  deleteFromToReadList(toReadId: number){
    return MangaShelfAPI.delete(`/to-read-list/${toReadId}`, { headers: this.createHeaders()});
  }

  getAll(){
    var mangas = MangaShelfAPI.get("/mangas",{headers:this.createHeaders()});
    console.log(mangas);
    return mangas;
}

  postReview(review:Review){
      console.log(review);
      return MangaShelfAPI.post("/reviews",review,{headers:this.createHeaders()})
  }

  getUserbyUsername(username:String){
    var user = MangaShelfAPI.get(`/user?username=${username}`,{headers:this.createHeaders()});
    return user;
} 


  createHeaders() : any {
    var headers = {};

    if (SessionStorageHelper.getToken() !== "") {
      const authStr = 'Bearer '.concat(SessionStorageHelper.getToken());
      headers = {authorization: authStr};
    }

    return headers;
  }
}

export default new MangaShelfService();
