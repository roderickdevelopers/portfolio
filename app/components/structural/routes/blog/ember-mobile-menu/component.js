import Component from '@glimmer/component';

export default class StructuralRoutesBlogEmberMobileMenuComponent extends Component {
  codePathOne = '~/your/file/path/to/yourproject [master] git checkout ';
  codeOne = '"name-of-your-feature-branch"';
  codePathTwo = '~/your/file/path/to/yourproject [master] git branch';
  codeTwo = '* master';
  paragraphOne = 'In this post, we will show you how to use ember-mobile-menu, the issues that we overcame in setting it up, and the final implementation, with real-world code examples. Let us preface this by saying that we are both Junior Developers, not inexperienced, but certainly not gurus. We have spent the last few years learning HTML, CSS, and JavaScript (and are currently looking for our first entry-level positions!) We love Ember, but have experience with React as well.';
  paragraphTwo = 'We will take you through our attempts, show you what not to do, and show you what we did to actually make it work correctly. We did not do this on our own. Something that sets the Ember community apart from others is that you can almost always speak directly with the authors of an add-on, asking questions through Discord and working through your code. When we got stuck, we messaged the very helpful developer of this add-on Nick Schot, who gave us some much-needed guidance in the right direction.';
  paragraphThree = 'We are using Ember Octane 3.21. This is for a simple portfolio site. We wanted a way to implement a user-friendly mobile menu that was capable of swipe gesturing, and we wanted one that we did not need to spend weeks building. Enter Ember-Mobile-Menu.';
  paragraphFour = 'On our first attempt, we decided that we wanted to make the ember-mobile-menu into its own component. Our understanding of how the add-on worked was flawed at this point, but we did not know that. The basic idea was that we could break it out into its own component and place it in the header component, which we’d then call in each of our routes. It seemed simple enough. And this did work, but we had to have overrides for the SCSS for it to work even close to "correctly".';
  paragraphFive = 'We asked ourselves, should we be doing this? The answer was a quick NO! When using an add-on, if you find yourself overriding all kinds of CSS to make it work like you need it to, take a step back and rethink your approach. The author wrote this code to work, not to give you headaches. That is not to say that overriding some styles is not necessary sometimes, but it should not be necessary all the time.';
  paragraphSix = 'The overrides also made it so that when you click out of the menu the scrolling stopped on our site because it set overflow: hidden; to the body. This is intended behavior on the part of the add-on. When the menu is open, it should turn scrolling off on the body behind it, or the user would scroll through the underlying content, which meant that when the user clicked out of the mobile-menu, they would end up in a random spot on the main page. That is not good. We also initially tried wrapping it in a flex container and it broke everything. Do not wrap it in a flex container!';
  articleTitle = 'Ember-Mobile-Menu';
  creator = 'Edited for content by: Nick Schot';
  blogSubjectLink = 'https://nickschot.github.io/ember-mobile-menu/';
  
}