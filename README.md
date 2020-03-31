# OGEL Frontend

As I am mostly backend developer I decided to use free dashboard template available at
<https://github.com/flatlogic/react-dashboard>. Frontend is fetching data either from
<http://localhost:8080> when started in development environment and <https://ogel-backend.herokuapp.com>
on production environment. Charts and data represents last 24h available in database.

## Compile and run
### Compile
From project root:
```
yarn install
```
### Run
From project root (development mode):
```
yarn start
```

## Demo
App is deployed to heroku under the url:
<https://ogel.herokuapp.com/>

If app empty please wait approx 30s as both fronted and backend applications are running
on free tier of heroku and require some time to wake up.