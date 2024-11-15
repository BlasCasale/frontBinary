import MemoizedBcdDesCsComponent from "./BcdDesCs/BcdDesCs";
import MemoizedBcdDesSsComponent from "./BcdDesSs/BcdDesSs";
import MemoizedBcdEmpCsComponent from "./BcdEmpCs/BcdEmpCs";
import MemoizedBcdEmpSsComponent from "./BcdEmpSs/BcdEmpSs";
import './Bcd.css'

const Bcd = () => {
  return (
    <section className="sectionBcd">
      <h2>BCD</h2>
      <MemoizedBcdEmpSsComponent />
      <MemoizedBcdEmpCsComponent />
      <MemoizedBcdDesSsComponent />
      <MemoizedBcdDesCsComponent />
    </section>
  )
}

export default Bcd