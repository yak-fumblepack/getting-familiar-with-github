# Getting familiar with Github
**A simple guide**

![GitHub](https://img.shields.io/github/license/yak-fumblepack/getting-familiar-with-github)

## Tips

> - Keep off the `master` branch until release
> - Work in `dev`, or some other staging branch and create a separate feature branch to work on features before merging to the staging branch
> - Merge branches using `git merge --no-ff <branch>` for clear changes
> - Do not `git reset --hard <commit hash>` unless it is breaking
> - Use clear descriptive commit messages but keep it short

## Your first repo

```shell
$ git init
```

Set up remote origin

```shell
$ git remote add origin <repo url>
```

Create a file

```shell
$ touch hello-world.py
```

Add those changes

```shell
$ git add hello-world.py
```

Commit those changes

```shell
$ git commit -m "Initial Commit 🎉"
```

Push to the repo 🚀

```shell
$ git push -u origin master
```
