# AngularWithGulpSetup
Angular Application With Gulp Task Runner, At its minimum

# Install nodeJs

# Confirm nodeJs installed
node -v

# Install gulp Task Runner
npm install gulp --save-dev
  Gulp is a javascript task runner that lets you automate tasks

# Install gulp-connect
npm install gulp-connect --save-dev
  gulp-connect simply fires a static, localhost server that serves your app statically.

# Install browserify
npm install browserify vinyl-source-stream  --save-dev
  which is a package that converts a Browserify stream into a stream that Gulp actually understands,
  Performs the following:
    1 - It grabs one or many files
    2 - It manipulates them
    3 - Saves them somewhere, as single file
  
# Install angular and dependencies
npm install --save angular angular-route
