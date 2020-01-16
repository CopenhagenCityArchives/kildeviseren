# Kildeviseren

## Development
Run `npm install` to get started.

### Test
Right now only Angular functionality is tested.

Tests are run with Jasmine using the included specRunner.html file.

### Deployment
To run the server locally:
Run `gulp watch`

This will start a local server at localhost:8080
Go to a workin url like 'http://localhost:8080#!?collection=2&item=3809251' to see the code in action.

Live reloading of the server required the LiveReload plugin for either Chrome or Firefox.

To deploy to server:
Run `gulp build; gulp deploy;`