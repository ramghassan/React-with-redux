import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getEmployeeData } from './actions'


class TableData extends Component {
	componentDidMount() {
		this.props.getEmployeeData();
	}
	render() {
		const data = (this.props.employeeData.length && this.props.employeeData)  || [];
    return(
		  <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right">Phone no</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
							<TableCell align="right">{row.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
		</Table>);
  }
}

const mapStateToProps = state => ({
  employeeData: state.tableJson.user
})

const mapDispatchToProps = dispatch => ({
  getEmployeeData: () => dispatch(getEmployeeData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableData)

