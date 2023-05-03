## Work distribution:

Khaled and Mohammed can upload HTML, CSS, and JS files into static.
Alaa will integrate their work into react.

Please go to `static/styles.css` and view the `:root` which defines CSS variables. The variables are used so that we can change the styles in one place if we want to instead of changing multiple places. An example of how to use the variables is provided in the same file for `h1`.

## Required Pages:

- [x] landing
- [x] programs
- [ ] registration form
- [ ] post registartion message
- [x] login
- [ ] driver view
- [ ] admin view - manage drivers
- [ ] admin view - manage programs
- [ ] admin view - students in a program

## To Run:
You need to have Node js installed in order to run the page.

After cloning the repo, type the following commands in the terminal:
```
cd react
cd takaful-programs-planner
npm install
npm run dev
```
The commands above are for the first time only. Later, you don't need to type `npm install`.

Then open `http://localhost:5173/`.

Note that for now, the programs page is using dummy (fake) data. To simulate the back end, type the following in another terminal:
```
npx json-server --watch react/takaful-programs-planner/data/db.json --port 8000
```