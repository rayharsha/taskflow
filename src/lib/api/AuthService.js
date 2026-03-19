import routes from "../config/apiRoutes";
import AppHTTPService from "./AppHTTPService";

class AuthService {
    constructor() {
        this.httpService = new AppHTTPService();
    }
    async register(data) {
        return this.httpService.post(routes.auth.REGISTER, data);
    }
    async login(data) {
        return this.httpService.post(routes.auth.LOGIN, data);
    }
    async verifyEmail(token) {
        return this.httpService.get(`${routes.auth.VERIFY_EMAIL}/${token}`);
    }
    async forgetPassword(data) {
        return this.httpService.post(routes.auth.FORGET_PASSWORD, data);
    }
    async resetPassword(token,data) {
         console.log(`${routes.auth.RESET_PASSWORD}/${token}`)
        return this.httpService.post(`${routes.auth.RESET_PASSWORD}/${token}`, data);
       
    }
}
export default AuthService;