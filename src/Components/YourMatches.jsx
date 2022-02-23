import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { showYourMatch } from "../Redux/Actions";
import YourMatchesDetail from "./YourMatchesDetail";
import { MainCardsGames , Text } from "../Styles/component/CardsGames";

function YourMatches () {

    const userLogueado = useSelector(obj => obj.userState);
    const matches = useSelector(obj => obj.yourMatchesCreated)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(showYourMatch(userLogueado.id))
    },[dispatch , userLogueado.id])

    console.log(userLogueado);
    console.log(matches)

    return(
        <div>
            {
                matches.length > 0 ? 
                matches.map(obj => {
                   return (<YourMatchesDetail 
                            key={obj.users_matches.matchIdMatch}
                            props={obj}>
                          </YourMatchesDetail>)
                })
                : 
                
                <MainCardsGames>
                    <Text>
                        "No hay partidos creados"
                    </Text>
                </MainCardsGames>
            }
        </div>
    )
}

export default YourMatches