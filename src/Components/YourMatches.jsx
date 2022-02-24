import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches, matchesCompany, showYourMatch } from "../Redux/Actions";
import YourMatchesDetail from "./YourMatchesDetail";
import { MainCardsGames, Text } from "../Styles/component/CardsGames";

function YourMatches() {
  const { userState, yourMatchesCreated, matchesBusiness } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showYourMatch(userState.id));
    dispatch(getMatches());
    dispatch(matchesCompany(userState.name));
  }, [dispatch, userState.id, userState.name]);

  return (
    <div>
      {userState.role === "user" ? (
        userState.role === "user" && yourMatchesCreated?.length > 0 ? (
          yourMatchesCreated.map((obj) => (
            <YourMatchesDetail
              key={obj.users_matches.matchIdMatch}
              props={obj}
            ></YourMatchesDetail>
          ))
        ) : (
          <MainCardsGames>
            <Text>"No tienes partidos creados"</Text>
          </MainCardsGames>
        )
      ) : userState.role === "company" && matchesBusiness?.length > 0 ? (
        matchesBusiness.map((obj, index) => (
          <YourMatchesDetail key={index} props={obj} />
        ))
      ) : (
        <MainCardsGames>
          <Text>"No tienes partidos creados"</Text>
        </MainCardsGames>
      )}
    </div>
  );
}

export default YourMatches;
