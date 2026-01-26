import axios from "axios";
import type { User } from "../context/AuthContext";

const API_URL = "http://localhost:3001";
export interface Product {
    id: string;
    name: string;
    price: number
};
//login
export const login = async (
    userName: string,
    password: string
): Promise<User | null> => {
    try {
        const response = await axios.get<User[]>(`${API_URL}/users`, {
            params: { userName, password }
        });
        return response.data[0] || null;

    }
    catch (error) {
        console.log("login failed:", error);
        return null;
    }

}
//fetchProducts
export const getProducts = async (

): Promise<Product[] | null> => {
    try {
        const response = await axios.get<Product[]>(`${API_URL}/products`);
        return response.data || null;

    }
    catch (error) {
        console.log(" failed:", error);
        return null;
    }
};
//deleteProducts
export const deleteProduct = async (
    id: string

): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);

    }
    catch (error) {
        console.log("Fieled to fetch products:", error);

    }
}