import API from '../index';

// example of API usage

class UserService extends API {
  constructor() {
    super(API);
  }

  async getUsers() {
    return this.get('/users');
  }
}

export default new UserService();
