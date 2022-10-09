# factored-challenge

Repo that contains the backend and frontend for the challenge proposed by Factored.

# How to run this application

This application was made using React for the front-end and Fast API for the back-end

## Run the front-end

```console
cd front-end

npm install

npm run start
```

These commands will install and run the react app. Until you gou to `http://localhost:3000/login` you must set up the back-end service.

## Run the back-end

This service contains a `Dockerfile`. Therefore, you can running with the following commands if you have installed docker previously.

```console
cd back-end

docker build -t back-end-challenge-image .

docker run -d --name back-end-container -p 8000:8000 back-end-challenge-image
```

However, if you have not installed docker, you could run it using the following commands:

```console
cd back-end

pip install requirements.txt

uvicorn app.profiles:app --reload --host 0.0.0.0
```

In order to check that the back-end service is running properly you can run the following command

```console
curl -X GET "http://0.0.0.0:8000/"
```

This command should return the following response:
`{"message":"Back-end running at 0.0.0.0:80"}% `


# Available routes
After setting up both modules, you can start navigate through the app. 

These are the availables routes: 

`http://localhost:3000/login`
`http://localhost:3000/profile/{id}` 
`http://localhost:3000/skills/{id}`

Where id is a number between 1-15. 