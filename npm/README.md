# 1. [Install Node.js](https://nodejs.org/en/download/package-manager/)
## Arch Linux
`sudo pacman -S nodejs npm`
## Debian/Ubuntu
`sudo apt install nodejs npm`
## Enterprise Linux (RHEL and CentOS)
`sudo yum install nodejs npm --enablerepo=epel`
## openSUSE and SLE
`sudo zypper install nodejs npm`
# 2. [Install npm global](https://docs.npmjs.com/getting-started/installing-node)
```sh
mkdir ~/.npm-global 
npm config set prefix="$HOME/.npm-global"

# Open ~/.bashrc file and add this line to end of the file:
export PATH="$HOME/.npm-global/bin:$PATH"

# Update your system variables in your command line.
source ~/.bashrc

# Update npm to latest version.
npm install npm@latest --global
```
## [Install Node Security Platform](https://github.com/nodesecurity/nsp)
`npm install nsp --global`
### Check `package.json` with `nsp check` for known vulnerabilities.
```sh
cd <package_name>
nsp check
```
### Update all global package
`npm udpate --global`
