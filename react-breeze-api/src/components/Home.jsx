import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";




function Home() {
  const { user , getUser} = useAuthContext();
  useEffect(() => {
    if(!user){
      getUser();
    }
  }, []);
  
  return (
    <>
    {user?.name}
    </>
  )
}
export default Home;
