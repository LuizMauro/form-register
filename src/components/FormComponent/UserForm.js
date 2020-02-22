import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormConfirmCodeEmail from './FormConfirmCodeEmail'
import FormCompleted  from './FormCompleted';
import FormPassword from './FormPassword';
import { ContainerGlobal, LeftDiv, RightDiv, FormDiv }  from './formStyles/styles';
import Lottie from 'react-lottie';
import * as animationData from '../animations/Register.json'


export class UserForm extends Component {

     state = {
        step:1,
        name: '',
        email: '',
        cnpj:'',
        senha:'',
        confirmSenha:'',
        confirmCodeEmail:''
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
        const { name, email, cnpj, senha, confirmSenha } = this.state;
        const values = { name, email, cnpj, senha, confirmSenha }

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        switch(step){
            case 1:
                return(
                    <ContainerGlobal>
                        <LeftDiv>
                            <Lottie options={defaultOptions}
                            height={500}
                            width={500}
                            />
                        </LeftDiv>
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
                        <LeftDiv>
                        <Lottie options={defaultOptions}
                            height={500}
                            width={500}
                            />
                        </LeftDiv>
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
                        <LeftDiv>
                        <Lottie options={defaultOptions}
                            height={500}
                            width={500}
                            />
                        </LeftDiv>
                        <RightDiv>
                            <FormDiv>
                                <FormPassword
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}

                                 />
                            </FormDiv>
                        </RightDiv>
                    </ContainerGlobal>
                )
                case 4:
                    return (
                        <ContainerGlobal>
                            <LeftDiv>
                            <Lottie options={defaultOptions}
                                height={500}
                                width={500}
                                />
                            </LeftDiv>
                            <RightDiv>
                                <FormDiv>
                                    <FormCompleted
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange}
                                        values={values}

                                     />
                                </FormDiv>
                            </RightDiv>
                        </ContainerGlobal>
                    )
                    default:


        }
    }
}

export default UserForm
