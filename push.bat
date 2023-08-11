@echo off
git add *
echo.
echo commit message:
set /p "Input="
echo.
git commit -a -m "%Input%"
git push 