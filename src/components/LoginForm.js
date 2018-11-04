import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { emailChanged, passwordChanged, loginUser } from "../services/actions"
import { Card, CardItem, Input, Button, Spinner } from "./common"

class LoginForm extends Component {

    onChangeEmail(email) {
        this.props.emailChanged(email);
    }

    onChangePassword(password) {
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size="large" />
            )
        }
        return (
            <Button handlePress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    renderErrorIfExists() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: "white" }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>

                <CardItem>
                    <Input
                        label="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onChangeEmail.bind(this)}
                        value={this.props.email}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onChangePassword.bind(this)}
                        value={this.props.password}
                    />
                </CardItem>

                {this.renderErrorIfExists()}

                <CardItem>
                    {this.renderButton()}
                </CardItem>

            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading

    }
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);