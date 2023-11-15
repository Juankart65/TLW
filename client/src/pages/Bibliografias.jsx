import React from 'react';

export default function Justificacion() {
  return (

    
    <div className='mt-10 items-center justify-center flex flex-col h-full'>

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-10 text-center font-serif'><b><i>Bibliografías</i></b></h1>
      </div>

      {/* Cita 1 */}
      <div className='citation'>
        <p>FundéuRAE, E. b. (29 de Mayo de 2019). El blog de la FundéuRAE. <span className='cite'>Reglas de ortografía de la «h».</span> Obtenido de: <a href="https://www.fundeu.es/blog/reglas-de-ortografia-de-la-h/" className='link'>https://www.fundeu.es/blog/reglas-de-ortografia-de-la-h/</a></p>
      </div>

      {/* Cita 2 */}
      <div className='citation'>
        <p>FundéuRAE, E. b. (17 de Mayo de 2019). El blog de la FundéuRAE. <span className='cite'>Reglas de ortografía de la «g» y la «j»</span> Obtenido de: <a href="https://www.fundeu.es/blog/reglas-de-ortografia-de-la-g-y-la-j/" className='link'>https://www.fundeu.es/blog/reglas-de-ortografia-de-la-g-y-la-j/</a></p>
      </div>

      {/* Cita 3 */}
      <div className='citation'>
        <p>UniBetas. (29 de abril de 2022). unibetas. <span className='cite'>Uso de la h: Reglas, ejemplos y ejercicios resueltos.</span> Obtenido de: <a href="https://unibetas.com/uso-de-la-h" className='link'>https://unibetas.com/uso-de-la-h</a></p>
      </div>

      {/* Cita 4 */}
      <div className='citation'>
        <p>Wited. (13 de Abril de 2020). Wited. <span className='cite'>Uso de la H.</span> Obtenido de: <a href="https://www.portaleducativo.net/cuarto-basico/751/Uso-de-la-H#:~:text=La%20H%20es%20una%20letra,%2C%20hablar%2C%20hallar%20y%20habitar." className='link'>https://www.portaleducativo.net/cuarto-basico/751/Uso-de-la-H/</a></p>
      </div>

    </div>
  );
}
