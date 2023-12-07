import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const userContext = createContext({
  user:null,
  isLoading:false,
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    let getData = async () => {
      setIsLoading(true)
      let data = await axios.get("https://gorest.co.in/public-api/users");
      setUser(data.data.data);
      setIsLoading(false)
    };
    getData();
  }, []);


  return (
    <userContext.Provider
      value={{
        user,
        isLoading
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const {
    user,
    isLoading
  } = useContext(userContext);
  return {
    user,
    isLoading
  };
}
