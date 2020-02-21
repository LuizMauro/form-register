import styled from 'styled-components';


export const ContainerGlobal = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
`;

export const RightDiv = styled.div `
    background: #fff;
    flex:1.5;
    height:100vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius:20px;
    box-shadow: -15px 0px 50px  0.1px rgba(0,0,0,0.2) ;

    display: flex;
    flex-direction: row;

    align-items: center;

    @media (max-width: 1200px) {
        border-radius:0px;
        flex:1;
  }
`;

export const FormDiv = styled.div`
  width:60%;
  height:auto;
  color:#666;
  margin-left:100px;

  .MuiFormControl-root, button{
      margin:10px;
  }

`

export const LeftDiv = styled.div `

    flex:1;
    height:100vh;

    @media (max-width: 1200px) {
        display:none;
  }
`;

