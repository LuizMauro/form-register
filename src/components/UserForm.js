import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormConfirmCodeEmail from './FormConfirmCodeEmail'
import FromCompleted  from './FormCompleted';
import { ContainerGlobal, LeftDiv, RightDiv, FormDiv }  from './formStyles/styles';


export class UserForm extends Component {

     state = {
        step:1,
        name: '',
        email: '',
        cnpj:'',
    }
    //next step
    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };
    //prev step
    prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    //handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.state})
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, confirmEmail, cnpj } = this.state;
        const values = { firstName, lastName, email, confirmEmail, cnpj }

        switch(step){
            case 1:
                return(
                    <ContainerGlobal>
                        <LeftDiv></LeftDiv>
                        <RightDiv>
                            <FormDiv>
                                <FormUserDetails
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                 />
                            </FormDiv>
                        </RightDiv>
                    </ContainerGlobal>
                )
            case 2:
                return (
                    <ContainerGlobal>
                        <LeftDiv></LeftDiv>
                        <RightDiv>
                            <FormDiv>
                                <FormConfirmCodeEmail
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}

                                 />
                            </FormDiv>
                        </RightDiv>
                    </ContainerGlobal>
                )
            case 3:
                return (
                    <ContainerGlobal>
                        <LeftDiv></LeftDiv>
                        <RightDiv>
                            <FormDiv>
                                <FromCompleted
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}

                                 />
                            </FormDiv>
                        </RightDiv>
                    </ContainerGlobal>
                )


        }
    }
}

export default UserForm
