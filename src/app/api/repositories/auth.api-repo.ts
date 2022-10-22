import { AppAxiosResponse } from "@/app/contracts/AppAxiosResponse";
import { httpClient } from "../client/httpClient";

class AuthApiRepository {
  public login(payload: LoginPayload) {
    return httpClient.post("/auth/login", payload);
  }
  public firebaseLogin(idToken: string) {
    return httpClient.post("/auth/login/firebase", { idToken });
  }
  public register(payload: RegisterPayload): Promise<AppAxiosResponse<any>> {
    return httpClient.post("/auth/register", payload);
  }
  public logout(): Promise<AppAxiosResponse<any>> {
    return httpClient.post("/auth/logout");
  }
}
export default new AuthApiRepository();

// -------------------------------------------------------------
// Payloads
// -------------------------------------------------------------
export interface LoginPayload {
  user: string;
  password: string;
}
export interface RegisterPayload {
  avatar?: string;
  name: string;
  username?: string;
  email: string;
  password: string;
  phone: string;
}
// -------------------------------------------------------------
// Responses
// -------------------------------------------------------------
export interface LoginResponse {}
