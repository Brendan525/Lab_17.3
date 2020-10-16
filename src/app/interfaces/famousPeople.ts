export interface FamousPeople {
    firstName: string;
    lastName: string;
    innovation: string;
    year: number;
}

export interface FamousPerson {
    name: string;
    invented: string;
    year: number;
}

export interface People {
    complete: FamousPeople[];
    tiny: FamousPerson[];
}