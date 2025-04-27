import { Component, OnInit } from '@angular/core';
import { Modification, ModificationService } from '../services/modification.service';

@Component({
  selector: 'app-modifications-list',
  templateUrl: './modifications-list.page.html',
  styleUrls: ['./modifications-list.page.scss'],
})
export class ModificationsListPage implements OnInit {
  modifications!: Modification[];

  constructor(private modificationService: ModificationService) {}

  ngOnInit() {
    // Subscribe to the observable (async via Observable pattern)
    this.modificationService.getModifications().subscribe(data => {
      this.modifications = data;
    });
  }
}
