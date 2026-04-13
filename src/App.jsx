import BuildSummary from "./component/BuildSummary";
import PSUList from "./component/PSUList";
import MotherboardList from "./component/MotherboardList";
import CPUList from "./component/CPUList";
import GPUList from "./component/GPUList";
import RAMList from "./component/RAMList";
import PCBuilderCanvas from "./component/PCBuilderCanvas";

import Header from "./component/Header";

// import CompabilityWarning from "./component/CompabilityWarning";
// import SelectedPSU from "./component/SelectedPSU";
// import SelectedPSU from "./component/SelectedPSU";
// import SelectedRAM from "./component/SelectedRAM";
// import SelectedCPU from "./component/SelectedCPU";
// import SelectedGPU from "./component/SelectedGPU";
// import { useStore } from "./store/useStore";

function App() {
  // const cpu = useStore((state) => state.selectedCPU);
  // const gpu = useStore((state) => state.selectedGPU);
  // const ram = useStore((state) => state.selectedRAM);
  // const motherboard = useStore((state) => state.SelectedMotherboard);
  // const psu = useStore((state) => state.SelectedPSU);

  return (
    <div className={`h-screen flex flex-col bg-gray-900 text-white`}>
      <Header />

      <div className={`flex flex-1 overflow-hidden `}>
          <div className={`w-2/10 border-r border-gray-700 overflow-y-auto`}>
            <div className="p-4 space-y-6"> 
              <CPUList />
              
              <GPUList />
          
              <RAMList />
          
              <MotherboardList />
          
              <PSUList />
          
            </div>
          </div>

        
         <div className={`w-6/10 flex items-center justify-center`}>
         <PCBuilderCanvas />

         {/* <CompabilityWarning />
          { cpu && gpu && ram && motherboard && psu ? <p>Sudah memilih Komponen</p> : <p>Belum lengkap memilih komponen</p>} */}
      </div>

      
      <div className="max-w-100 border-l border-gray-700 flex justify-center overflow-hidden">
        <BuildSummary />
      </div>

        
      </div>
      
     
      
    </div>  
  );
}

//<CompabilityWarning />

      //{ cpu && gpu && ram && motherboard && <p>Sudah memilih Komponen</p>}

export default App;