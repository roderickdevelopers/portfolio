import Component from '@glimmer/component';

export default class StructuralRoutesProjectsIndexComponent extends Component {
  projectOneProjectTitle = 'Markdown Previewer';
  projectOneProjectDescription = 'This was a project for FreeCodeCamp, but I wanted to move it from a CodePen over to a real app, so I could understand the process of creating a React app from scratch. I learned a lot from building it.';
  projectOneBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/markdownpreview.webp';
  projectOneIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.webp';
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
  projectOneBlockFiveLabel = 'See the Code';
  projectOneBlockSixText = 'Live Site';
  projectOneBlockSixLabel = 'See it in Action';

  projectTwoProjectTitle = 'Sleepy Forest Maple';
  projectTwoProjectDescription = 'This was a nice, basic website that was needed for a small company to showcase their products. They wanted to start with a simple layout and have the ability to scale it up easily as they grew.';
  projectTwoBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/sleepyforestmaple.webp';
  projectTwoIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.webp';
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
  projectTwoBlockFiveLabel = 'See the Code';
  projectTwoBlockSixText = 'Live Site';
  projectTwoBlockSixLabel = 'See it in Action';

  projectThreeProjectTitle = 'Ember Octane Boilerplate';
  projectThreeProjectDescription = 'I\'ve set up a very nice boilerplate with all the needed add-ons, and a folder structure that splits components into reusable, layout, or utility types.  It uses css-modules with scss, and includes all relevant bases files, such as a variables sheet with some presets and some basic components, such as  skip-link and a button. Updated to the latest Ember Octane!';
  projectThreeBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberboilerplatelogo.webp';
  projectThreeIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/emberstack.webp';
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
  projectThreeBlockFiveLabel = 'See the Code';
  projectThreeBlockSixText = 'Live Site';
  projectThreeBlockSixLabel = 'See it in Action';

  projectFourProjectTitle = 'React Boilerplate';
  projectFourProjectDescription = 'When starting my first React project, I realized that setting up a new project each time could be frustrating.  I have been using my Ember Boilerplate for all my other projects and I\'m used to the file structure, so I set up a React Boilerplate the exact same way!  Now, whether I\'m using React Or Ember I can easily start right up because I am already familiar with the file structure and components.';
  projectFourBlockOneImage = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactboilerplate.webp';
  projectFourIconOne = 'https://roderickdevelopers.s3.us-east-2.amazonaws.com/reactstack.webp';
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
  projectFourBlockFiveLabel = 'See the Code';
  projectFourBlockSixText = 'Live Site';
  projectFourBlockSixLabel = 'See it in Action';

 

  // projectSixProjectTitle = 'Project 6 React';
  // projectSixProjectDescription = 'Description Goes Here!!';
  // projectSixBlockOneImage = '/assets/images/RyanHeadShot.png';
  // projectSixIconOne = '/assets/images/reacticon.png';
  // projectSixIconTwo = '';
  // projectSixIconThree = '';
  // projectSixBlockTwoLabel = 'Stack';
  // projectSixBlockThreeTextOne = '1 - This is where a short description of Challenges will go';
  // projectSixBlockThreeTextTwo = '2 - This is where a short description of Challenges will go';
  // projectSixBlockThreeTextThree = '3 - This is where a short description of Challenges will go';
  // projectSixBlockThreeLabel = 'Challenges';
  // projectSixBlockFourTextOne = '1 - This is where a short description of solutions goes';
  // projectSixBlockFourTextTwo = '2 - This is where a short description of solutions goes';
  // projectSixBlockFourTextThree = '3 - This is where a short description of solutions goes';
  // projectSixBlockFourTextFour = '4 - This is where a short description of solutions goes';
  // projectSixBlockFourTextFive = '5 - This is where a short description of solutions goes';
  // projectSixBlockFourLabel = 'Solutions';
  // projectSixGithubUrl = '';
  // projectSixBlockFiveText = 'Repo';
  // projectSixBlockFiveLabel = 'See the Code';
  // projectSixBlockSixText = 'Live Site';
  // projectSixBlockSixLabel = 'See it in Action';
}