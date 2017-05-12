"use strict";
var Reservation = (function () {
    function Reservation() {
    }
    return Reservation;
}());
exports.Reservation = Reservation;
var RESERVATIONS = [
    { id: 11, date: '05/05/2016', startHour: '12:00', duur: '30' },
    { id: 11, date: '05/05/2016', startHour: '12:00', duur: '30' },
    { id: 11, date: '05/05/2016', startHour: '12:00', duur: '30' },
    { id: 11, date: '05/05/2016', startHour: '12:00', duur: '30' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Reservaties';
        this.reservations = RESERVATIONS;
        this.reservation = {
            id: 1,
            date: '05/05/2016',
            startHour: '12:00',
            duur: '30'
        };
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map