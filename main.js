checkbox.addEventListener("change", ()=>{ 
  document.body.classList.toggle("dark")
});

function getInforUserGitHub(event) {
  event.preventDefault()

  const url = `https://api.github.com/users/${searchName.value}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.login !== undefined) {
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
      } else {
        alert('Digite o nome de um usuário.')
      }
    })
}
