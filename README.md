# workspace
Workspace


1d5c3bd improved routing
c75f968 add fecthWord, fetchWords routes

git rebase -i -p c75f968

git commit --amend --author="Bhumesh Domala <umeshgmrl@gmail.com>" --no-edit

git rebase --continue

git rebase test -i HEAD~20 -x "git commit --amend --author 'Bhumesh Domala <umeshgmrl@gmail.com>' --no-edit"


git change-commits GIT_COMMITTER_EMAIL "geetha404@gmail.com" "umeshgmrl@gmail.com"

git change-commits GIT_AUTHOR_NAME "Geetha404" "umeshgmrl"


git filter-branch -f --env-filter 'if [ "$GIT_AUTHOR_EMAIL" = "geetha404@gmail.com" ]; then
     GIT_AUTHOR_EMAIL=umeshgmrl@gmail.com;
     GIT_AUTHOR_NAME="Bhumesh Domala";
     GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
     GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"; fi' -- --all

git push -d origin test
git branch -d test
