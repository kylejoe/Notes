
# This only runs on user login
echo ""
echo -n "Welcome to Unix on Mac OS X, "; whoami
echo ""
echo -n "Uptime: "; uptime
echo ""
cal

# This loads in the configuration in .bashrc
# Put all configuration there!

if [ -f ~/.bashrc ]; then
   source ~/.bashrc
fi

export PS1='\W \[\e[0;32m\]$(__git_ps1 "(%s)")\[\e[m\] $ '
