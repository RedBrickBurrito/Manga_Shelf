import SessionStorageHelper from "../tools/SessionStorageHelper";
import Credentials from "../types/Credentials";
import ToRead from "../types/ToRead";
import LoginAPI from "./LoginAPI";

class LoginService {

  login(username: string, password: string) {
    const credentials = {} as Credentials;
    credentials.username = username;
    credentials.password = password;

    return LoginAPI.post("/authenticate", credentials);
  }

  getReviews() {
    return LoginAPI.get("/reviews", { headers: this.createHeaders() });
  }

  getReview(id: number) {
    return LoginAPI.get(`/reviews/${id}`, { headers: this.createHeaders() });
  }

  getMangaReviews(mangaId: number){
    return LoginAPI.get(`/reviews?mangaId=${mangaId}`, { headers: this.createHeaders() });
  }

  getUser(id: number) {
      return LoginAPI.get(`/user/${id}`, { headers: this.createHeaders()});
    }

  getManga(id: number){
      return LoginAPI.get(`/mangas/${id}`, { headers: this.createHeaders()});
  }

  getToRead(id: number){
    return LoginAPI.get(`/to-read-list/${id}`, { headers: this.createHeaders()});
  }

  getToReadList(userId: number){
    return LoginAPI.get(`/to-read-list?userId=${userId}`, { headers: this.createHeaders()});
  }

  addToRead(toRead: ToRead){
    return LoginAPI.post("/to-read-list", toRead ,{ headers: this.createHeaders()});
  }

  deleteFromToReadList(toReadId: number){
    return LoginAPI.delete(`/to-read-list/${toReadId}`, { headers: this.createHeaders()});
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

export default new LoginService();
