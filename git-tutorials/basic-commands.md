# Git basic commands

## Version History

- git init (initialize git).
- git status (shows latest updates).

- git checkout -- 'file name or "dot" to remove all file' (remove changes not added but saved).
- git checkout 'commit hash or branch name'
- git checkout 'commit hash or branch name' 'file name or "dot" to restore' (this restored files from a previous commit or branch without branching).

- git add 'file name or "dot" to add all' (adds file that you wants to commit).
- git reset 'file name or "dot" to remove file' (remove files added previously "from stage to changes", if none, will do nothing).

- git commit -m "your message" (commits files added along with a descriptive message).
- git commit -m "your message" --amend (overwrites lastes commit).

- git log (see previous commits).
- git log --all (see previous commits and ahead).
- git log --graph

- git config --global user.name "your name" (adds identity to each commit).
- git config --global user.email you@example.com (adds identity to each commit).
- git config --global alias.'shotcut' "command" (creates shortcuts).

- rm -rf .git (deletes repo).

## Remote Repo

- git remote add 'repor name' 'url'
