import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardItem, Input, Button } from "./common"

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>

                <CardItem>
                    <Input
                        label="Name"
                        placeholder="John Doe"
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="(51)99999-9999"
                    />
                </CardItem>

                <CardItem>
                    <Button>
                        Create
                    </Button>
                </CardItem>

            </Card>
        )
    }
}

export default EmployeeCreate