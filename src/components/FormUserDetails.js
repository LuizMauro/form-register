import React, { Component } from 'react';
import { MuiThemeProvider, TextField, Button, createMuiTheme, withStyles } from '@material-ui/core'
import { MdKeyboardArrowRight }  from 'react-icons/md'



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
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <h1 style={styles.title}>Vamos Começar!</h1>
                    <h3 style={styles.subTitle}>Digite os primeiros dados, rumo ao sucesso!</h3>
                    <TextField
                        label="Seu nome completo"
                        fullWidth
                        onChange={handleChange('name')}
                        defaultValue={values.firstName}
                    />

                    <TextField
                        label="E-mail"
                        fullWidth
                        onChange={handleChange('email')}
                        defaultValue={values.firstName}
                    />

                     <TextField
                        label="CNPJ"
                        fullWidth
                        onChange={handleChange('cnpj')}
                        defaultValue={values.firstName}
                    />

                    <StyledButton style={styles.button} onClick={this.continue} >
                        Continuar
                        <MdKeyboardArrowRight fontSize={25}>
                        </MdKeyboardArrowRight>
                    </StyledButton>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    },
    title:{
        fontSize:50,
        color:'#0069bf',
        marginBottom:10
    },
    subTitle:{
        color:"#666"
    }
}

export default FormUserDetails
