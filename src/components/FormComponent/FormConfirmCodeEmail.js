import React, { Component } from 'react';
import { MuiThemeProvider, Button, createMuiTheme, withStyles } from '@material-ui/core'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft }  from 'react-icons/md'
import RICIBs from 'react-individual-character-input-boxes';
import Lottie from 'react-lottie';
import * as animationData from '../animations/CheckCodeEmail.json'


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
    constructor(props) {
        super(props);
        this.state = {isStopped: true};
      }

    continue = e =>{
        e.preventDefault();
        this.setState({isStopped:false})
        this.delayNextStep();
    }

    delayNextStep() {
        setTimeout(function() {
            this.props.nextStep();
        }.bind(this), 2500)
      }

    previous = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    handleOutput (string) {
        // Do something with the string
      }




    render() {


        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };


        return (



            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <h1 style={styles.title}>Valide o seu e-mail</h1>
                    <h3 style={styles.subTitle}>Enviamos um código de verificação para o e-mail cadastrado</h3>
                    <RICIBs
                        marginTop={20}
                        amount={4}
                        handleOutputString={this.handleOutput}
                    />


                    <Button  onClick={this.previous} >
                        <MdKeyboardArrowLeft fontSize={25}>
                        </MdKeyboardArrowLeft>
                        Voltar
                    </Button>

                    <StyledButton style={styles.button} onClick={this.continue} >
                        Verificar
                        <MdKeyboardArrowRight fontSize={25}>
                        </MdKeyboardArrowRight>
                    </StyledButton>

                    <Lottie options={defaultOptions}
                        height={150}
                        width={150}
                        isClickToPauseDisabled={this.state.isStopped}
                        isStopped={this.state.isStopped}
                     />

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
