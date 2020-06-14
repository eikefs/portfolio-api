# How to use

When open up the folder, look at .env.example and create a .env with the following infos:

```env
OAUTH_TOKEN=yourAuthTokenFromGitHub
REQUEST_URL=yourRequestUrl
```

Look [how to get your github auth token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) here.

You just need to run `node src/index.js` in your command prompt. But, before that, you must to install all dependencies using `npm install`.

# Doing requests

Just access `<yourHost>:3333/` using your browser or something else what do HTTP requests, and the all repositories data from github API will appears ;).
