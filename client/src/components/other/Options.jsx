import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Options() {
  const navigate = useNavigate();
  const list = [

    {
      title: "Exploración de las Ideas Profundas: Características y Evolución Histórica",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/l3g2frekvhclak7yyp5a`,
    },
    {
      title: "La Danza de las Palabras: Historia y Estilo del Texto Literario",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/obtcr77zopjkjxryllyq`,
    },
    {
      title: "De Plumas a Píxeles: La Evolución Ortográfica a lo Largo del Tiempo",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/a8dlubzkytkljfb8ndqt`,
    },
  ];

  return (
    <div className="gap-y-7 flex md:grid md:grid-cols-3 flex-col justify-center items-center mb-6 md:ml-24">
      {list.map((item, index) => (
        <Card
            isBlurred="true"
            shadow="sm"
            key={index}
            isPressable={true}
          className="flex w-2/3"
           onClick={() => {
              navigate(`/${item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "_")}`)}}
              
          >
          <CardBody className="overflow-visible p-0">
            <img
              src={item.img}
              alt={item.title}
              className=" rounded-small md:rounded-xl shadow-md"
            />
          </CardBody>
          <CardFooter className="text-xl justify-center">
            <b className="text-slate-600">{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
