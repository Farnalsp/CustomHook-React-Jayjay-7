import { useState } from "react";
import ReactDOM from "react-dom/client";

export const useValue = (initialValue) => {
 const [value, setValue] = useState(initialValue)
 return [
   value, {setValue}
 ];
};

const Auth = () => {
 const [value, { setValue }] = useValue(true);
 return (
   <>
     <div>
     <p>Value: {value ? 'True' : 'False'}</p>
     <button onClick={() => setValue(!value)}>Toggle</button>
     </div>
   </>
 );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Auth />);

export default Auth;