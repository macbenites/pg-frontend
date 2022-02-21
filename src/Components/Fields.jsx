import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFields, getNeighborhoods } from "../Redux/Actions";
import { Link } from "react-router-dom";
import { FilterSelect, CardStyles, TitleStyle } from '../Styles/component/Fields'
import CardsCourt from "./CardsCourt";

const Fields = () => {
  const fields = useSelector (obj => obj.fields);
  const tenFields = fields.slice(0,10)
  const dispatch = useDispatch();
  const neighborhoods = useSelector((state) => state.neighborhoods);

  useEffect(() => {
    dispatch(getFields());
    dispatch(getNeighborhoods());
  }, [dispatch]);
  //console.log(fields)

  return (
    <div>
      <TitleStyle>Canchas de Capital Federal</TitleStyle>
      <FilterSelect>
      <label>Filtrar por:</label>
      <select name="neighborhood">
        <option value= ''>Barrio</option>
          {neighborhoods.map((element) =>(
            <option key= {element.id} value = {element.name}>{element.name}</option>
          ))}  
      </select>
      </FilterSelect>
      <CardStyles>
      {
        tenFields && tenFields.map(obj => { 
         return (
          <Link to={"/sportcenters/" + obj.id}>
           <CardsCourt key={obj.id} props={obj}/>
          </Link> 
           )
        })
      }
      </CardStyles>
    </div>
  );
};

export default Fields;
