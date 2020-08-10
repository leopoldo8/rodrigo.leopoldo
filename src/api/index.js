import axios from 'axios';

class API {
  constructor() {
    this.authBearerKey = `${process.env.PROJECT_NAME}-token`;

    this.token = null;

    this.service = axios.create({
      baseURL: API.host(),
      timeout: 30000,
    });

    this.setBearer();
  }

  static host() {
    return process.env.API_BASE_URL;
  }

  static handleError(error) {
    const { response } = error;
    if (!response) return;

    if (response.status) {
      console.error(response.status);
    }
  }

  setBearer() {
    this.service.defaults.headers.common.Authorization = this.token ? `Bearer ${this.token}` : '';
  }

  readCredentials() {
    this.token = localStorage.getItem(``) || '';
  }

  resetCredentials() {
    this.token = '';
    localStorage.setItem(this.authBearerKey, '');
  }

  setCredentials(data) {
    const { token } = data;
    localStorage.setItem(this.authBearerKey, token);
    this.token = token;
    return this.setBearer();
  }

  async get(resource, params) {
    return this.service.get(resource, params).catch(error => {
      API.handleError(error);
      throw new Error(`ApiService ${error}`);
    });
  }

  async post(resource, params) {
    return this.service.post(resource, params).catch(error => {
      API.handleError(error);
      throw new Error(`ApiService ${error}`);
    });
  }

  async put(resource, params) {
    return this.service.put(resource, params).catch(error => {
      API.handleError(error);
      throw new Error(`ApiService ${error}`);
    });
  }

  async delete(resource) {
    return this.service.delete(resource).catch(error => {
      API.handleError(error);
      throw new Error(`ApiService ${error}`);
    });
  }

  async patch(resource, params) {
    return this.service.patch(resource, params).catch(error => {
      API.handleError(error);
      throw new Error(`ApiService ${error}`);
    });
  }
}

export default API;
