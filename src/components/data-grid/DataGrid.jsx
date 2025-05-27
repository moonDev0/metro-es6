import { DataGridInner, DataGridProvider } from '.';
export const DataGrid = props => {
  return <DataGridProvider {...props}>
      <DataGridInner />
    </DataGridProvider>;
};