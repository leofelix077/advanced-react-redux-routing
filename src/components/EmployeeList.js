import React, { Component } from "react"
import { ListView, ListItem } from "react-native"
import { connect } from "react-redux"
import { employeesFetch } from "../services/actions"
import _ from "lodash"

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);

    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRous(this.props.employees)
    }

    renderRow() {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

        )

    }
}

const mapStateToProps = (state) => {
    return _.map(employees, (val, uid) => ({ ...val, key: uid }))
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);