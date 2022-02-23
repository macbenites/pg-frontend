import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getFields,
  getNeighborhoods,
  filterSportCentersByDistrict,
} from "../Redux/Actions";
import { CardStyles, TopFields } from "../Styles/component/Fields";
import CardsCourt from "./CardsCourt";
import { Select } from "../Styles/reusable/Select";
import { Label } from "../Styles/reusable/Input";
import { Button } from "../Styles/reusable/Button";
import { TitleStyle } from "../Styles/component/Games";

const Fields = () => {
  const fields = useSelector((obj) => obj.fields);
  const tenFields = fields?.slice(0, 10);
  const dispatch = useDispatch();
  const neighborhoods = useSelector((state) => state.neighborhoods);

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterSportCentersByDistrict(e.target.value));
  };

  useEffect(() => {
    dispatch(getFields());
    dispatch(getNeighborhoods());
  }, [dispatch]);

  return (
    <div>
      <TitleStyle>Canchas de Capital Federal</TitleStyle>
      <TopFields>
        <div>
          <Label>Filtrar por barrio:</Label>
          <Select name="neighborhood" onChange={handleFilter}>
            <option value="">Todos</option>
            {neighborhoods?.map((element) => (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            ))}
          </Select>
        </div>
        <Button onClick={() => dispatch(getFields())}>Quitar Filtros</Button>
      </TopFields>
      <CardStyles>
        {tenFields &&
          tenFields?.map((obj) => <CardsCourt key={obj.id} props={obj} />)}
      </CardStyles>
    </div>
  );
};

export default Fields;
