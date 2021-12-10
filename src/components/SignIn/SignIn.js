import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({emailInput: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({passwordInput: event.target.value});
    }

    onSubmitSignIn = () => {
        // Send a POST request to /signin route using the inputted email and password
        fetch('https://shrouded-falls-98129.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.emailInput,
                password: this.state.passwordInput
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.onRouteChange('home');
                    this.props.loadUser(user);
                }
            });
        
    }

    render () {
        const { onRouteChange } = this.props;
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            {/* onClick has an arrow function b/c we don't want the function to run instantly,
                                we only want it to run if the button was clicked. */}
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" value="Sign in" onClick={this.onSubmitSignIn}/>
                        </div>
                        <div className="lh-copy mt3">
                            <p href="#0" className="f6 link dim black db pointer" onClick={() => onRouteChange('register')}>Register Here</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default SignIn;