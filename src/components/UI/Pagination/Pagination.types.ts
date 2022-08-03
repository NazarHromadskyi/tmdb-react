export interface IPagination {
    totalPages: number;
    onChangePage: (value: number) => void;
    currentPage: number;
}
