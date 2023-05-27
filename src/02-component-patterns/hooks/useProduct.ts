import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces"

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);
    const isControlled = useRef(!!onChange);
    
    const increaseBy = (value: number) => {
        if (isControlled.current){
            return onChange!({count:value, product}); //! este signo en este caso no es negacion, es para decirle a typescript que omita la comprobacion o el mensaje de warning 
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
      setCounter(value)
    }, [value])    

    return {
        counter,
        increaseBy,
    }
}
