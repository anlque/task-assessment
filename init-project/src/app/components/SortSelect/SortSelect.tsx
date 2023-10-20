import { SearchParamsSort } from "@/app/(posts)/dashboard/types/params";
interface SortSelect {
  className?: string;
  sort: SearchParamsSort;
  onSelect: (sort: SearchParamsSort) => void;
}

const options = [
  {
    value: "id",
    label: "Id",
  },
  {
    value: "title",
    label: "Post Title",
  },
];

export const SortSelect = (props: SortSelect) => {
  const { className, sort, onSelect } = props;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value as SearchParamsSort);
  };

  return (
    <div className={`${className}`}>
      <label htmlFor="sort-select">Sort by:</label>
      <select
        value={sort}
        id="sort-select"
        className="border p-2 rounded-md"
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
