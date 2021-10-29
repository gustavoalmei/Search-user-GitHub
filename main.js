checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

formatDate = data => {
  let date = new Date(data).toLocaleDateString('pt-br')
  return date
}

function getInforUserGitHub(event) {
  event.preventDefault()

  const url = `https://api.github.com/users/${searchName.value}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.login !== undefined) {
        for (let value in data) {
          if (data[value] == '') {
            data[value] = 'Não possuí'
          }else if(data[value] == null){
            data[value] = 'Não possuí'
        }
      }
        photoUser.src = data.avatar_url
        nameUser.textContent = data.name
        login.textContent = `@${data.login}`
        login.href = data.html_url
        bio.textContent = data.bio
        followers.textContent = `${data.followers} followers`
        following.textContent = `${data.following} following`
        repository.textContent = `${data.public_repos} repository`
        localization.textContent = data.location
        twitter.textContent = data.twitter_username
        twitterLink.href = `https://twitter.com/${data.twitter_username}`
        blog.textContent = data.blog
        blogLink.href = `https://${data.blog}/`
        company.textContent = data.company
        dateJoined.textContent = formatDate(data.created_at)
      } else {
        alert('Digite o nome de um usuário.')
      }
    })
}
