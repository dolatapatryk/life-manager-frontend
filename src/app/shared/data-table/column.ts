export enum ColumnType {
    TEXT,
    DATE
}

export interface Column<T> {
    name: keyof T;
    sortable?: boolean;
    type?: ColumnType;
}
