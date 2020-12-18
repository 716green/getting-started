# getting-started
```bash
touch index.html
```

### Placeholder Images
```
https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.jpg
```

## Part 1 - HTML
```bash
git init
touch index.html
```

## Part 2 - CSS
```bash
# optional
touch styles.css
```

## Part 3 - JS
```bash
touch server.js
# node_modules folder will be created
npm init -y
npm install express --save
npm install nodemon --save-dev
touch .gitignore

```
#### package.json
```json
//...
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "nodemon server.js"
  },
}
```
#### .gitignore
```
node_modules
```