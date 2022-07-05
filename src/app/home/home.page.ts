import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from '../api.service';
import { CatFact } from '../cat-fact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  catFacts: Array<CatFact>;
  constructor(private apiService: ApiService, private platform: Platform) {}

  async ngOnInit(): Promise<void> {
    await this.platform.ready();
    const tmp = JSON.stringify(await this.apiService.getFacts());
    // 5a9ac18c7478810ea6c06381
    this.data = tmp.includes('cat');
  }

}
