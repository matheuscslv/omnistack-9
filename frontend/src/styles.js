import { createGlobalStyle } from 'styled-components';
import background from './assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html,body,#root {
        min-height: 100%;
    }
    body {
        background: #000 url(${background}) no-repeat;
        background-size: cover;
        -webkit-font-smoothing: antialiased !important;
    }
    body,input,button {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 14px;
    }
    .container{
        margin: 80px auto 0;
        max-width: 450px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
    }
    .content{
        width: 100%;
        background: #fff;
        margin-top: 50px;
        margin-bottom: 50px;
        border-radius: 5px;
        padding: 20px;
    }
    .content > p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
    }
    .content form{
        display: flex;
        flex-direction: column;
    }
    .content form label{
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
    }
    .content form input{
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
    }
    .content button.btn {
        border: 0;
        border-radius: 2px;
        width: 100%;
        height: 42px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
        background: #f05a5b;
        color: #fff;
        cursor: pointer;
        &:hover{
            background: #e14f50;
        }
    }
`;