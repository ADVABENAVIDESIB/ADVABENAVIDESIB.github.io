import { Tab1Page } from './../tab1/tab1.page';
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab:any;
  @ViewChild('tabs', {static: false})
  
  tabs: IonTabs | undefined;
  constructor() {

  }
  setCurrentTab(){
    this.selectedTab = this.tabs?.getSelected();
    console.log(this.selectedTab);
    
  }
}
