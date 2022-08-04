interface IPerson {
    adult: boolean;
    gender: number | undefined;
    id: number;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | undefined;
    known_for_department: string;
    credit_id: string;
}

export interface ICast extends IPerson {
    cast_id: number;
    character: string;
    order: number;
}

export interface ICrew extends IPerson {
    department: string;
    job: string;
}
