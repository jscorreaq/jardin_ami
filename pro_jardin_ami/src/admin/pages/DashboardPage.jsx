import Aside from "../components/Aside";
import Content from "../components/Content";

export default function DashboardPage() {
  return (
     <div id="page-top"> 
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
            
            <Aside />
            <Content />
           
          </div> 
        </div>
  )
}
