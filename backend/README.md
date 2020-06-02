This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `nnpm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Populate DB 

Run the next commands in mongoDB
    
    use notes

    db.notes.insertMany([
        { student: "Juan", homework: 8, test: 6, average: '' },
        { student: "Pedro", homework: 5, test: 9, average: '' },
        { student: "Mauricio", homework: 9, test: 4, average: '' },
        { student: "Pamela", homework: 9, test: 4, average: '' },
        { student: "José", homework: 9, test: 8, average: '' },
        { student: "Jairo", homework: 8, test: 6, average: '' },
        { student: "David", homework: 9, test: 4, average: '' },
        { student: "Cristina", homework: 9, test: 9, average: '' },
        { student: "Daniel", homework: 9, test: 4, average: '' },
        { student: "María", homework: 8, test: 6, average: '' },    
    ])

### Setup environment variable
Create a file call .env in the root of the project. 
Add the next variables in this: 
    PORT=3030
    DB=mongodb://127.0.0.1:27017/
    DB_NAME=notes
