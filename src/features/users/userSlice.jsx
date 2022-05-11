import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: "1", name: "Gökalp", email: "avcu219@gmail.com" },
    { id: "2", name: "Nuri", email: "nuri1966@gmail.com" },
];

const userSlice = createSlice({
    name: "users",
    initialState
});