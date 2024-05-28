export interface User {
    user_id: string;
    name: string;
    password: string;
    phone_number: string;
    contacts: string[]
}
export interface UserRequest {
    name: string;
    password: string;
    phone_number: string;
}

export interface contactsRequest {
    phone_number: string
}

export interface ValidateUserRequest {
    name: string;
    password: string;
    phone_number: string;
}