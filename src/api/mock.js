const later = (response) => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(response)
    }, 1000)
  })
}

export const api = {
  async searchUsers (user) {
    const response = {
      items: [
        {login: 'caio'},
        {login: 'pedro'}
      ]
    }
    return later(response)
  },
  async listRepos (user) {
    const response = [
      {name: 'vuehub', owner: {login: 'caio'}},
      {name: 'neoclima', owner: {login: 'caio'}}
    ]
    return later(response)
  }
}