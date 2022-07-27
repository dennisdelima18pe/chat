import { CSSProperties} from "react";
import { FadeLoader } from "react-spinners";

const Loading = ()=>{
 

 const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "82AFD8",
};

 return (
  <div className="w-full h-screen  bg-slate-100 flex items-center justify-center">
     <FadeLoader color={"#82AFD8"} loading={true} cssOverride={override} />
   </div>
 )
}
export default Loading