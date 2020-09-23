import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StructuralUiFooter extends Component {
  @action
  scrollToTop() {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: 0,
    });
    console.log('you are in scroll to top function')
  }
}
