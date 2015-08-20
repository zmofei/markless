# markless
A easy editor for markdown

# What you need to build your own markless

In order to build `markless`, you need to have the latest Node.js/npm and git 1.7 or later. Earlier versions might work, but are not supported.

For Windows, you have to download and install [git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download/).

OS X users should install [Homebrew](http://brew.sh/). Once Homebrew is installed, run brew install git to install git, and brew install node to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source if you swing that way. Easy-peasy.

# How to build your own markless

Clone a copy of the main `markless` git repo by running:

    git clone git://github.com/zmofei/markless.git

Enter the `markless` directory and run the build script:
    
    cd markless &&  npm run build

The built version of `markless` will be put in the dist/ subdirectory.



