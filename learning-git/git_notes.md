## The basics.
- [The CheatSheet](https://education.github.com/git-cheat-sheet-education.pdf)

Git managed folders should be kept separate. Front end folders and backend folders should not be combined. One Repository per application

Snapshots are commits, can have many different file changes.

Commits are saved to a timeline called a Branch. Repositories usually have one branch which by default is called master.

</br>

## Tools

- P4merge + Text mate
- Choose default editor
  - ```git config --global core.editor "mate -w"```
- Open git in default editor
  - ```git config --global - e```
- Default graphical interface
  - ```git config --global diff.tool p4merge```
  - ```git config --global difftool.p4merge.path "/Applications/p4merge.app/Contents/MacOS/p4merge"```
  - ```git config --global difftool.prompt false```
  - ```git config --global merge.tool p4merge```
  - ```git config --global mergetool.p4merge.path "/Applications/p4merge.app/Contents/MacOS/p4merge"```
  - ```git config --global mergetool.prompt false```

</br>

### New Repos

- Make a new folder then ```git init {name}```
- Or ```git init .``` Current folder initialisation 

</br>

### Three Stages

1. **Working** all files and folders, may or not be managed
2. **Staging** place to prepare for the next commit
3. **Repo** commit history, saved changes 
4. **Remote** is kind of a 4th which is online and shared

</br>

### Adding files to staging + commit
- ```git status``` == Files in Working Area.
- ```git add {fileName}``` Adds files to staging area.
  - You can also tab here on the file names.
- ```git commit -m "First file in demo repo"```
- ```git commit -am "message"``` moves tracked straight through stage to commit
- ```git add .``` wildcard to add all files to staging
- 

**You can CD into the ```.git``` folder.**

</br>

### Git History

- ```git log```
- ```git show``` shows me actual changes ```Q``` to esc
- ```git ls-files``` Files that are being tracked
- ```git log --oneline --graph --decorate --all``` just gives me a pretty history


### Backing out changes

- ```git reset HEAD {fileName}``` Removes file from staging
- ```git checkout --{fileName}``` This discards the most recent changes and pulls one from the repo instead.

### Alias

- ```git config --global alias.hist "log --oneline --graph --decorate --all"```
- ```git config --global --list```
  - alias.hist=log --oneline --graph --decorate --all
  - ```git hist``` to use new alias.