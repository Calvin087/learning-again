## The basics.
- [The CheatSheet](https://education.github.com/git-cheat-sheet-education.pdf)
- Pull Requests are asking the Parent to **Pull** in your changes

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

**Local Branches then to Github**
- ```git checkout -b {nameOfBranch}```

**Prune**
- ```git fetch -p```

**Delete remote branches**
- ```git push origin :{branchName}

**On Github**

Adding new files to github directly allows me to also choose a branch if need be, which effectively is a pull request. I can then merge pull requests and delete branches once they're not needed anymore.

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

**Conflicts**
Trying to merge two files with edits in the same place
- ```cat {fileName}``` shows us the complete file in terminal.
```
<<<<<<< HEAD
I hope this isn't a problem
=======
This is bound to cause trouble!
>>>>>>> very-bad
```
- ```git mergetool``` This brings up the tool to check the changes.
  - Scroll through the change possibilities, save and exit.
  - Then commit what was saved ```git commit -m "something"```
  - Ignore ```.orig``` files


</br>

### Tags

Marking milestones / tags inside git commit points.

- ```git tag {myTag}```
- ```git tag -a v1.0 -m "Release 1.0"``` == Annotated tags
- ```git show v1.0``` == Show deets
- ```git tag --list```

</br>

### Stashing

- ```git stash```
- ```git stash pop``` get's us back to where we were and deletes the stash


</br>

### Time Travel

- ```git hist``` to see commits available.
- ```git reset {commitID} --soft``` changes where head is pointed / --mixed --hard
- ```git reflog``` gets us to see all Head changes in repo
- Using a mixture of RESET and REFLOG we can move to and from different moments in time.

</br>

### Github

- ```git remote -v``` to check remote connections
- ```git remote add origin https://github.com/zzzzzzz``` 

Syncing up
- ```git push (-u) origin master --tags```
  - -u sets up a tracking branch between master local and master remote.
  - origin is the name of the remote repo?
  - name of the branch we're using to push up.
  - tags sends all tags up to Github.

</br>

### SSH Key

Look into this again

- ```mkdir .ssh```
  - ```cd .ssh```
- ```ssh-keygen -t rsa -C "calvin+1@sliame.com"```

</br>

### Cloning

- ```git clone {httpsURL} {folderNameChoice}

</br>

### Fetch and Pull

If there are changes on github and I try to push my changes as well, i'll get an error - Tells me i have to pull first.

PULL is a ```Fetch``` and ```Merge``` at the same time really.

**PULL** **Could** be destructive if used when we don't have compatible changes locally. Instead we can **Fetch** then git pull if we're happy with the updates.

</br>

### Repo name changes

If the name of the repo change on GH you need to copy the url again and set it in the terminal.

- ```git remote set-url origin {url}```


</br>

### Rebase

[Rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)


</br>

### Graphing

- [Graphs on Github](https://github.com/Calvin087/demo-two/pulse)
- ```git log --oneline --graph```

</br>

### Tags

- ```git tag {tagName} {branch}```
  - These are simple lightweight commits, no infomation added
- ```git tag -a v0.1-alpha -m "Release 0.1 (Alpha)" {commitID}```
  - ```git show v0.1-alpha```
  - release / annotated tags
- Git pull
- ```git push origin {tagName}```

</br>

### Contributions / Forking

- Fork a repo
  - clone your fork into local
- CD into the new folder
- ```git checkout -b feature-readme```
- make a new file
- stage and commit
- ```git push -u origin feature-readme```
- Github -> Change branch -> Compare and pull request
- Check relationship comparisons
- **Create pull request**


### Closing issues from Git

The # number in the title of the issue on Github needs to be used later. Get on the correct branch - Pull the most recent files from remote, make the updates and the commit using "Commit Message, close #{issue number}"

You can also tag / metion certain issues in Github comments using #{issue id}