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

</br>

### Backing out changes

- ```git reset HEAD {fileName}``` Removes file from staging
- ```git checkout --{fileName}``` This discards the most recent changes and pulls one from the repo instead.

</br>

### Alias

- ```git config --global alias.hist "log --oneline --graph --decorate --all"```
- ```git config --global --list```
  - alias.hist=log --oneline --graph --decorate --all
  - ```git hist``` to use new alias.

</br>

### Changing File names / Deleting files using Git

- ```git mv example.txt {newName}```
  - This change gets staged, then you have to commit the change.
- ```git rm {fileName}```
  - This also gets staged and needs to be committed 
- ```git add -A``` covers all modifications


</br>

### Ignoring files

- ```.gitignore```
  - ```*.log``` ignores all files ending in log.

### Diff

- ```git hist```
  - ```git diff {commitID} HEAD``` To see the differences between two commit points
  - ```git difftool {commitID} HEAD``` This launches the diff tool ie: P4Merge....can't this be vscode?
    - Now we get a difference between the head which is now and the ID specific commit
  - ```git diff``` while there are files in staging, to see changes
  - ```git difftool``` while there are files in staging, to see changes


</br>

### Branching Merging

Branches are just a timeline of commits
Branches are Names or Labels that we give timelines in Git
We can create or delete branches without affecting timelines, we're just modifying labels of commit ranges?

**Fast Forward Commit**
If no change has been detected on the master, the new branch will auto merge.

**Automatic**
When Git detects non conflicting changes in parent branch, a merge commit shows the merging.

**Manual Merge**
When git is unable to resolve conflicts, enters a conflicting merge state. All conflicts must be manually fixed before merging


- ```git branch```
  - Displays branches available
- ```git checkout -b {nameOfNewBranch}```
  - staged files get pulled to **new** branch
- ```git difftool``` {branchName} {branch2Name}
  - Shows the difference between branches

**Merges**
- First need to switch back to Parent branch ie: master
  - ```git checkout master```
- Merge the branch that has the updates INTO the parent.
  - ```git merge updates``` while on *master
- Once we have Head Master Updates all pointing to the same commit ID, we no longer need the "updates branch"
  - ```git branch -d updates```