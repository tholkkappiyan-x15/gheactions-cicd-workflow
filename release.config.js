module.exports = {
  branches: "master",
  repositoryUrl:
    "https://github.com/tholkkappiyan-x15/gheactions-cicd-workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
