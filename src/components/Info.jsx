/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { 
    CardWrapper,
    AuthorWrapper,
    QuoteWrapper,
    Button
} from "../styles";


export function Info(){

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
                <CardWrapper>
                    <AuthorWrapper>How To use</AuthorWrapper>
                    <QuoteWrapper>Please select a category.</QuoteWrapper>
                    <i 
                        class="fa-solid fa-info"
                        style={{
                            color: "blue",
                            fontSize: "1.5rem"
                        }}
                    ></i>
                </CardWrapper>
        </main>
    )
}


