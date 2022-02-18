import CardsCity from "./CardsCourt";
import Map from "./Map";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFields } from "../Redux/Actions";
import { Link } from "react-router-dom";

const Fields = () => {

  const fields = useSelector (obj => obj.fields);
  const tenFields = fields.slice(0,10)
  const dispatch = useDispatch();

  useEffect (()=> dispatch(getFields()) ,[dispatch])
  console.log(fields)

  return (
    <div>
      {
        tenFields && tenFields.map(obj => {
         return (
          <Link to={"/sportcenters/" + obj.id}>
           <CardsCity key={obj.id} props={obj}/>
          </Link> 
           )
        })
      }
      <Map />
    </div>
  );
};

export default Fields;
