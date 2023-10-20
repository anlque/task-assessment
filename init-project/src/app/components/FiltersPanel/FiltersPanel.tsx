import { SortSelect } from "../SortSelect/SortSelect"
import { OrderSelect } from "../OrderSelect/OrderSelect"
import { SearchInput } from "../SearchInput/SearchInput"
import { SearchParamsOrder,SearchParamsSort } from "@/app/(posts)/dashboard/types/params"

interface FiltersPanelProps {
    sort: SearchParamsSort,
    order: SearchParamsOrder,
    search: string,
    onSetSort: (sort: SearchParamsSort)=>void,
    onSetOrder: (order: SearchParamsOrder)=>void,
    onSetSearch: (search: string) => void
}

export const FiltersPanel = (props: FiltersPanelProps) => {

    const {sort, order, search, onSetSort, onSetOrder, onSetSearch} = props

    return <div className="mb-4 flex space-x-4 items-center bg-gray-100 py-1 px-3 rounded-lg">
                <SortSelect sort={sort} onSelect={onSetSort} />  
                <OrderSelect order={order} onSelect={onSetOrder} />
                <SearchInput search={search} onChange={onSetSearch} />
           </div>
}