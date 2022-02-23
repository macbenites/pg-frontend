import { 
    MainCardsGames,
    DateStyle,
    NameCenter,
    Text
     } from "../Styles/component/CardsGames"

function YourMatchesDetail ({props}) {

    console.log(props)

    return (
        <MainCardsGames>
            <NameCenter>{props.nameCenter}</NameCenter>
            <DateStyle>{props.date}</DateStyle>
            <Text>{props.note}</Text>
        </MainCardsGames>
    )
}

export default YourMatchesDetail