import UserAPI from './UserAPI';
import SessionStorageHelper from './../tools/SessionStorageHelper'


class UserService {
    getUserbyUsername(username:String){
        var user = UserAPI.get(`/user?username=${username}`,{headers:this.createHeaders()});
        return user;
    }

    createHeaders(): any {
        var headers={Authorization:"Bearer "+ SessionStorageHelper.getToken()}
        return headers;
    }
}

export default new UserService();