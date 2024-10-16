import BcdDesCs from "./BcdDesCs/BcdDesCs";
import BcdDesSs from "./BcdDesSs/BcdDesSs";
import BcdEmpCs from "./BcdEmpCs/BcdEmpCs";
import BcdEmpSs from "./BcdEmpSs/BcdEmpSs";
import './Bcd.css'

const Bcd = () => {
  return (
    <section className="sectionBcd">
      <h2>BCD</h2>
      <BcdEmpSs />
      <BcdEmpCs />
      <BcdDesSs />
      <BcdDesCs />
    </section>
  )
}

export default Bcd