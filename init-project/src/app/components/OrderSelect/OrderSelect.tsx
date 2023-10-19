import { SearchParamsOrder } from "@/app/(posts)/dashboard/list/model/ParamsContext"
import { useState } from "react"
import OrderIcon from '@/public/orderIcon.svg'

interface OrderSelectProps {
    order: SearchParamsOrder
    onSelect: (sortOrder: SearchParamsOrder) => void
}

export const OrderSelect=(props: OrderSelectProps)=>{
    const {order, onSelect} = props

    const [isOpen, setIsOpen] = useState(false);

  
    const toggleTooltip = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (order: SearchParamsOrder) => {
        onSelect(order);
        setIsOpen(false);
      };

    return  <div className="relative h-full flex">
    <button 
      onClick={toggleTooltip}
    >
      <OrderIcon />
    </button>

    {isOpen && (
      <div 
        style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}
        className="absolute mt-4 w-48 bg-white border rounded shadow-xl"
      >
        <button 
          onClick={() => handleOptionClick('asc')}
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600"
        >
          Ascending
        </button>
        <button 
          onClick={() => handleOptionClick('desc')}
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600"
        >
          Descending
        </button>
      </div>
    )}
  </div>
}