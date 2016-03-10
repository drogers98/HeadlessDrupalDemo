EBS Headless Drupal Demo
========

Drupal 7 "Headless" Build. Meant as a demo starting point. Currently points to sandbox Pantheon install set up for this demo. This is meant to correspond with the presentation by Dan Rogers @ DrupalCamp Baltimore, 2014. The concept is creating a web or native app utilizing industry standard .js libraries, and connecting to the backend of a new or existing D7 site simply via services.

You can view our demo stock D7 Install here: http://dev-headlessdrupal.pantheon.io

And the demo app here: http://headless.eyebytesolutions.com

Components:
-----------
- D7
- npm
- Angular.js
- ionic
- Grunt.js
- Bower

Other Notes:
-----------
- You will need xcode with CLI, if compiling for native iOs
- Can also compile to other cordova supprted devices (read, android), but that is beyond the scope of this demo.

D7 Required Modules:
-----------
- Services (for the endpoint)
- CORS (for cross site interaction)
- Views (for collections)
- Services Views (for serving JSON views)

Installing App:
-----------
```
git clone git@github.com:drogers98/EBSheadlessDrupal.git
```
2. ``` npm install ``` *append sudo if needed*
3. ``` bower install ```
4. ``` grunt build ``` (WEB)
5. ``` grunt serve ``` *or*
6. ``` grunt serve:compress ``` *for a preview of the optimized application*
(IOS)
7. ``` grunt platform:add:ios ```
8. ``` grunt build ```
9. ``` grunt emulate:ios --livereload ``` *similar to grunt serve adding --consolelogs flag will print logs to terminal*

if prompted 'unable to find a suitable version for angular'
choose most appropriate version or latest option.

Drupal Setup:
-----------
Step 1: Base Install
- Install D7
- Install Dependencies (views, services, services_views, cors, ctools, libraries)
- Enable Dependencies

Step 2: Create a REST Endpoint
- admin/structure/services.
- Choose "add new"
- use ```api``` for machine name, choose REST for the server, use ```api``` for the endpoint.
- In resources, enable retrieve for node, user, and views.

Step 3: Setup CORS
- admin/config/services/cors
- In the domains field, add ```*|http://127.0.0.1:9000``` (The IP set in your grunt.js file!)

Step 4: Create a views
- admin/structure/views
- Clone my view here: https://gist.github.com/drogers98/4b29270043028d19c187
- And another one here: https://gist.github.com/drogers98/11a7f3f0de41b2d029c2
- This creates a view of articles tagged with "setup," so make a few dummy articles and tag them.
- Check out the JSON at /api/views/setup.json
- Side Note: If you dont include a label on fields like "body" in the view, the JSON sometimes gets wanky.

Step 5: Add fields to user
- admin/config/people/accounts/fields
- Add fields for Name, Bio (field_name, field_bio)
- Fill in these fields for user 1 (That's you admin!)
- Set permissions for anon users to "view user profile" in admin/people/permissions

Issues:
-----------
- The json coming out of (stock) drupal can be array hell. If you use views, it gets a lot easier BTW! WSCII initiative has some paths forward for D8, and there are a few other ways around this in D7, which I won't go into here.

Helpful Resources:
-----------
- http://friendlymachine.net/posts/headless-drupal-it-just-might-be-bigger-deal-twig
- https://austin2014.drupal.org/session/build-drupal-free-theme-8s-rest-api-and-javascript
- https://www.getpantheon.com/blog/headless-drupal-demo-working-code-and-call-action
- http://awebfactory.com/node/530

May the force be with you young Padawan.
