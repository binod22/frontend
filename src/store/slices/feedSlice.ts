import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { feedAPI } from '../../services/api';

interface FeedState {
    items: any[];
    loading: boolean;
    error: string | null;
    refreshing: boolean;
}

const initialState: FeedState = {
    items: [],
    loading: false,
    error: null,
    refreshing: false,
};

export const fetchUnifiedFeed = createAsyncThunk(
    'feed/fetchUnified',
    async () => {
        const response = await feedAPI.getUnifiedFeed();
        return response.data;
    }
);

export const refreshFeeds = createAsyncThunk(
    'feed/refresh',
    async () => {
        const response = await feedAPI.refreshFeeds();
        return response.data;
    }
);

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUnifiedFeed.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUnifiedFeed.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchUnifiedFeed.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch feed';
            })
            .addCase(refreshFeeds.pending, (state) => {
                state.refreshing = true;
            })
            .addCase(refreshFeeds.fulfilled, (state) => {
                state.refreshing = false;
            })
            .addCase(refreshFeeds.rejected, (state, action) => {
                state.refreshing = false;
                state.error = action.error.message || 'Failed to refresh feeds';
            });
    },
});

export default feedSlice.reducer;
