import React from "react"
import And from "./And/And"
import Not from "./Not/Not"
import Or from "./Or/Or"
import Nand from "./Nand/Nand"
import Xor from "./Xor/Xor"
import Xnor from "./Xnor/Xnor"
import './LogicalGates.css'

const LogicalGates = () => {
    return (
        <section className="logicalGatesSection">
            <h3>Compuertas lógicas</h3>
            <And key={'and'} />
            <Or key={'or'} />
            <Not key={'not'} />
            <Nand key={'nand'} />
            <Xor key={'xor'} />
            <Xnor key={'xnor'} />
        </section>
    )
}

export default LogicalGates