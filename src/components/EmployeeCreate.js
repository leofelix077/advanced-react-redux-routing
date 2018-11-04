import React, { Component } from "react";
import { Text } from "react-native"
import { employeeUpdate, employeeCreate } from "../services/actions"
import { connect } from "react-redux"
import { Card, CardItem, Input, Button } from "./common"
import { Picker } from "react-native"

class EmployeeCreate extends Component {

    renderPickerItems() {
        console.log(weekDays);
        return weekDays.map(day => <Picker.Item label={day} value={day} key={day} />)
    }

    onButtonPress() {
        const { name, phone, shift, employeeCreate } = this.props;
        employeeCreate({ name, phone, shift: shift || "Monday" });
    }

    render() {
        return (
            <Card>

                <CardItem>
                    <Input
                        label="Name"
                        placeholder="John Doe"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ props: "name", value })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="(51)99999-9999"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ props: "phone", value })}
                    />
                </CardItem>


                <CardItem>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                </CardItem>
                <CardItem style={{ paddingLeft: 20 }}>
                    <Picker
                        style={{ flex: 1, paddingLeft: 10 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: "shift", value })}
                    >
                        {this.renderPickerItems()}
                    </Picker>
                </CardItem>

                <CardItem>
                    <Button handlePress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardItem>

            </Card>
        )
    }
}

const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 5,
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)