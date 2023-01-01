import SHOP_DATA from "../../shop-data.json";
const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({name, id}) => {
        return <h3 key={id}>{name}</h3>;
      })}
    </div>
  );
};
export default Shop