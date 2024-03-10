import { Table} from 'antd';

interface TableTemplateInterface {
  column: object[];
  data: object[];
}

function TableTemplate({column,data}:TableTemplateInterface ) {
    return(
        <Table columns={column} dataSource={data} />
    )
}



export default TableTemplate;