
import React from "react";
import { Card } from '@themesberg/react-bootstrap';
import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  Selection,
  Scrolling,
  
} from 'devextreme-react/data-grid';

// our dataset
import { sales, selectedKeys } from './employees';

export const RankingTable = () => {
  
    return (
    <Card border="light" className="shadow-sm">
      <DataGrid className="low"
      
        dataSource={sales}
        keyExpr={'id'}
        allowColumnReordering={true}
       defaultSelectedRowKeys={selectedKeys}
      >
        <Scrolling mode="standard" />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <FilterRow visible={true} />
        <Selection mode={'multiple'} />

        <Column
          dataField={'id'}
          caption={'ID'}
          allowSorting={false}
          allowFiltering={false}
          allowGrouping={false}
          allowReordering={false}
          width={100}
        />
        <Column dataField={'firstName'} />
        <Column dataField={'lastName'} sortOrder={'asc'} />
        <Column dataField={'title'} groupIndex={0} />
        <Column dataField={'email'} />
        
             
        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </Card>
  );
};