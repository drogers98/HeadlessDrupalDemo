EBS Headless Drupal Demo
========

Drupal 7 "Headless" Build. Meant as a demo starting point. Currently points to sandbox Pantheon install set up for this demo. This is meant to correspond with the presentation by Dan Rogers @ DrupalCamp Baltimore, 2014. The concept is creating a web or native app utilizing industry standard .js libraries, and connecting to the backend of a new or existing D7 site via services.

Components:
- D7
- Angular.js
- ionic
- Grunt.js
- Bower

Other Notes:
- You will need xcode with CLI, if compiling for native iOs
- Can also compile to other cordova supprted devices (read, android), but that is beyond the scope of this demo.

D7 Modules:
- Services
- CORS (for cross site interaction)
- Views (for serving JSON views)

Contributing: 

1. Clone the git repository 
''' 
git clone git@github.com:rogerseyebyte/EBSheadlessDrupal.git
'''
2. ''' npm install ''' *append sudo if needed*
3. ''' bower install '''
4. ''' grunt build ''' (WEB)
5. ''' grunt serve ''' *or*
6. ''' grunt serve:compress ''' *for a preview of the optimized application*
(IOS)
7. ''' grunt platform:add:ios ''' 
8. ''' grunt build '''
9. ''' grunt emulate:ios --livereload ''' *similar to grunt serve adding --consolelogs flag will print logs to terminal*

if prompted 'unable to find a suitable version for angular'
choose most appropriate version or latest option.
Issues:
- The json coming out of drupal can be array hell. WSCII initiative has some paths forward, and there are a few other ways around this, which I won't go into here.

Resources:
- http://friendlymachine.net/posts/headless-drupal-it-just-might-be-bigger-deal-twig
- https://austin2014.drupal.org/session/build-drupal-free-theme-8s-rest-api-and-javascript
- https://www.getpantheon.com/blog/headless-drupal-demo-working-code-and-call-action
