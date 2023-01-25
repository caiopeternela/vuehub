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
  },
  async listIssues (owner, name, page) {
    const response = [
      {number: 1, title: 'issue x', html_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'},
      {number: 2, title: 'issue y', html_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}
    ]
    return later(response)
  },
  async listContent (owner, repo, path = '') {
    const response = [
      {name: 'file x', path: 'file x', type: 'file', html_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'},
      {name: 'file y', path: 'file x', type: 'file', html_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}
    ]
    return later(response)
  }
}