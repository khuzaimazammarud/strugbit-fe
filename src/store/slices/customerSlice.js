import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CUSTOMERS, CreateCustomer, EditCustomer } from '../../configs/apiRoutes';

export const createCustomer = createAsyncThunk(
  'customers/createCustomer',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${CUSTOMERS}`, customerData);
      toast.success("Customer created successfully");
      return response.data;
    } catch (err) {
      toast.error(err.response.data.msg);
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async ({ sortBy, sortOrder }) => {
    const response = await axios.get(`${CUSTOMERS}?sortBy=${sortBy}&sortOrder=${sortOrder}`);
    return response.data; 
  }
);

export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${CUSTOMERS}/${id}`, data);
      toast.success("Customer updated successfully");
      return response.data; 
    } catch (err) {
      toast.error(err.response.data.msg);
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (customerId, { rejectWithValue }) => {
    try {
    await axios.delete(`${CUSTOMERS}/${customerId}`);
    toast.success("Customer deleted successfully");
      return customerId;
    } catch (err) {
      toast.error(err.response.data.msg);
      return rejectWithValue(err.response.data);
    }
  }
);



const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.list.findIndex(customer => customer._id === action.payload.data._id);
        if (index !== -1) {
          state.list[index] = action.payload.data; 
        }
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.list = state.list.filter(customer => customer._id !== action.payload);
      });
  },
});

export default customersSlice.reducer;
