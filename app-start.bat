@echo off
SET port_output=Port will be set to %1
SET proxy_output=Proxy will be set to %2
call npm i
echo "packages installed"
if "%~2"=="" goto NOPROXY
echo %proxy_output%
npm config set proxy %2
npm config set https-proxy %2
:NOPROXY
if "%~1"=="" goto NOPORT
echo %port_output%
node index.js %1
:NOPORT
node index.js