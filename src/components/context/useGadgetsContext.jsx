import { createContext, useContext, useEffect, useState } from "react";

export const GadgetContext = createContext();

export const GedgetProvider = ({ children }) => {
  const [gadgets, setGadgets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchedGadgets = async () => {
      try {
        const res = await fetch("/gadgets.json");
        const data = await res.json();
        setGadgets(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchedGadgets();
  }, []);

  return (
    <GadgetContext.Provider value={{ gadgets, loading }}>
      {children}
    </GadgetContext.Provider>
  );
};

export const useGadgets = () => {
  return useContext(GadgetContext);
};


