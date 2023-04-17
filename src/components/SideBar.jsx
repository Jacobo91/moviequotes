import { NavLink } from 'react-router-dom';
import { MySideBar } from '../styles';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const links = [  "age",  "alone",  "amazing",  "anger",  "architecture",  "art",  "attitude",  "beauty",  "best",  "birthday",  "business",  "car",  "change",  "communications",  "computers",  "cool",  "courage",  "dad",  "dating",  "death",  "design",  "dreams",  "education",  "environmental",  "equality",  "experience",  "failure",  "faith",  "family",  "famous",  "fear",  "fitness",  "food",  "forgiveness",  "freedom",  "friendship",  "funny",  "future",  "god",  "good",  "government",  "graduation",  "great",  "happiness",  "health",  "history",  "home",  "hope",  "humor",  "imagination",  "inspirational",  "intelligence",  "jealousy",  "knowledge",  "leadership",  "learning",  "legal",  "life",  "love",  "marriage",  "medical",  "men",  "mom",  "money",  "morning",  "movies",  "success"];


export function SideBar(){


    return(
        <MySideBar>
            <h4
                css={css`
                    padding: 20px;
                    text-align: center;
                `}
            >Categories</h4>
            {
                links.map(link => (
                    <NavLink
                        to={`/quotes/${link}`}
                        key={link}
                        style={{
                            color: "black",
                            textDecoration: "none",
                            padding: "10px 20px"
                        }}
                        className={({ isActive }) => (isActive ? 'active' : 'inActive')}
                    >
                        {link}
                    </NavLink>
                ))
            }
        </MySideBar>
    )
}