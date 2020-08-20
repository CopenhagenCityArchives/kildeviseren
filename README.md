[![Build Status](https://travis-ci.org/CopenhagenCityArchives/kildeviseren.svg?branch=feature-travis)](https://travis-ci.org/CopenhagenCityArchives/kildeviseren)
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

#### Profiles

The project contains profile configurations that change aspects of the resulting build, specified with
the flag `--profile <PROFILE>`. The default profile is `kbharkiv`.

In the *profile* directory is a subdirectory for each supported profile. A profile directory contains:

- a `config.js`, which
contains an angular module with constant defined by the name `config`.

- a `favicon.ico`

- a selection of PHP files, and an .htaccess file which can be customized, including `index.html`.

The profile name is used during ftp upload to decide the remote folder name. If the profile is the default
`kbharkiv`, it is omitted. 

The allowed profiles are hardcoded in `gulpfile.js`.
