@echo off
git add *
echo.
echo commit message:
set /p "Input="
git commit -a -m "%Input%"
git push 