import { Component } from '@angular/core';

export class Reservation {
  id: number;
  date: string;
  startHour: string;
  duur: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{reservation.date}}</h2>
    <div><label>id: </label>{{reservation.id}}</div>
    <div>
      <label>date: </label>
      <input [(ngModel)]="reservation.date" placeholder="name">
      <br>
      <label>startuur: </label>
      <input [(ngModel)]="reservation.startHour" placeholder="startuur">
      <br>
      <label>duur in minuten: </label>
      <input [(ngModel)]="reservation.duur" placeholder="duur in min">
      <br>
      <input type="submit" value="Reservatie toevoegen" >
    </div>

    <h1>Reservaties</h1>
    <ul class="heroes">
      <li *ngFor="let reservation of reservations">
        <span class="badge">{{reservation.id}}</span> {{reservation.date}} {{reservation.startHour}}
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})

const RESERVATIONS: Reservation[] = [
  { id: 11, date: '05/05/2016', startHour : '12:00', duur : '30' },
  { id: 11, date: '05/05/2016', startHour : '12:00', duur : '30' },
  { id: 11, date: '05/05/2016', startHour : '12:00', duur : '30' },
  { id: 11, date: '05/05/2016', startHour : '12:00', duur : '30' },
];


export class AppComponent  {
  title = 'Reservaties';
  reservations = RESERVATIONS;
  reservation: Reservation = {
    id: 1,
    date: '05/05/2016',
    startHour : '12:00',
    duur : '30'
  };

}

