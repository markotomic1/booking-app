import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../dataTableSource";
import useFetch from "../../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const DataTable = ({ columns }) => {
  const [list, setList] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(`/${path}`);
  console.log(data);
  useEffect(() => {
    setList(data);
  }, [data]);
  const handleDelete = async (id) => {
    console.log(data);
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' className='link'>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='dataTable'>
      <div className='dataTableTitle'>
        {path}
        <Link to={`/${path}/new`} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;
