interface SofaBuilder{
    setColor(color: string): void
    setMaterial(material: string): void
    setSize(size: number): void
    setLShape(lShape: Boolean): void
}

interface SofaProductI{
    lay(): void
}

class Sofa implements SofaProductI{
    public color: string
    public material: string
    public size: number
    public lshape: boolean

    public lay(): void {
        console.log(`im laying down on ${this.color? this.color: ''} ${this.material? this.material: ''} ${this.lshape? 'l-shaped': ''} sofa (size ${this.size})`)
    }
}


interface ManualI{
    listPages(): void
}



class Manual implements ManualI{
    private pages: string[]

    constructor(){
        this.pages = []
    }

    setPage(page: string){
        this.pages.push(page)
    }

    listPages(){
        this.pages.forEach((page, index)=>console.log(`page ${index}:`, page))
    }
}

class ConcreteProductBuilder implements SofaBuilder{

    private product: Sofa;

    constructor(){
        this.reset()
    }

    reset(){
        this.product = new Sofa()
    }

    setColor(color: string){
        this.product.color = color
    }

    setMaterial(material: string){
        this.product.material = material
    }

    setSize(size: number){
        this.product.size = size
    }
    
    setLShape(lshape: boolean){
        this.product.lshape = lshape
    }

    getProduct(): Sofa{
        const product = this.product
        this.reset()
        return product
    }

}

class ConcreteManualBuilder implements SofaBuilder{

    private manual: Manual;

    constructor(){
        this.reset()
    }

    reset(){
        this.manual = new Manual()
    }

    setColor(color: string){
        this.manual.setPage(`color ${color}`)
    }

    setMaterial(material: string){
        this.manual.setPage(`material ${material}`)
    }

    setSize(size: number){
        this.manual.setPage(`size ${size}`)
    }
    
    setLShape(lshape: boolean){
        this.manual.setPage(`lshape ${lshape}`)
    }

    getProduct(): Manual{
        const manual = this.manual
        this.reset()
        return manual
    }

}

class Director{
    private builder: SofaBuilder

    public setBuilder(builder: SofaBuilder){
        this.builder = builder
    }

    public createVerba(){
        this.builder.setSize(2)
        this.builder.setColor('blue')
        this.builder.setLShape(true),
        this.builder.setMaterial('wood')
    }
}

const builder = new ConcreteProductBuilder()
const director = new Director()
director.setBuilder(builder)
director.createVerba()
builder.getProduct().lay()

const manualBuilder = new ConcreteManualBuilder()
director.setBuilder(manualBuilder)
director.createVerba()
manualBuilder.getProduct().listPages()