export const api = {
  async searchUsers (user) {
    const response = {
      items: [
        {login: 'caio'},
        {login: 'pedro'}
      ]
    }
    return response
  },
  async listRepos (user) {
    const response = [
      {name: 'vuehub'},
      {name: 'neoclima'}
    ]
    return response
  }
}