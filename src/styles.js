import styled from '@emotion/styled';


export const theme = {
    colors:{
        primary: 'rgb(84, 58, 231)',
    },
    fonts:{},
    fontSize: {},
}

export const MySideBar = styled.aside`
    display: grid;
    overflow-y: scroll;
    height: 70vh;
    @media (min-width: 600px){
        flex: 2;
        grid-template-columns: repeat(1, 1fr);
        overflow-y: scroll;
        height: 100vh;
        box-shadow: 5px 0 10px grey;
    }
`;

export const CardWrapper = styled.article`
    width: 300px;
    border-radius: 10px;
    box-shadow: 2px 3px 10px grey;
`;

export const AuthorWrapper = styled.h3`
    text-align: center;
    padding: 10px;
`;

export const QuoteWrapper = styled.p`
    padding: 0 20px 20px 20px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 5px 30px;
    border-radius: 20px;
    border: none;
    display: block;
    margin: 0 auto 20px auto;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    font-weight: bold;
`;
