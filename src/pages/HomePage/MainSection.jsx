import ProductFilters from "./ProductFilters";
import ProductsContainer from "./ProductsContainer";
import { useSearchParams } from "react-router-dom";

const MainSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <ProductFilters setSearchParams={setSearchParams} />
      <ProductsContainer searchParams={searchParams} />
    </>
  );
};

export default MainSection;
