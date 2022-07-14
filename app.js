"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        let date = new Date;
        this.printDate(date);
        this.log(message);
    }
}
const c = new MyLogger;
c.logWithDate("Все отлично");
