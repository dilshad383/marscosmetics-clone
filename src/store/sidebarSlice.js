import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedProduct: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // openSidebar can accept a product payload to show in the sidebar
    openSidebar: (state, action) => {
      state.isOpen = true;
      state.selectedProduct = action.payload || null;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
