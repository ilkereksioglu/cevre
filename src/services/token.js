import { jwtDecode } from "jwt-decode";
import axios from "axios";

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('kullanici'));
    return user ? user.refreshToken : null;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('kullanici'));
    return user ? user.accessToken : null;
  }

  checkAccessTokenExpiration(){
    var token = this.getLocalAccessToken();
    if(!token)
      return false;
    let decoded = jwtDecode(token);
    let now = Date.now().valueOf() / 1000;
    if(decoded.expires > now)
      return true;
    return false;
  }

  checkTokenExpired(token){
    let decoded = jwtDecode(token);
    let now = Date.now().valueOf() / 1000;
    if(decoded.expires > now)
      return true;
    return false;
  }

  getKullanici() {
    return JSON.parse(localStorage.getItem('kullanici'));
  }

  setKullanici(kullanici) {
    localStorage.setItem('kullanici', JSON.stringify(kullanici));
  }

  removeKullanici() {
    localStorage.removeItem('kullanici');
  }

  async isAuthenticated() {
    let token = this.getLocalAccessToken();
    if(token){
      if(this.checkTokenExpired(token)){
        try {
          console.log(process.env.BASE_URL)
          var response = await axios.post("/tokengetir", { refreshToken: this.getLocalRefreshToken() });
          if (response && response.data && response.data.data){
            this.setKullanici(response.data.data);
            return Promise.resolve(this.getLocalAccessToken());
          }
        } catch (_error) {
            return Promise.reject(_error);
        }    
      }else{
        return Promise.resolve(token);
      }
    }
    return Promise.resolve("");
  }
}

export default new TokenService();