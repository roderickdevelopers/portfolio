import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StructuralRoutesGitForBeginnersRouteComponent extends Component {
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