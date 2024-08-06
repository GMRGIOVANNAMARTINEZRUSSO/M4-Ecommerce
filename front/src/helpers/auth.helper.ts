import { LoginProps, RegisterProps } from "@/interfaces/IAuth";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const RegisterUser = async (userData: RegisterProps) => {
    try {
        const response = await fetch(`${apiURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            return response.json();
        } else {
            const errorData = await response.json();
            alert(errorData.message || "User creation error");
            throw new Error(errorData.message || "User creation error");

        }
    } catch (error: any) {
        throw new Error(error);
    }
};

export const LoginUser = async (userData: LoginProps) => {
    try {
        const response = await fetch(`${apiURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            return response.json();
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Error logging in");
            throw new Error(errorData.message || "Error logging in");
        }

    } catch (error: any) {
        throw new Error(error);
    }
}


export const logoutUser = () => {
    localStorage.removeItem('userSession');
};
