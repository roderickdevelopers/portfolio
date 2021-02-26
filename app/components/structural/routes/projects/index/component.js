import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StructuralRoutesProjectsIndexComponent extends Component {
  projectOneProjectTitleTop = 'Markdown Previewer';
  projectOneProjectDescription = 'This was a project for FreeCodeCamp. I wanted to build an actual React Project, so I could understand JSX better and see the file structure they used, so after digging around a bit in react I built a boilerplate and set up a file structure I was used to and build this markdown previewer in the boilerplate I created.';
  projectOneBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/markdownpreview.webp';
  projectOneBlockOneImageFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/markdownpreview.png';
  projectOneIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.webp';
  projectOneIconOneFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.png';
  projectOneIconTwo = '';
  projectOneIconThree = '';
  projectOneIconFour = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/gitlogo.webp';
  projectOneBlockTwoLabel = 'Stack';
  projectOneBlockThreeLabel = 'Challenges';
  projectOneBlockThreeTextOne = '1 - First time building a React App';
  projectOneBlockThreeTextTwo = '2 - From CodePen project to a real site';
  projectOneBlockThreeTextThree = '3 - Add a Copy Button for User';
  projectOneBlockThreeTextFour = '4 - Make responsive and have editor and previewer side by side for user';
  projectOneBlockFourLabel = 'Solutions';
  projectOneBlockFourTextOne = '1 - Setting up folder structure to resemble my Ember folder structure so that I would be more familiar working in React ';
  projectOneBlockFourTextTwo = '2 - Learning React best practices.';
  projectOneBlockFourTextThree = '3 - Built Copy Button with vanilla JS to copy to clipboard';
  projectOneBlockFourTextFour = '4 - Made responsive with Flex Layout';
  projectOneBlockFourTextFive = '';
  projectOneGithubUrl = 'https://github.com/roderickdevelopers/React_Markdown_Previewer';
  projectOneLiveUrl = 'https://roderickdevelopers.github.io/React_Markdown_Previewer/#/';
  projectOneBlockFiveText = 'Repo';
  projectOneBlockFiveLabel = 'See The Code';
  projectOneBlockSixText = 'Live Site';
  projectOneBlockSixLabel = 'See It In Action';

  projectTwoProjectTitle = 'Sleepy Forest Maple (Coming Soon)';
  projectTwoProjectDescription = 'This is a nice little Maple Syrup Website I built for a small company in Richmond, NH, called Sleepy Forest Maple. It is meant to be a simple layout with room to expand as their company grows.';
  projectTwoBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/sleepyforestmaple.webp';
  projectTwoBlockOneImageFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/sleepyforestmaple.png'
  projectTwoIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.webp';
  projectTwoIconOneFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.png';
  projectTwoIconTwo = '';
  projectTwoIconThree = '';
  projectTwoBlockTwoLabel = 'Stack';
  projectTwoBlockThreeLabel = 'Challenges';
  projectTwoBlockThreeTextOne = '1 - This is where a short description of Challenges will go';
  projectTwoBlockThreeTextTwo = '2 - This is where a short description of Challenges will go';
  projectTwoBlockThreeTextThree = '3 - This is where a short description of Challenges will go';
  projectTwoBlockFourLabel = 'Solutions';
  projectTwoBlockFourTextOne = '1 - This is where a short description of solutions goes';
  projectTwoBlockFourTextTwo = '2 - This is where a short description of solutions goes';
  projectTwoBlockFourTextThree = '3 - This is where a short description of solutions goes';
  projectTwoBlockFourTextFour = '';
  projectTwoBlockFourTextFive = '';
  projectTwoGithubUrl = 'https://github.com/Design-Monster/Sleepy-Forest-Maple';
  projectTwoLiveUrl = 'https://www.google.com/';
  projectTwoBlockFiveText = 'Repo';
  projectTwoBlockFiveLabel = 'See The Code';
  projectTwoBlockSixText = 'Live Site';
  projectTwoBlockSixLabel = 'See It In Action';

  projectThreeProjectTitle = 'Ember Octane Boilerplate';
  projectThreeProjectDescription = 'Since starting in web development I fell in love with Ember.js. I have helped set up a boilerplate with Design Monster with a simple file structure that makes sense to me and makes my workflow much faster. It has all the needed add-ons to get started and make a great site. It has breakpoints included as well as css-modules with scss, variables file with examples, and much more! Please check it out and use it if you\'re interested. Updated to the latest Ember Octane!';
  projectThreeBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberboilerplatelogo.webp';
  projectThreeBlockOneImageFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberboilerplatelogo.png';
  projectThreeIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.webp';
  projectThreeIconOneFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.png';
  projectThreeIconTwo = '';
  projectThreeIconThree = '';
  projectThreeBlockTwoLabel = 'Stack';
  projectThreeBlockThreeLabel = 'Challenges';
  projectThreeBlockThreeTextOne = '1 - It needed to be generic enough so that the project would be usable by anyone, but complex enough so that it was worth using in the first place.';
  projectThreeBlockThreeTextTwo = '2 - I wanted to have my own folder structure in routes to keep all files in one folder. Ember did not allow this.';
  projectThreeBlockThreeTextThree = '3 - I wanted it to be responsive out of the box.';
  projectThreeBlockFourLabel = 'Solutions';
  projectThreeBlockFourTextOne = '1 - I built example components with instructions on how to use the folder structure.';
  projectThreeBlockFourTextTwo = '2 - I modified Ember\'s resolver (with help from the community) to allow the type of structure that I wanted. If you look at the code, all ROUTE files (route.js, template.hbs, adapter, controller, and serializer) are kept together now. It makes sense in my head to do it this way';
  projectThreeBlockFourTextThree = '3 - I\'ve included my own custom breakpoint mixin (scss) as well as ember-responsive, which allows the site to be responsive without any further work by the user.';
  projectThreeBlockFourTextFour = '';
  projectThreeBlockFourTextFive = '';
  projectThreeGithubUrl = 'https://github.com/Design-Monster/ember-octane-boilerplate';
  projectThreeLiveUrl = 'https://www.google.com/';
  projectThreeBlockFiveText = 'Repo';
  projectThreeBlockFiveLabel = 'See The Code';
  projectThreeBlockSixText = 'Live Site';
  projectThreeBlockSixLabel = 'See It In Action';

  projectFourProjectTitle = 'React Boilerplate';
  projectFourProjectDescription = 'When starting my first React project, I realized that setting up a new project each time could be frustrating and time consuming.  I have been using my Ember Boilerplate for all my other projects and I\'m used to the file structure, so I set up a React Boilerplate with the same file structure!  Now, when I\'m using React I can easily start right up because I am already familiar with the file structure and components.';
  projectFourBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactboilerplate.webp';
  projectFourBlockOneImageFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactboilerplate.png';
  projectFourIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.webp';
  projectFourIconOneFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.png';
  projectFourIconTwo = '';
  projectFourIconThree = '';
  projectFourBlockTwoLabel = 'Stack';
  projectFourBlockThreeLabel = 'Challenges';
  projectFourBlockThreeTextOne = '1 - I wanted anyone, including myself, to open it and understand where they were and how to proceed.';
  projectFourBlockThreeTextTwo = '2 - I wanted responsiveness out of the box.';
  projectFourBlockThreeTextThree = '3 - I wanted a data-down-actions-up structure.';
  projectFourBlockFourLabel = 'Solutions';
  projectFourBlockFourTextOne = '1 - I set up some dummy components using the file structure that I was used to. These showed the user exactly where things were built and called in each template.';
  projectFourBlockFourTextTwo = '2 - I set up react-responsive with working examples of how to use it.';
  projectFourBlockFourTextThree = '3 - I used the same file and folder structure as I had honed in Ember.';
  projectFourBlockFourTextFour = '';
  projectFourBlockFourTextFive = '';
  projectFourGithubUrl = 'https://github.com/Design-Monster/react-boilerplate';
  projectFourLiveUrl = 'https://www.google.com/';
  projectFourBlockFiveText = 'Repo';
  projectFourBlockFiveLabel = 'See The Code';
  projectFourBlockSixText = 'Live Site';
  projectFourBlockSixLabel = 'See It In Action';
  

  // projectFiveProjectTitle = 'Vue Boilerplate';
  // projectFiveProjectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Tempor id eu nisl nunc. Nam aliquam sem et tortor consequat id porta nibh. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.';
  // projectFiveBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/vueboilerplate.webp';
  // projectFourBlockOneImageFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/vueboilerplate.png';
  // projectFiveIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/vuestack.png';
  // projectFiveIconOneFallBack = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/vuestack.png';
  // projectFiveIconTwo = '';
  // projectFiveIconThree = '';
  // projectFiveBlockTwoLabel = 'Stack';
  // projectFiveBlockThreeTextOne = '1 - This is where a short description of Challenges will go';
  // projectFiveBlockThreeTextTwo = '2 - This is where a short description of Challenges will go';
  // projectFiveBlockThreeTextThree = '3 - This is where a short description of Challenges will go';
  // projectFiveBlockThreeLabel = 'Challenges';
  // projectFiveBlockFourTextOne = '1 - This is where a short description of solutions goes';
  // projectFiveBlockFourTextTwo = '2 - This is where a short description of solutions goes';
  // projectFiveBlockFourTextThree = '3 - This is where a short description of solutions goes';
  // projectFiveBlockFourTextFour = '4 - This is where a short description of solutions goes';
  // projectFiveBlockFourTextFive = '5 - This is where a short description of solutions goes';
  // projectFiveBlockFourLabel = 'Solutions';
  // projectFiveGithubUrl = '';
  // projectFiveBlockFiveText = 'Repo';
  // projectFiveBlockFiveLabel = 'See the Code';
  // projectFiveBlockSixText = 'Live Site';
  // projectFiveBlockSixLabel = 'See it in Action';  

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