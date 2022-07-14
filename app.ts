abstract class Logger {
	abstract log(message: string): void;

	printDate(date: Date) {
		this.log(date.toString())
	}
}

class MyLogger extends Logger {
	log(message: any): void {
		console.log(message)
	}

	logWithDate(message: string){
		let date = new Date;
		this.printDate(date)
		this.log(message)

	}
}

const c = new MyLogger;
c.logWithDate("Все отлично")