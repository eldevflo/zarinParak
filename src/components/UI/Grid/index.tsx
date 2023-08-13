import { Product } from "../../../types/Product";
import Card from "../Card";

export interface AppComponentProps {
  list: Product[];
}
function Grid({ list }: AppComponentProps) {
  return (
    <div className="grid">
      {list.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default Grid;
