const fs = require('fs');
const colors = require('colors');



const crearArchivo = async (numero, listar, hasta) => {

    try {

        let tabla = '';    
    
        const tablaDelNumero = (numero) => {
            for (let index = 0; index <= hasta; index++) {
                tabla += `${numero} x ${index} = ${numero * index}\n`;
            }
        }
        if (listar){
            console.log('\n=========================='.rainbow);
            console.log('Tabla del'.underline.red, numero, ',', 'hasta el:'.underline.red, hasta );
            console.log('=========================='.rainbow);
        
            tablaDelNumero(numero);
            console.log(tabla.blue);
        }
    
        fs.writeFile(`./salida/tabla${numero}.txt`, tabla, (err) => {
            if (err) {
                throw err;
            }
            
        })
        return `tabla${numero}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}