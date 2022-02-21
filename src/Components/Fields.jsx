import CardsCity from "./CardsCourt";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFields, getNeighborhoods } from "../Redux/Actions";
import { Link } from "react-router-dom";

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
      <select name="neighborhood">
        <option value= ''>Barrio</option>
          {neighborhoods.map((element) =>(
            <option key= {element.id} value = {element.name}>{element.name}</option>
          ))}  
      </select>
      {
        tenFields && tenFields.map(obj => {
         return (
          <Link to={"/sportcenters/" + obj.id}>
           <CardsCity key={obj.id} props={obj}/>
          </Link> 
           )
        })
      }
    </div>
  );
};

export default Fields;
