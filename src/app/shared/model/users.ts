




export interface Iusers{
    userName: string;
    userId: string;
    userRole: URole
}

export enum URole{
    admin="Admin",
    users="Users"
}