import { useState } from "react"

interface SearchInputProps {
    search: string,
    onChange: (search: string)=> void
}

export const SearchInput = (props: SearchInputProps)=>{
    const {search, onChange} = props

    const [value, setValue] = useState<string>(search)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value);
    }

    return  <input
                value={value}
                autoFocus
                type="text"
                placeholder={'Search post...'}
                onChange={handleChange}
                className="p-2 border rounded-md !ml-auto"
            />
}