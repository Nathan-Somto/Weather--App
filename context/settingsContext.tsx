import {createContext,useState} from 'react'


type mode = 'day' | 'night'; 
type unit = 'standard' | 'metric' | 'imperial'
type context = {
  mode: mode;
  unit: unit;
  setMode: React.Dispatch<React.SetStateAction<mode>>;
  setUnit: React.Dispatch<React.SetStateAction<unit>>;
};
const SettingsContext = createContext<context | null>(null); 
const SettingsProvider : React.FC<{children:React.ReactNode}> = ({children}) => {
  const [mode, setMode] = useState<mode>('day');
    const [unit, setUnit] = useState<unit>('metric');
    const value ={mode,setMode,unit,setUnit};
  return (
    <SettingsContext.Provider
        value={value}
    >
        {children}
    </SettingsContext.Provider>
  )
}

export {SettingsContext, SettingsProvider,context};