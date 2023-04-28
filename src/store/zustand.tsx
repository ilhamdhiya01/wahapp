import { create } from 'zustand';
import { ZustandState, ZustandStore } from '.';

const initialValue: ZustandState = {
  isSearchActive: false,
  isFilterChatActive: false,
  showPupupMenu: false,
  isNewChatActive: false,
  isKomunitasActive: false,
  isProfileActive: false,
};

export const useZustandStore = create<ZustandStore>((set, get) => ({
  ...initialValue,
  setIsSearchActive: () => set((state) => ({ isSearchActive: !state.isSearchActive })),
  setIsFilterChatActive: () => set((state) => ({ isFilterChatActive: !state.isFilterChatActive })),
  setShowPopupMenu: () => set((state) => ({ showPupupMenu: !state.showPupupMenu })),
  setClosePopupMenu: () => set(() => ({ showPupupMenu: false })),
  setIsNewChatActive: (data) => set(() => ({ isNewChatActive: data })),
  setIsKomunitasActive: (data) => set(() => ({ isKomunitasActive: data })),
  setIsProfileActive: (data) => set(() => ({ isProfileActive: data })),
}));
