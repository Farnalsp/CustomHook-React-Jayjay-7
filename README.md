Kode disamping, adalah kode di file Auth.js, terdapat metode useValue, saya telah membuat useState dengan parameter value dan function setValue dengan type data boolean (true/false).

Kalian diminta, untuk membuat useValue agar dapat digunakan di berbagai komponen selain Auth.js.

import { useState } from "react";
import ReactDOM from "react-dom/client";

const useValue = (val) => {
 const [value, setValue] = useState(val)
 return [
   value, {setValue}
 ];
};

const Auth = () => {
 const [value, { setValue }] = useValue(false);

 return (
   <>
     <div>
       <button type="button" onClick={() => setValue(!value)}>
       {value ? 'Logout' : 'Login'}
       </button>
     </div>
   </>
 );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Auth />);
