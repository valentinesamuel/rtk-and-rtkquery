import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

interface DemoProps {}
export const ListDebounceDemo: React.FC<DemoProps> = ({}: DemoProps) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List search={debouncedSearch} />
    </div>
  );
};

interface ListProps {
  search: string;
}
export const List: React.FC<ListProps> = ({ search }) => {
const names: string[] = [
  "Emily",
  "Emma",
  "Emilia",
  "Emerson",
  "Emmett",
  "Emery",
  "Emilio",
  "Emmet",
  "Emmanuel",
  "Emiliano",
];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <p>Search term: {search}</p>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
