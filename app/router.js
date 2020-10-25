import EmberRouterScroll from '@ember/routing/router';
import config from 'portfolio/config/environment';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('blog', function() {
    this.route('show');
  });
  this.route('certificates');
  this.route('contact');
  this.route('projects', function() {
    this.route('markdown-previewer');
  });
});


// Example for changing route name! this.route('blog', { path: 'blog-posts'});