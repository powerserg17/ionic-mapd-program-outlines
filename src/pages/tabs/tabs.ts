import { Component } from '@angular/core';

import { Description } from '../description/description';
import { Outline } from '../outline/outline';
import { Professors } from '../professors/professors';
import {Feedback} from '../feedback/feedback';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Description;
  tab2Root = Outline;
  tab3Root = Professors;
  tab4Root = Feedback;

  constructor() {

  }
}
