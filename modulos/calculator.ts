export function suma(numero1:number,numero2:number):number{
    return numero1+numero2
}
export function resta(numero1:number,numero2:number):number{
    return numero1-numero2
}

export function multiplicacion(numero1:number,numero2:number):number{
    return numero1*numero2
}

export function divisiion(numero1:number,numero2:number):number{
    
    if (numero2 !== 0){
      return numero1/numero2
    }
    else{
        return 0
    }
    
}

export const Pi:number = 3.1416