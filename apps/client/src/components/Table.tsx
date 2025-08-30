import './Table.css';

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  return (
    <table>
      <thead className='header'>
        <tr>
          {columns.map((column) => (
            <th key={column.key as string} className='headerCell'>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={`row-${rowIndex}`} className='row'>
            {columns.map((column) => (
              <td key={`${column.key as string}-${rowIndex}`} className='cell'>
                {column.render ? column.render(item) : String(item[column.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
