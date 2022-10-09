import React from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {ProjectInterface} from "../../lib/load-data";

interface TanTableProps{
    projects: ProjectInterface[]
}

const TanTable = ({projects} : TanTableProps) : JSX.Element => {
    const [data, setData] = React.useState(() => [...projects])
    // https://tanstack.com/table/v8/docs/examples/react/basic
    const columnHelper = createColumnHelper<ProjectInterface>()

    const columns = [
        columnHelper.accessor('project_name', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.project_type, {
            id: 'project_type',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Last Name</span>,
            footer: info => info.column.id,
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>   <table>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
            <tfoot>
            {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => (
                        <th key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.footer,
                                    header.getContext()
                                )}
                        </th>
                    ))}
                </tr>
            ))}
            </tfoot>
        </table></div>
    )
}

export default TanTable