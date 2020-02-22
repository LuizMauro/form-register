import React, { Component } from 'react';
import { MuiThemeProvider, Button, createMuiTheme, withStyles } from '@material-ui/core'
import { MdKeyboardArrowRight }  from 'react-icons/md'
import Lottie from 'react-lottie';
import * as animationData from '../animations/FinishRegister.json'


const theme = createMuiTheme({
    palette: {
      primary:{
        main: '#0069bf',
      }
    },
  });

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #0069bf 30%, #0069bf 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(0, 105, 191, 0.3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);



export class FormUserDetails extends Component {
    render() {


        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };




        return (

            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <h1 style={styles.title}>Parabéns você chegou ao final do cadastro!</h1>

                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                     />


                    <h4 style={styles.subTitle}>Agora você já pode entrar no sistema - clique no botão para logar</h4>


                    <StyledButton style={styles.button}>
                         Entrar
                        <MdKeyboardArrowRight fontSize={25}>
                        </MdKeyboardArrowRight>
                    </StyledButton>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    title:{
        fontSize:50,
        color:'#0069bf',
        marginBottom:10
    },
    subTitle:{
        color:"#666"
    },
    teste:{
        marginTop:"20 !important"
    }
}

export default FormUserDetails
