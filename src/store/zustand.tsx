import { create } from 'zustand';
import { ZustandState, ZustandStore } from '.';

const initialValue: ZustandState = {
  isSearchActive: false,
  isFilterChatActive: false,
  showPupupMenu: false,
  isNewChatActive: false,
};

export const useZustandStore = create<ZustandStore>((set, get) => ({
  ...initialValue,
  setIsSearchActive: (data) => set(() => ({ isSearchActive: data })),
  setIsFilterChatActive: () => set((state) => ({ isFilterChatActive: !state.isFilterChatActive })),
  setShowPopupMenu: () => set((state) => ({ showPupupMenu: !state.showPupupMenu })),
  setClosePopupMenu: () => set(() => ({ showPupupMenu: false })),
  setIsNewChatActive: (data) => set(() => ({ isNewChatActive: data })),
}));
