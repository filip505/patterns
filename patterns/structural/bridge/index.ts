interface DeviceI{
    on: boolean
    isEnabled(): Boolean
    enable(): void
    disable(): void
    getVolume(): number
    setVolume(percent: number): void
    getChannel(): number
    setChannel(chanel: number): void
    printStatus(): void
}

class Radio implements DeviceI{
    on: boolean = false
    volume: number = 30
    channel: number = 1

    isEnabled(): boolean{
        return this.on
    }

    disable(){
        this.on = false
    }

    enable(){
        this.on = true
    }
    
    getVolume(): number {
        return this.volume
    }

    setVolume(percentige: number){
        this.volume = percentige
    }

    getChannel(): number{
        return this.channel
    }

    setChannel(chanel: number){
        this.channel = this.channel
    }

    printStatus(){
        console.log('radio')
        console.log('on:', this.on)
        console.log('volume: ', this.volume)
        console.log('chanel', this.channel)
    }
}

interface RemoteI {
    power(): void
    volumeDown(): void
    volumeUp(): void
    chanelDown(): void
    chanelUp(): void
}

class BasicRemote implements RemoteI{
    protected device: DeviceI

    constructor(device: DeviceI){
        this.device = device
    }

    power(){
        if(this.device.on){
            this.device.disable()
        }else{
            this.device.enable()
        }
    }

    volumeDown(){
        this.device.setVolume(this.device.getVolume() - 10)
    }
    
    volumeUp(){
        this.device.setVolume(this.device.getVolume() + 10)
    }

    chanelDown(){
        this.device.setChannel(this.device.getChannel() - 1)
    }

    chanelUp(){
        this.device.setChannel(this.device.getChannel() + 1)
    }
}

class SmartRemote extends BasicRemote{

    constructor(device: DeviceI){
        super(device)
    }

    mute(){
        this.device.setVolume(0)
    }
}

console.log('Basic remote')
const radio = new Radio()
const basicRemote = new BasicRemote(radio)
basicRemote.power()
basicRemote.chanelUp()
radio.printStatus()

console.log('smart remote')
const smartRemote = new SmartRemote(radio)
smartRemote.mute()
radio.printStatus()