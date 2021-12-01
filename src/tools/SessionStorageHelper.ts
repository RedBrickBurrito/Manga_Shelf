class SessionStorageHelper {
  static getToken(): string {
    var token = sessionStorage.getItem("token");

    if (token === null) {
      token = "";
    }

    return token;
  }

  static updateToken(token: string): void {
    sessionStorage.setItem("token", token);
  }
}

export default SessionStorageHelper;
