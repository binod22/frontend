import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocialAccount {
  id: string;
  platform: string;
  username: string;
}

interface SocialAccountsState {
  accounts: SocialAccount[];
}

const initialState: SocialAccountsState = {
  accounts: [],
};

export const socialAccountsSlice = createSlice({
  name: 'socialAccounts',
  initialState,
  reducers: {
    addSocialAccount: (state, action: PayloadAction<SocialAccount>) => {
      state.accounts.push(action.payload);
    },
    removeSocialAccount: (state, action: PayloadAction<string>) => {
      state.accounts = state.accounts.filter(account => account.id !== action.payload);
    },
  },
});

export const { addSocialAccount, removeSocialAccount } = socialAccountsSlice.actions;
export default socialAccountsSlice.reducer;
