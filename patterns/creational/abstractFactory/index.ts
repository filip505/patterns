interface FurnatureFactoryI{
    createChair(): ChairProductI
    createSofa(): SofaProductI
}

interface ChairProductI{
    sit(): string
}

interface SofaProductI{
    lay(): string
}

class VictorianFurnatureFactory implements FurnatureFactoryI{
    public createChair(): ChairProductI{
        return new VictorianChair()
    }

    public createSofa(): SofaProductI{
        return new VictorianSofa()
    }
}

class ModerFurnatureFactory implements FurnatureFactoryI{
    public createChair(): ChairProductI{
        return new ModernChair()
    }

    public createSofa(): SofaProductI{
        return new ModernSofa()
    }
}


class VictorianChair implements ChairProductI{
    public sit(): string{
        return "sitting on Victorian chair"
    }
}

class ModernChair implements ChairProductI{
    public sit(): string{
        return "sitting on Modern chair"
    }
}

class VictorianSofa implements SofaProductI{
    public lay(): string{
        return "sitting on Victorian sofa"
    }
}

class ModernSofa implements SofaProductI{
    public lay(): string{
        return "sitting on Modern sofa"
    }
}

const client = (factory: FurnatureFactoryI) => {
    const chair = factory.createChair()
    const sofa = factory.createSofa()
    console.log(chair.sit())
    console.log(sofa.lay())
}

client(new VictorianFurnatureFactory())
