
class SessionStorageHelper{
    static getUserId(): number {
        var userId = parseInt(sessionStorage.getItem("userId")!);
    
        if (Number.isNaN(userId)) {
            userId = 0 ;
        }
    
        return userId;
    }
    
    static updateUserId(userId: string): void {
       sessionStorage.setItem("userId", userId);
    }

    static getUsername(): string {
        var username = sessionStorage.getItem("username");
    
        if (username === null) {
            username = "";
        }
    
        return username;
      }
    
      static updateUsername(username: string): void {
        sessionStorage.setItem("username", username);
      }
}

export default SessionStorageHelper;