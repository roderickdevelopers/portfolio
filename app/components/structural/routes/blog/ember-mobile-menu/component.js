import Component from '@glimmer/component';

export default class StructuralRoutesBlogEmberMobileMenuComponent extends Component {
  emberCodePathOne = '<Structural::Ui::Navigation::Mobile>';
  emberCodeOne = '{{outlet}}';
  emberCodePathTwo = '<Structural::Ui::Navigation::Mobile>';
  emberCodeTwo = '* master';
  emberCodeTwoOutlet = '{{ outlet }}';
  emberCodePathThree = '<MobileMenuWrapper as | mmw | >';
  emberCodePathFour = '< mmw.MobileMenu as | mm | >';
  emberCodePathFive = '<mm.LinkTo @route="index">Home</mm.LinkTo>';
  emberCodePathSix = '</mmw.MobileMenu>';
  emberCodePathSeven = '<mmw.Content>';
  emberCodePathEight = '<mmw.Toggle>Menu</mmw.Toggle>';
  emberCodeEightOutlet = '{{ yield }}';
  emberCodePathNine = '</mmw.Content>';
  emberCodePathTen = '</MobileMenuWrapper>';
  emberCodePathEleven = '{{#if (or (media \'is small \' )  (media \'isMedium \' ))}}';
  emberCodePathTwelve = '<Dynamic::Ui::Navigation::Mobile>';
  emberCodePathThirteen = '</Dynamic::Ui::Navigation::Mobile>';
  emberCodePathFourteen = '{{else}}';
  emberCodePathFifteen = '{{/if}}';
  emberCodeThree = '* master';
  paragraphOne = 'In this post, we will show you how to use ember-mobile-menu, the issues that we overcame in setting it up, and the final implementation, with real-world code examples. Let\'s preface this by saying that we are both Junior Developers, not inexperienced, but certainly not gurus. We have spent the last few years learning HTML, CSS, and JavaScript (and are currently looking for our first entry-level positions!) We love Ember, but have experience with React as well.';
  paragraphTwo = 'We\'ll take you through our attempts, show you what not to do, and show you what we did to actually make it work correctly. We didn\'t do this on our own. Something that sets the Ember community apart from others is that you can almost always speak directly with the authors of an add-on, asking questions through Discord and working through your code. When we got stuck, we messaged the very helpful developer of this add-on Nick Schot, who gave us some much-needed guidance in the right direction.';
  paragraphThree = 'We are using Ember Octane 3.21. This is for a simple portfolio site. We wanted a way to implement a user-friendly mobile menu that was capable of swipe gesturing, and we wanted one that we didn\'t need to spend weeks building. Enter Ember-Mobile-Menu.';
  emberHeaderOne = '1st Attempt:';
  paragraphFour = 'On our first attempt, we decided that we wanted to make the ember-mobile-menu into its own component. Our understanding of how the add-on worked was flawed at this point, but we didn\'t know that. The basic idea was that we could break it out into its own component and place it in the header component, which we’d then call in each of our routes. It seemed simple enough. And this did work, but we had to have overrides for the SCSS for it to work even close to "correctly".';
  paragraphFive = 'We asked ourselves, should we be doing this? The answer was a quick NO! When using an add-on, if you find yourself overriding all kinds of CSS to make it work like you need it to, take a step back and rethink your approach. The author wrote this code to work, not to give you headaches. That is not to say that overriding some styles is not necessary sometimes, but it should not be necessary all the time.';
  paragraphSix = 'The overrides also made it so that when you click out of the menu the scrolling stopped on our site because it set overflow: hidden; to the body. This is intended behavior on the part of the add-on. When the menu is open, it should turn scrolling off on the body behind it, or the user would scroll through the underlying content, which meant that when the user clicked out of the mobile-menu, they would end up in a random spot on the main page. That is not good.';
  paragraphSeven = 'We also initially tried wrapping it in a flex container and it broke everything. Don\'t wrap it in a flex container!';
  emberHeaderTwo = '2nd attempt.';
  paragraphEight = ' So after contacting the developer via discord, we troubleshot some things, and he told us that having it in all our routes separately was not the correct way to use this add-on. As a beginner, this was not immediately clear to us in the documentation. We had understood that we needed it "high up in the DOM", as per his instructions, but we did not understand what that meant exactly. So what is "high in the Dom"?';
  paragraphNine = 'Again, we are Junior Developers. We knew the term, but try googling it. Not much that is useful comes up, and our understanding of it was lacking, therefore our understanding of the documentation for mobile-menu was incorrect.';
  paragraphTen = 'We kept the add-on itself as a component, figuring that gave us the most flexibility in using it. Knowing that we could not place it individually in each route, we turned to the application ROUTE template, which, in Ember, gives you a place to put code that propagates across ALL routes. **CHECK THIS DEFINITION IN THE GUIDES';
  paragraphEleven = 'This sort of worked. But not really. The menu was not behaving as it should and was not displaying on the site as intended.';
  emberHeaderThree = '3rd attempt.';
  paragraphTwelve = ' Contacting the developer again I had shown him how it was behaving. Nick had asked me if all of our website content was inside MMS Content. We did not understand what he had meant at that time. Again, it is not as if we were not using the guides, we simply had a fundamental misunderstanding of what they were telling us to. So we looked at several real-world examples by following the GitHub tab "Used By" on the right-hand side of the repo page for ember-mobile-menu. This is an excellent thing to remember for both new coders and experienced coders alike. By looking at how others have implemented this code, it can start to give you an idea of how to approach and use it in your projects. Even though it is incredible that you can contact the ember add-on owners directly, they are not going to write your code for you, and you will need to figure some things out on your own. Seeing how others had used it gave me a much better understanding of how I should be implementing this add-on and all of its content.';
  emberHeaderFour = '4th and successful attempt!';
  paragraphThirteen = 'At this point, we are SO CLOSE! We have got the mobile-menu on the screen, the behavior is not quite right, but we now know why. The content of your app needs to be INSIDE the section of mobile-menu called CONTENT. We did not understand this.';
  paragraphFourteen = 'We figured that this could be accomplished in a few different ways. One would be to simply have the code of mobile-menu in your application ROUTE template like so, placing your {{outlet}} inside:';
  paragraphFifteen = 'Which worked! The mobile-menu now does exactly what it is supposed to do! At this point, you can stop and use this setup if you would like, but that takes mobile-menu out of component form.';
  paragraphSixteen = 'We want the ember-mobile menu to be in component form, which is then passed to the application route template. So, we still had the component that we had broken it out into earlier, located in the component folder -> <Structural::Ui::Navigation::Mobile />. We simply call that component in block form in the application route template, making sure to put the {{outlet}} inside the blocks:';
  paragraphSeventeen = 'And then in the component itself, we add the {{yield}} to the CONTENT section that already exists within the ember-mobile-menu:';
  paragraphEighteen = ' Success! We now have ember-mobile-menu working, with the set up we prefer! If you don\'t understand the {{yield}} part, please refer to the docs HERE. It is an incredibly useful thing to use, though I admittedly don\'t understand much myself beyond the basic things that you can do with it.';
  paragraphNineteen = 'So we\'ve explained two ways that you can set it up yourself. One directly in the application route template, and one by putting ember-mobile-menu in its own component, and then calling that component in block form inside the application route template.';
  paragraphTwenty= 'We had one more problem, which was that we only want the mobile menu to show up on small and medium-sized screens, as defined in our breakpoints. It is, after all, a mobile menu. Although RoderickDevelopers does use it successfully on all screens on his <link>portfolio</link> and it looks great actually.';
  paragraphTwentyOne = 'To accomplish this we used ember-responsive, in combination with ember-truth-helpers (which is included with any new Octane App!) and write it like this:';
  paragraphTwentyTwo = 'And that\'s it! We now have ember-mobile-menu set up, with breakpoints controlling which device size it renders on. We hope this article has helped. Try out the add-on, it\'s very well made and easy to use.';
  paragraphTwentyThree = 'Ryan Roderick of DesignMonster & Matthew Roderick of RoderickDevelopers';
  paragraphTwentyFour = '';
  paragraphTwentyFive = '';
  paragraphTwentySix = '';
  articleTitle = 'Ember-Mobile-Menu';
  creator = 'Edited for content by: Nick Schot';
  blogSubjectLink = 'https://nickschot.github.io/ember-mobile-menu/';
}