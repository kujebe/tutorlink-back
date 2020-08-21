class AuthService {
  static API_URL = "/api/v1/auth/";
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  async login(email, password) {
    try {
      const result = await fetch(this.constructor.API_URL + "login", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify({ email, password }),
      });

      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async signUp(fullname, email, password, password_confirm, role) {
    try {
      const result = await fetch(this.constructor.API_URL + "register", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify({
          fullname,
          email,
          password,
          password_confirm,
          role,
        }),
      });

      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new AuthService();
