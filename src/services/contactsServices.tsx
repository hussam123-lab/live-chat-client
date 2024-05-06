import { User } from "types/users";


export async function create_user(contact: User) {
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