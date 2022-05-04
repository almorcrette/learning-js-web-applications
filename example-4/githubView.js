class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const repoProfilePicEl = document.querySelector('#repo-profile-pic');
    repoNameEl.innerText = repoData.full_name;
    repoDescriptionEl.innerText = repoData.description;
    repoProfilePicEl.src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;