import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class StructuralRoutesBlogEmberMobileMenuComponent extends Component {
  codePathOne = '<Structural::Ui::Navigation::Mobile>';
  codeOne = '{{outlet}}';
  codePathTwo = '<Structural::Ui::Navigation::Mobile>';
  codeTwo = '* master';
  codeTwoOutlet = '{{outlet}}';
  codePathThree = '<MobileMenuWrapper as | mmw | >';
  codePathFour = '< mmw.MobileMenu as | mm | >';
  codePathFive = '<mm.LinkTo @route="index">Home</mm.LinkTo>';
  codePathSix = '</mmw.MobileMenu>';
  codePathSeven = '<mmw.Content>';
  codePathEight = '<mmw.Toggle>Menu</mmw.Toggle>';
  codeEightOutlet = '{{yield}}';
  codePathNine = '</mmw.Content>';
  codePathTen = '</MobileMenuWrapper>';
  codePathEleven = '{{#if (or (media \'is small \' )  (media \'isMedium \' ))}';
  codePathTwelve = '<Dynamic::Ui::Navigation::Mobile>';
  codePathThirteen = '</Dynamic::Ui::Navigation::Mobile>';
  codePathFourteen = '{{else}}';
  codePathFifteen = '{{/if}}';
  codeThree = '* master';

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