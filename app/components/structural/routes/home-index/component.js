import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StructuralRoutesHomeIndex extends Component {
  paragraphOne = 'I am currently looking for work. I make fast, responsive websites and have used Ember.js, React, and Vue.';
  paragraphTwo = 'I am always learning new skill sets and expanding my knowledge in Web Development. I started back in 2014 with android web development and made a few themes .apks for a text messaging application. I am now taking on Web Development! I started freeCodeCamp in November 2019 and have been pushing my skills every day.';
  paragraphThree = 'This website site was built with ember octane from a boilerplate I helped create with ';
  paragraphFour = ' The boilerplate is updated to the latest ember version with all the necessary add ons.';
  paragraphFive = 'This last year I have been doing an Internship with Design Monster. In the process of my internship, I have done pair programming, design, learned best practices, accessibility, and have learned three frameworks!' ;
  paragraphSix = 'I am a hard worker who will get the job done, ask questions when needed, and take constructive criticism. I strive to do the very best!';
  paragraphSeven = 'These are some of the frameworks I have worked with while learning how to code and build websites. Vue.js will be soon added to this, currently working on a project with Vue.js! (excited to learn more)';
  paragraphEight = 'In my projects, I have a few things on there built with both React and Ember.js, and I even have a boilerplate for both. Try them out!';
  paragraphNine = 'Go ahead and check my ';
  typingLineOne = 'Hello,';
  typingLineTwo = 'My name is Matthew Roderick';
  typingLineThree = 'I\'m a Front End Developer!';

    @action
    backToTop() {
      // console.log("You just fired the back to top action when you clicked back to top button");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

