export interface ITVSerial {
    backdrop_path: string | null;
    created_by: {id: number, credit_id: string, name: string, gender: number, profile_path: string| null}[];
    episode_run_time: number[];
}
