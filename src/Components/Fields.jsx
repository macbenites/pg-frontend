import CardsCity from "./CardsCity";
import Map from "./Map";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFields } from "../Redux/Actions";

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
         return <CardsCity key={obj.id} props={obj}/>
        })
      }
      <Map />
    </div>
  );
};

export default Fields;
