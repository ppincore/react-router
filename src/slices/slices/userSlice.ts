import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie, setCookie, deleteCookie } from '../../utils/cookie';
import { TUser } from '../../utils/types';

type initialState = {
  user: TUser;
  onLoad: boolean;
  isAuth: boolean;
  isInit: boolean;
  error: string;
};

const initialState: initialState = {
  user: {
    email: '',
    name: ''
  },
  onLoad: false,
  isAuth: false,
  isInit: false,
  error: ''
};

const userSlice = createSlice({
    name: 'userSlcie',
    initialState,
    reducers: {

    },
    selectors: {
        
    },
    extraReducers: () => {
        
    }
})

export default userSlice