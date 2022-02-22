import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFields, getNeighborhoods, filterSportCentersByDistrict } from "../Redux/Actions";
import { CardStyles, TopFields } from "../Styles/component/Fields";
import CardsCourt from "./CardsCourt";
import { Select } from "../Styles/reusable/Select";
import { Label } from "../Styles/reusable/Input";
const Fields = () => {
  const fields = useSelector((obj) => obj.fields);
  const tenFields = fields.slice(0, 10);
  const dispatch = useDispatch();
  const neighborhoods = useSelector((state) => state.neighborhoods);

  useEffect(() => {
    dispatch(getFields());
    dispatch(getNeighborhoods());
  }, [dispatch]);

  function handleFilter(e){
    e.preventDefault();
    dispatch(filterSportCentersByDistrict(e.target.value));
  };

  return (
    <div>
      <TopFields>
        <h2>Canchas de Capital Federal</h2>
        <div>
          <Label>Filtrar por:</Label>
          <Select name="neighborhood">
            <option value="">Barrio</option>
            {neighborhoods.map((element) => (
              <option key={element.id} value={element.name} onChange={e => {handleFilter(e)}}>
                {element.name}
              </option>
            ))}
          </Select>
        </div>
      </TopFields>
      <CardStyles>
        {tenFields &&
          tenFields.map((obj) => <CardsCourt key={obj.id} props={obj} />)}
      </CardStyles>
    </div>
  );
};

export default Fields;
