;'use strict';



(function QuestorModule() {


class Questor extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return ce('div',
      {
        key: 'questor',
      },
      'Questor'
    );
  }
}


window.registerApplication('questor', ce(Questor));
window.loadApplication('questor');















})();
















