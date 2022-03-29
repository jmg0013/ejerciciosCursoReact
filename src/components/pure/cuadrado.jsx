import React, {useState} from 'react';

const Cuadrado = () => {

    const [color, setColor] = useState('#000000');//variable inicial del color que será negro

    const [intervalo, setIntervalo] = useState(0);


    const getColor = () => Math.floor(Math.random() * 256);//numero aleatorio entre 0 y 255

    const getHexadecimal = (red, green, blue) => {//esta función generará el numero hexadecimal
        return (
          '#' +
          [red, green, blue]
            .map((c) => {
              const hex = c.toString(16);//16 porque queremos un numero hexadecimal
              return hex.lenght === 1 ? '0' + hex : hex;
            })
            .join('')//une todos los elementos del .map en una cadena y devuelve esta cadena
        );
      };
    
      const generarHexadecimal = () => {//para cada valor del numero hexadecimal (rojo,verde y azul) genera un numero aleatorio
        const rgb = {
          r: getColor(),
          g: getColor(),
          b: getColor(),
        };
        return setColor(getHexadecimal(rgb.r, rgb.g, rgb.b));//aplica al div el color generado aleatoriamente
      };

    const onChangeColor = () => {//esta funcion consiste en que cuando el raton entre en el div genere colores
    return setIntervalo(setInterval(generarHexadecimal, 500));//cada medio segundo cambia de color
    };

    const onStopChangeColor = () => {//esta funcion consiste en que cuando el raton salga del div pare de generar colores
    return clearInterval(intervalo);
    };

    const onClickChangeColor = () => {//esta funcion consiste en que al hacer click sobre el div pare de generar colores
    return clearInterval(intervalo);
    };

    return (
        <div 
            style={{height: '255px',width: '255px',backgroundColor: color}} 
            onMouseOver={onChangeColor}
            onMouseLeave={onStopChangeColor}
            onDoubleClick={onClickChangeColor}    
        >
            <p style={{ color: 'black' }}>Color: {color} </p>
        </div>
        
    );
}

export default Cuadrado;
