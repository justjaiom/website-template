# Clone template

## cloning without linking to this repo

Clone the Repository:
```bash
git clone https://github.com/justjaiom/website-template.git
# if not Jaiom, Copy http clone link in the REPO home page
```

Navigate into the Repository Directory:
```bash
cd website-template
```
Remove the Existing Remote:
```bash
git remote remove origin
```

Initialize a New Git Repository:
```bash
rm -rf .git
git init
```
Add the New Remote Repository:
Replace your-username and New_Repo with your GitHub username and the new repository nam
```bash
git remote add origin https://github.com/your-username/New_Repo.git
```

Push the code to the new repository
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

When you load the files in V.S. code, make sure you run this command
```bash
npm install

#you may see that there are vulnerabilities if so follow the terminal prompts
```

Run files in local server:
```bash
npm run dev
```