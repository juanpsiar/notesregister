import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import Services from '../services/student.services';
import StudentServices from "../services/student.services";
  
const {    
    SingleSelectFilter
  } = Filters;

const columns = [
    { key: "student", name: "Estudiante" },
    { key: "homework", name: "Deberes", editable: true },  
    { key: "test", name: "Examen", editable: true },  
    { key: "average", name: "Promedio", filterRenderer: SingleSelectFilter, filterable: true, sortable: true, sortDescendingFirst: true },  
];

const TableNotes = () => {
    const [filters, setFilters] = useState({});

    const selectors = Data.Selectors;
    const handleFilterChange = filter => filters => {        
        const newFilters = { ...filters };
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }      

        return newFilters;
    };
  
    const getValidFilterValues = (rows, columnId) => {
        

        return rows
        .map(r => r[columnId])
        .filter((item, i, a) => {
            return i === a.indexOf(item);
        });
    };
  
    const getRows = (rows, filters) =>  {
        return selectors.getRows({ rows, filters });
    };

    const sendAverage  = (h, t)=>{
        let avg = 'Reprobado';
        if((parseFloat(h)+parseFloat(t))/2 >= 7 ){
            avg = 'Aprobado'
        }
        
        return avg; 
    };

    const buildTable  = (rowsData) => {
        const tableData = rowsData.map((data)=>{
            
            return {
                _id: data._id,
                student: data.student,
                homework: data.homework, 
                test: data.test, 
                average: sendAverage(data.homework, data.test), 
            }
        });
                
        return tableData;         
    };

    const [gridState, setGridState] = useState();
    const filteredRows = getRows(gridState, filters);

    const getDataServer = () => {
        Services.getStudent().then((data)=> {
            setGridState(buildTable(data.data)); 
        });
    };

    useEffect(() => {
        getDataServer();                
    }, []);

    const checkValue = (valueCell) => {
        let flag = false;     
        if(isNaN(valueCell) && 
        (parseFloat(valueCell[Object.keys(valueCell)]) >=0 && parseFloat(valueCell[Object.keys(valueCell)])<=10)){
            flag = true; 
        }
        return flag;
    };

    const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {    
        const rowsUpdated = gridState.slice();        
        if(!checkValue(updated)){
            alert('El rango de valores permitidos es de 0 a 10');
        }else {
            for (let i = fromRow; i <= toRow; i++) {
                rowsUpdated[i] = { ...rowsUpdated[i], ...updated };          
            }                   
                    
            const dataNew = StudentServices.updateNote(rowsUpdated[fromRow]["_id"], updated);
            console.log('inserted data', dataNew);
            setGridState(buildTable(rowsUpdated));
        }
    };
    

    return (
        <div>
            <ReactDataGrid
                columns={columns}                
                rowGetter={i => filteredRows[i]}      
                rowsCount={filteredRows.length}
                minColumnWidth={180}
                minHeight={500}
                minWidth={1000}
                toolbar={<Toolbar enableFilter={true} />}
                onGridRowsUpdated={onGridRowsUpdated}
                enableCellSelect={true}
                onAddFilter={filter => setFilters(handleFilterChange(filter))}
                onClearFilters={() => setFilters({})}
                getValidFilterValues={columnKey => getValidFilterValues(gridState, columnKey)}
            />
        </div>
    );
}

export default TableNotes; 