import { SearchParamsSort } from "@/app/(posts)/dashboard/list/model/ListPostsContext"


interface SortSelect {
    sort: SearchParamsSort
    onSelect: (sort: SearchParamsSort)=>void
}

export const SortSelect =(props: SortSelect)=>{

    const options = [
        {
            value: 'id',
            label: 'Id'
        },
        {
            value: 'title',
            label: 'Post Title'
        }
    ]

    const {sort, onSelect} = props

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        onSelect(e.target.value as SearchParamsSort)
    }

    return <> 
                <label htmlFor="sort-select">Sort by:</label>
                    <select 
                        value={sort}
                        id='sort-select'
                        className="border p-2 rounded-md"
                        onChange={handleSelectChange}
                    >
                        {options.map((option)=> (<option key={option.value} value={option.value}>{option.label}</option>))}
                    </select>
          </>
}