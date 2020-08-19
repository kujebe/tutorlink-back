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

  async signUp(fullname, email, password, role) {
    try {
      const result = await fetch(this.constructor.API_URL + "register", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify({ fullname, email, password, role }),
      });

      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  //   register(username, email, password) {
  //     return axios.post(API_URL + "signup", {
  //       username,
  //       email,
  //       password,
  //     });
  //   }

  //   getCurrentUser() {
  //     return JSON.parse(localStorage.getItem("user"));
  //   }
}

export default new AuthService();
