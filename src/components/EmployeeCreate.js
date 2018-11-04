import React, { Component } from "react";
import { employeeUpdate, employeeCreate } from "../services/actions"
import { connect } from "react-redux"
import { Card, CardItem, Button } from "./common"
import { EmployeeForm } from "./EmployeeForm"

class EmployeeCreate extends Component {

    renderPickerItems() {
        return weekDays.map(day => <Picker.Item label={day} value={day} key={day} />)
    }

    onButtonPress() {
        const { name, phone, shift, employeeCreate } = this.props;
        employeeCreate({ name, phone, shift: shift || "Monday" });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardItem>
                    <Button handlePress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

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