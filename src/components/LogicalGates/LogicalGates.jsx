import And from "./And/And"
import Not from "./Not/Not"
import Or from "./Or/Or"
import Nand from "./Nand/Nand"
import Xor from "./Xor/Xor"
import Xnor from "./Xnor/Xnor"

const LogicalGates = () => {
    return (
        <section>
            <h3>Compuertas lógicas</h3>
            <And />
            <Or />
            <Not />
            <Nand />
            <Xor />
            <Xnor />
        </section>
    )
}

export default LogicalGates