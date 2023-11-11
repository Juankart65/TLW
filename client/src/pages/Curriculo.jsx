import React from 'react'

export default function Curriculo() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-6 text-center'><b><i>Currículo</i></b></h1>
      </div>

      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-10'>
        <p className='text-slate-900 text-center'><i>El propósito curricular del colegio campestre Las Palmas es permitir
          que los estudiantes encuentren en su proceso de educación un espacio para la práctica deportiva. Dentro del horario
          académico, los estudiantes todos los días cuentan con hora y media para entrenar el deporte preferido, para esto,
          es muy importante la disciplina y la motivación. De otra manera, si el estudiante no tiene interés por alguno de los
          deportes que se ofertan pueden hacer su práctica en las artes, bien sea en danza o teatro.</i></p>
      </div>


      <div className='flex flex-col items-center justify-center mt-3 mb-3'>

        <div className='flex flex-row items-center justify-center'>

          <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-xl md:text-4xl flex-col text-center mt-6 md:mr-56'><b><i>Enfoque Artístico</i></b></h2>
          </div>

          <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-xl md:text-4xl flex-col mb-6 md:mb-3 text-center mt-6'><b><i>Enfoque Deportivo</i></b></h2>
          </div>

        </div>

        <div className='flex flex-row items-center justify-center'>

          <div className='flex flex-row justify-center items-center mt-7 mb-10 ml-10'>
            <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/bqhegekehgk5y0arb4z0"
            className='w-2/3 md:w-1/2' />
          </div>
      
          <div className='flex flex-row justify-center items-center mt-7 mb-10'>
            <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/zo8hwfsitm0wvoeuasb3"
            className='w-2/3 md:w-2/3' />
          </div>

        </div>

      </div>
      
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-3 text-center mt-6'><b><i>Organización Administrativa</i></b></h1>
      </div>

      <div className='flex flex-row justify-center items-center mb-6'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/lu8fblifwoksdsszwmuc"
          className='w-4/5 md:w-5/6' />
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-6 text-center'><b><i>Perfil del Docente</i></b></h1>
      </div>

      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-10'>
        <p className='text-slate-900 text-center'><i>Para el colegio campestre Las Palmas, con énfasis en deportes, el docente
          desempeña un papel crucial en el desarrollo físico y moral de los estudiantes. Por lo tanto, es fundamental que posea
          un equilibrio entre sus habilidades académicas y su ética profesional para inspirar y guiar a los estudiantes de manera
          efectiva.</i></p>
      </div>

      <div className='flex flex-row justify-center items-center mb-6'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/vwf6ibwhgeamnwoywfdd"
          className='w-4/5 md:w-unit-8xl' />
      </div>

    </div>
  )
}
