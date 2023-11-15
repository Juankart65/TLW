import React from 'react'

export default function Justificacion() {
  return (
    <div className='mt-10 items-center justify-center flex flex-col h-full'>

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-10 text-center font-serif'><b><i>El texto ortográfico</i></b></h1>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='text-xl md:text-5xl flex-col mb-6 md:mb-10 text-center font-serif '><b><i>Uso de la |G|</i></b></h2>
      </div>

      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6'>
        <p className='text-slate-900 text-center font-serif'><i>La letra <b>g</b> en español desempeña un papel fundamental en la
          formación de palabras y contribuye a la fonética y gramática del idioma. Explorar el uso de la <b>g</b> nos permite conectar
          diversos conceptos lingüísticos y entender su importancia en la estructura de las palabras.</i></p>
      </div>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6'>
        <p className='text-slate-900 text-center font-serif'><i>En primer lugar, la <b>g</b> puede encontrarse al principio,
          en medio o al final de las palabras, generando diferentes sonidos según la combinación de letras que la acompañe.
          Por ejemplo, al inicio, la <b>g</b> puede tener un sonido suave, como en <b>gato</b> o un sonido fuerte, como en <b>guitarra</b>.
          En el medio de palabras, puede formar combinaciones como <b>-ng-</b> en <b>ingeniero</b>, añadiendo una dimensión adicional a
          su versatilidad fonética.</i></p>
      </div>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6'>
        <p className='text-slate-900 text-center font-serif'><i>Históricamente, la <b>g</b> proviene del latín y ha experimentado
          cambios fonéticos a lo largo del tiempo. Su presencia en palabras y su variabilidad fonética conectan el español moderno
          con sus raíces etimológicas, mostrando la evolución dinámica del idioma a lo largo de los siglos.</i></p>
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='text-xl md:text-5xl flex-col mb-6  mt-5 md:mb-10 text-center font-serif '><b><i>Ejemplos</i></b></h2>
      </div>

      <div className='flex flex-row justify-center items-center mt-7 mb-10'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/o4uumcr5xfezjvgnn66u"
          className='w-2/2 md:w-2/3' />
      </div>
      <div className='flex flex-row justify-center items-center mt-7 mb-10'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/g4exwqkl3rd3lr5ykoje"
          className='w-2/2 md:w-2/3' />
      </div>
      <div className='flex flex-row justify-center items-center mt-7 mb-10'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/klpdbztpotjhnjvzp9lf"
          className='w-2/2 md:w-2/3' />
      </div>

    </div>
  )
}