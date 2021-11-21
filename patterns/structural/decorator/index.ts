// interface Component{
//     operation(): string
// }

// class ConcreteComponent implements Component{
//     public operation(): string{
//         return 'ConcreteComponent'
//     }
// }

// class Decorator implements Component{
//     protected component: Component;

//     constructor(component: Component) {
//         this.component = component
//     }

//     public operation(): string {
//         return this.component.operation()
//     }
// }

// class ConcreteDecoratorA extends Decorator {

//     public operation(): string { 
//         return `ConcreteDecoratorA(${super.operation()})`; 
//     }
// }

// class ConcreteDecoratorB extends Decorator {

//     public operation(): string { 
//         return `ConcreteDecoratorB(${super.operation()})`; 
//     }
// }

// function clientCode(component: Component) {
//     console.log(`RESULT: ${component.operation()}`);
// }

// const simple = new ConcreteComponent();
// console.log('Client: I\'ve got a simple component:');
// clientCode(simple);
// console.log('');

// const decorator1 = new ConcreteDecoratorA(simple);
// const decorator2 = new ConcreteDecoratorB(decorator1);
// console.log('Client: Now I\'ve got a decorated component:');
// clientCode(decorator2);

interface NotifierI{
    sendNotification(msg: string): void
}

class Decorator implements NotifierI{
    protected component?: NotifierI;

    constructor(component?: NotifierI) {
        this.component = component
    }

    public sendNotification(msg: string): void {
        if(this.component)
            this.component.sendNotification(msg)
    }
}

class SMSNotifier extends Decorator {
    sendNotification(msg: string): void{
        super.sendNotification(msg)
        console.log('sending sms notification', msg)
    }
}

class FacebookNotifier extends Decorator{
    sendNotification(msg: string): void{
        super.sendNotification(msg)
        console.log('sending facebook notification', msg)
    }
}

const smsNotifier = new SMSNotifier()
const facebookNotifier = new FacebookNotifier(smsNotifier)

facebookNotifier.sendNotification('hey')