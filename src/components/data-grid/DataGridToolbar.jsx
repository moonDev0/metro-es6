import React from 'react';
import { cn } from '@/lib/utils';
const DataGridToolbar = ({
  children,
  className
}) => {
  return <div data-toolbar className={cn('flex items-center gap-2 justify-between', className)}>
      {children}
    </div>;
};
export { DataGridToolbar };