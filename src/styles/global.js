import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

    *{
        padding:0;
        margin:0;
        outline:0;
        box-sizing:border-box;
    }

    body{
        /*background: #45D99D;*/
        background: linear-gradient(30deg, #0069bf  5%, #94D5FF 100%);
        color: #fff;
        font-family: 'Poppins', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    html, body, #root{
        height:100%;
    }

    input, button{
        font-family: 'Poppins', sans-serif;
    }


`;
