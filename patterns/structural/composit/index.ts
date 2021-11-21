abstract class Component {
    private parent: Component;

    public setParent(parent: Component){
        this.parent = parent
    }

    public getParent(parent: Component): Component{
        return this.parent
    }

    add(component: Component){}

    remove(component: Component){}
        
    public isComposite(): boolean { 
        return false;
    }

    public abstract operation(): string;
}

class Leaf extends Component{
    public operation(): string{ 
        return 'Leaf'
    }
}

class Composite extends Component{
    protected children: Component[] = []

    public add(component: Component): void{
        this.children.push(component)
        component.setParent(this)
    }

    public remove(component: Component): void{
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    public isComposite(): boolean {
        return true
    }

    public operation(): string{
        const results = []
        for(const child of this.children){
            results.push(child.operation())
        }
        return `Branch(${results.join('+')})`; 
    }

}

const clientCode = (component: Component) => {
    console.log(`RESULT: ${component.operation()}`)
}

const simple = new Leaf()
console.log('Client: I\'ve got a simple component:')
clientCode(simple)
console.log('')

const tree = new Composite();

const branch1 = new Composite()
branch1.add(new Leaf())
branch1.add(new Leaf())

const branch2 = new Composite()
branch2.add(new Leaf())

tree.add(branch1)
tree.add(branch2)

clientCode(tree)