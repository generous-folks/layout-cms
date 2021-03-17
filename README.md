# Layout SSR

:construction: _This project is a Work In Progress_

This project is a little CMS made on top of React & Firebase. Its aim is to allow quick scaffolding of cheap to maintain websites.
Unlike professional solutions, the front is not as customizable by the end user in the admin UI but, as you own the code, you can always override the Material-UI components and theme that are used.

## Why ?

As Front-End developers, we are reluctant to use "no-code" solutions when we're asked to deliver a website. However, building a website from scratch with content management capabilities takes way too much time to be profitable.
To solve this, this project is yet another starter template that should be production ready given some config.

## Contributing

### Pre-requisites

- Node 10 _(soon 12)_
- Yarn
- A google account

### Getting started

There are a few steps to perform before being able to develop.

- Clone the project

- Create a Firebase project with Hosting, Functions and RealTime Database

- Create the Google Cloud Project

This is a GCP based project, you need to access the [GCP console](#/) and create a new project.

[...] TODO image tutorial

#### Deployment

- Get a service account key

[...] TODO image tutorial

Then store it at the root of your project under `gsa_key.json`.

- Run `deploy.sh` _(TODO One command deployment)_

## Functional road map

### Regular institutional web site

The base requirement we have is to address "regular" needs of a site builder: creating pages (routes) and composing visuals (screens) from the Back Office.

### Restaurants

For Restaurants, the features we target are:

- Bookings

  - User form
  - Manage your bookings in the back office (validate/edit/delete)
  - Manage your booking rules in the back office

- Click and collect

  - User form
  - Manage orders in the back office
  - Manage products

- Menus (First as PDF, then with builded templates if time)
