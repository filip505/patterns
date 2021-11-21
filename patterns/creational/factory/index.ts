interface ChairProductI{
    sit(): string
}

interface SofaProductI{
    lay(): string
}

interface FurnatureFactoryI{
    createChair(): ChairProductI
    createSofa(): SofaProductI
}

class FurnatureFactory implements FurnatureFactoryI{
    createChair(): ChairProductI{
        return new Chair()
    }

    createSofa(): SofaProductI{
        return new Sofa()
    }
}

class Chair implements ChairProductI{
    sit(): string {
        return "sitting on chair"
    }
}

class Sofa implements SofaProductI{
    lay(): string {
        return "laying on sofa"
    }
}

const factory = new FurnatureFactory()
const chair = factory.createChair()
chair.sit()