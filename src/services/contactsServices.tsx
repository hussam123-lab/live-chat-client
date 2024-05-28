import { contactsRequest, User, UserRequest } from "types/users";


export async function create_user(contact: UserRequest) {
    try {
        const response = await fetch("http://127.0.0.1:8000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',  // Ensures the server treats the body as JSON
            },
            body: JSON.stringify(contact),
        });
        console.log("response: ", response)
        if (!response.ok) {
            const errorData = await response.json(); // Parsing error message from the server
            console.error("Error:", errorData);
            throw new Error('Server responded with an error: ' + errorData.message);
        }
        const result = await response.json();
        console.log("Success:", result);
        return result

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function add_contact(user: User, contactRequest: contactsRequest) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/users/${user.user_id}/add_contact`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',  // Ensures the server treats the body as JSON
            },
            body: JSON.stringify(contactRequest),
        });
        if (!response.ok) {
            const errorData = await response.json(); // Parsing error message from the server
            console.error("Error:", errorData);
            throw new Error('Server responded with an error: ' + errorData.message);
        }
        const result = await response.json();
        console.log("Success:", result);
        return result
    }
    catch (e) {
        console.log(e)
    }

}

export async function get_user(user_id: string): Promise<User> {
    try {
        const response = await fetch(`http://127.0.0.1:8000/users/${user_id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',  // Ensures the server treats the body as JSON
            }
        });

        if (!response.ok) {
            const errorData = await response.json(); // Parsing error message from the server
            console.error("Error:", errorData);
            throw new Error('Server responded with an error: ' + errorData.message);
        }

        const result: User = await response.json();
        console.log("Success:", result);
        return result;
    }
    catch (e) {
        console.log(e);
        throw e; // Re-throw the error to be handled by the calling function
    }
}