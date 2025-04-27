import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Modification {
  id?: string;
  vehicle: string;
  description: string;
  cost: number;
  imageUrl?: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationService {
  private modificationsCollection: AngularFirestoreCollection<Modification>;
  modifications: Observable<Modification[]>;

  constructor(private afs: AngularFirestore) {
    this.modificationsCollection = afs.collection<Modification>('modifications', ref => ref.orderBy('date', 'desc'));
    // Using an observable to monitor Firestore changes
    this.modifications = this.modificationsCollection.valueChanges({ idField: 'id' });
  }

  // Observable example – returns a stream of modification data
  getModifications(): Observable<Modification[]> {
    return this.modifications;
  }

  // Promise example – adds a modification entry and returns a promise
  addModification(mod: Modification): Promise<any> {
    return this.modificationsCollection.add(mod);
  }
}
