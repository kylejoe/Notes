# Personal Settings
# This adds color to the manual pages

man() {
    env LESS_TERMCAP_mb=$'\E[01;31m' \
    LESS_TERMCAP_md=$'\E[01;38;5;74m' \
    LESS_TERMCAP_me=$'\E[0m' \
    LESS_TERMCAP_se=$'\E[0m' \
    LESS_TERMCAP_so=$'\E[38;5;246m' \
    LESS_TERMCAP_ue=$'\E[0m' \
    LESS_TERMCAP_us=$'\E[04;38;5;146m' \
    man "$@"
}

# Add `~/bin` to the `$PATH`
export PATH="$HOME/bin:$PATH"

# Add path for node_modules
export PATH=$PATH:./node_modules/.bin

# Load the shell dotfiles, and then some:
for file in ~/.{path,bash_prompt,exports,aliases,functions,extra}; do
	[ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file

# Load script to see git repo status in prompt
if [ -f ~/.git-prompt.sh ]; then
    source ~/.git-prompt.sh
fi

# Remove the Computer Name and the Username from Terminal command line
# \W displays current working directory
# $(__git_ps1) displays git branch
# ps1 prompt string 1 can have ps2

export PS1='\s-\v\$ '

# If possible, add tab completion for many more commands
[ -f /etc/bash_completion ] && source /etc/bash_completion

if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi


# Required for Bower to access Stash2 as it's behind SSL and Bower doesn't always find the
# root certificates.
export GIT_SSL_NO_VERIFY=1


# Allows the local npm installation (if any) to be found, so long as you're in the same directory
# as the node_modules/ directory.
function npm {
  LOCAL_NPM="./node_modules/.bin/npm"
  if [ -x $LOCAL_NPM ]; then
    $LOCAL_NPM $*
  else
    `which npm` $*
  fi
}


# Alias 
alias ll='ls -lashG'
alias home='cd ~'
alias up='cd ..'
alias h='history'
alias sub='sublime .'

#can always redefine a command to add options
# -i interactive to always be prompted

alias mv='mv -i'
alias cp='cp -i'
alias rm='rm -i'
alias df='df -h'
alias du='du -h'
alias mkdir='mkdir -p'

# can be used to fix common typos you make
