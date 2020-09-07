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

  async logOut(token) {
    try {
      const result = await fetch(this.constructor.API_URL + "logout", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify({ token }),
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

  async sendPasswordResetMail(email) {
    try {
      const result = await fetch(this.constructor.API_URL + "forgot-password", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify({ email }),
      });

      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async resetPassword(resetData) {
    try {
      const result = await fetch(this.constructor.API_URL + "reset-password", {
        method: "POST",
        headers: this.constructor.headers,
        body: JSON.stringify(resetData),
      });

      const data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

export default new AuthService();
