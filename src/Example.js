import React from 'react';
import MUIDataTable from "mui-datatables";
import ReactDOM from "react-dom";

import TextField from '@material-ui/core/TextField';

import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classnames from 'classnames';
import Title from "./Title";

const customStyles = {
    BusinessAnalystRow: {
      '& td': {backgroundColor: "#FAA"}
    },
    NameCell: {
      fontWeight: 900,
      backgroundColor : 'green'
    },
  };

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          denseTable: false,
          stacked: true
        };
      }
  

    getMuiTheme = () => createMuiTheme({
        overrides: {
        MUIDataTable: {
            root: {
              backgroundColor: "#AAF",
            },
            paper: {
              boxShadow: "none",
            }
        },
        MUIDataTableBodyCell: {
            root: {
            backgroundColor: "#FFF"
            }
        }
        }
    });

    toggleDenseTable = (event) => {
        this.setState({
          denseTable: event.target.checked
        });
    }
    
    toggleResponsive = (event) => {
    this.setState({
        stacked: event.target.checked ? true : false
    });
    }

  render() {
    // Datatable
    const columns = [
        {
          name: "Name",
          options: {
            filter: true,
            setCellProps: (value) => {
              return {
                className: classnames(
                  {
                    [this.props.classes.NameCell]: value === "Mel Brooks"
                  })
              };
            },
            // setCellHeaderProps: (value) => {
            //   return {
            //     className: classnames(
            //       {
            //         [this.props.classes.NameCell]: true
            //       }),
            //       style: {
            //         textDecoration: 'underline'
            //       }
            //   };
            // }
          }
        },
        {
          name: "Title",
          options: {
            filter: true,
            setCellHeaderProps: (value) => ({style:{textDecoration:'underline'}}),
            customBodyRender: (value, tableMeta, updateValue) => {
              console.log('table meta')
              console.log(tableMeta)
              // return value+' '+tableMeta.rowData[tableMeta.columnIndex+1];
              return <Title title={value} notice={tableMeta.rowData[tableMeta.columnIndex+1]} color= {tableMeta.rowData[tableMeta.columnIndex+2]}/>
            }
          }
        },
        {
          name: "Title Description",
          options: {
            // filter: true,
            // setCellHeaderProps: (value) => ({style:{textDecoration:'underline'}}),
            filter : false,
            search : false,
            display : 'false'
          }
        },
        {
          name: "Color",
          options: {
            // filter: true,
            // setCellHeaderProps: (value) => ({style:{textDecoration:'underline'}}),
            filter : false,
            search : false,
            display : 'false'
          }
        },
        {
          name: "Location",
          options: {
            filter: false,
          }
        },
        {
          name: "Age",
          options: {
            filter: true,
          }
        },
        {
          name: "Salary",
          options: {
            filter: true,
            customBodyRender: (value, tableMeta, updateValue) => {
              const nf = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              });
  
              return nf.format(value);
            }
          }
        },
      ];
  
      const data = [
        ["Gabby George", "Business Analyst", "EST SEULEMENT", "red", "Minneapolis", 30, 100000],
        ["Aiden Lloyd", "Business Consultant", "VOD SEULEMENT", "blue","Dallas", 55, 200000],
        ["Jaden Collins", "Attorney", "EST SEULEMENT", "yellow","Santa Ana", 27, 500000],
        ["Franky Rees", "Business Analyst", "EST SEULEMENT", "red","St. Petersburg", 22, 50000],
        ["Aaren Rose", "Business Consultant", "EST SEULEMENT", "red","Toledo", 28, 75000],
        ["Blake Duncan", "Business Management Analyst", "red", "EST SEULEMENT","San Diego", 65, 94000],
        ["Frankie Parry", "Agency Legal Counsel", "EST SEULEMENT", "red","Jacksonville", 71, 210000],
        ["Lane Wilson", "Commercial Specialist", "EST SEULEMENT", "red","Omaha", 19, 65000],
        ["Robin Duncan", "Business Analyst", "EST SEULEMENT", "red","Los Angeles", 20, 77000],
        ["Mel Brooks", "Business Consultant", "EST SEULEMENT", "red","Oklahoma City", 37, 135000],
        ["Harper White", "Attorney", "EST SEULEMENT", "red","Pittsburgh", 52, 420000],
        ["Kris Humphrey", "Agency Legal Counsel", "EST SEULEMENT", "red","Laredo", 30, 150000],
        ["Frankie Long", "Industrial Analyst", "EST SEULEMENT", "red","Austin", 31, 170000],
        ["Brynn Robbins", "Business Analyst", "EST SEULEMENT", "red","Norfolk", 22, 90000],
        ["Justice Mann", "Business Consultant", "EST SEULEMENT", "red","Chicago", 24, 133000],
        ["Addison Navarro", "Business Management Analyst", "EST SEULEMENT", "red","New York", 50, 295000],
        ["Jesse Welch", "Agency Legal Counsel", "EST SEULEMENT", "red","Seattle", 28, 200000],
        ["Eli Mejia", "Commercial Specialist", "EST SEULEMENT", "red","Long Beach", 65, 400000],
        ["Gene Leblanc", "Industrial Analyst", "EST SEULEMENT", "red","Hartford", 34, 110000],
        ["Danny Leon", "Computer Scientist","EST SEULEMENT", "red", "Newark", 60, 220000],
        ["Lane Lee", "Corporate Counselor", "EST SEULEMENT", "red", "red","Cincinnati", 52, 180000],
        ["Jesse Hall", "Business Analyst", "EST SEULEMENT", "red","Baltimore", 44, 99000],
        ["Danni Hudson", "Agency Legal Counsel", "EST SEULEMENT", "red","Tampa", 37, 90000],
        ["Terry Macdonald", "Commercial Specialist", "EST SEULEMENT", "red","Miami", 39, 140000],
        ["Justice Mccarthy", "Attorney", "EST SEULEMENT", "red","Tucson", 26, 330000],
        ["Silver Carey", "Computer Scientist","EST SEULEMENT", "red", "Memphis", 47, 250000],
        ["Franky Miles", "Industrial Analyst","EST SEULEMENT", "red", "Buffalo", 49, 190000],
        ["Glen Nixon", "Corporate Counselor","EST SEULEMENT", "red", "Arlington", 44, 80000],
        ["Gabby Strickland", "Business Process Consultant", "red","EST SEULEMENT", "Scottsdale", 26, 45000],
        ["Mason Ray", "Computer Scientist", "EST SEULEMENT", "red","San Francisco", 39, 142000]
      ];
  
      const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: this.state.stacked ? 'stacked' : 'scrollMaxHeight',
        fixedHeaderOptions: {
          xAxis: true,
          yAxis: true
        },
        rowHover: false,
        setRowProps: (row) => {
          return {
            className: classnames(
              {
                [this.props.classes.BusinessAnalystRow]: row[1] === "Business Analyst"
              }),
            style: {border: '3px solid grey',}
          };
        },
        setTableProps: () => {
          return {
            padding: this.state.denseTable ? "none" : "default",
  
            // material ui v4 only
            size: this.state.denseTable ? "small" : "medium",
          };
        },
        selectableRows : 'multiple',
        selectableRowsOnClick : true
      };
  
      return (
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.denseTable}
                  onChange={this.toggleDenseTable}
                  value="denseTable"
                  color="primary"
                />
              }
              label="Dense Table"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.stacked}
                  onChange={this.toggleResponsive}
                  value="stacked"
                  color="primary"
                />
              }
              label="Stacked Table"
            />
          </FormGroup>
          <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options}/>
        </MuiThemeProvider>
      );
  }
}

export default withStyles(customStyles)(Example);
