/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux";
import { 
    CardWrapper,
    AuthorWrapper,
    QuoteWrapper,
    Button
} from "../styles";
import { useParams } from "react-router-dom";
import { fetchQuotes } from "../redux/Quotes/quotesSlice";
import { useEffect } from "react";

export function Main(){

    const quotes = useSelector(state => state.quotes);
    const loading = quotes.isLoading;
    const {category} = useParams();
    const URL = category ?`https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=${category}` : 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=food' ;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuotes(URL))
    }, [category]);


    function handleNextQuote(){
        dispatch(fetchQuotes(URL));
    }
    return(
        <main
            css={css`
            flex: 6;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            overflow-y: scroll;
            @media (min-width: 600px){
                padding: 0;
        }
        `}
        >
            {loading ? (
            <p>Loading...</p>
        ) : quotes.quotes.length === 0 ? (
            <p>No quotes available for this category.</p>
        ) : (
                <CardWrapper>
                    <AuthorWrapper>{quotes.quotes[0].author}</AuthorWrapper>
                    <QuoteWrapper>{quotes.quotes[0].quote}</QuoteWrapper>
                    <Button onClick={handleNextQuote}>Next</Button>
                </CardWrapper>
        )}
        </main>
    )
}


