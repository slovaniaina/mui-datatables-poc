import React from 'react';
import logo from './logo.svg';
import './App.css';
import MUIDataTable from "mui-datatables";
import ReactDOM from "react-dom";
import FilteredMultiSelect from 'react-filtered-multiselect';
import ReactDataGrid from 'react-data-grid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this._columns = [
      {
        key: "id",
        name: "ID"
      },
      {
        key: "title",
        name: "Title"
      },
      {
        key: "count",
        name: "Count"
      }
    ];

    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: "Title " + i,
        count: i * 1000
      });
    }
    this.state = { rows, selectedIndexes: [] };
  }

  rowGetter = i => {
    return this.state.rows[i];
  };

  onRowsSelected = rows => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      )
    });
  };

  onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      )
    });
  };

  render() {
    const rowText = this.state.selectedIndexes.length === 1 ? "row" : "rows";
    return (
      <div>
        <span>
          {this.state.selectedIndexes.length} {rowText} selected
        </span>
        <ReactDataGrid
          rowKey="id"
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes
            }
          }}
        />
      </div>
    );
  }
}

export default App;
