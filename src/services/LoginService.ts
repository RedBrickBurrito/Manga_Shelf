import Credentials from "../types/Credentials";
import LoginAPI from "./LoginAPI";

class LoginService {
  login(username: string, password: string) {
    const credentials = {} as Credentials;
    credentials.username = username;
    credentials.password = password;

    return LoginAPI.post("/authenticate", credentials);
  }
}

export default new LoginService();
