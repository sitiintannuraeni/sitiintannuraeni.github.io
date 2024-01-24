import {Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
  <>
    <div className="flex h-full">
     <Sidebar/>
      <main>
        <Header/>
        <div className="p-3">
          <Outlet/>
        </div>
      </main>
    </div>
  </>
  )
}

export default App;
