import BcdDesCs from "./BcdDesCs/BcdDesCs";
import BcdDesSs from "./BcdDesSs/BcdDesSs";
import BcdEmpCs from "./BcdEmpCs/BcdEmpCs";
import BcdEmpSs from "./BcdEmpSs/BcdEmpSs";

const Bcd = () => {
  return (
    <section>
      <h2>BCD</h2>
      <BcdEmpSs />
      <BcdEmpCs />
      <BcdDesSs />
      <BcdDesCs />
    </section>
  )
}

export default Bcd