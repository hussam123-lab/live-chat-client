import { ValidateUserRequest } from "types/users";

export async function validateUser(validateUserRequest: ValidateUserRequest) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/validate-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',  // Ensures the server treats the body as JSON
            },
            body: JSON.stringify(validateUserRequest),
        });
        if (!response.ok) {
            const errorData = await response.json(); // Parsing error message from the server
            console.error("Error:", errorData);
            throw new Error('Server responded with an error: ' + errorData.message);
        }
        console.log("Success");
        const result = await response.json();
        console.log("Success:", result);
        return result
    }
    catch (e) {
        console.log(e)
    }

}