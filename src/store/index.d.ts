export interface ZustandState {
  isSearchActive: boolean;
  isFilterChatActive: boolean;
  showPupupMenu: boolean;
  isNewChatActive: boolean;
  isKomunitasActive: boolean;
  isProfileActive: boolean;
}

export interface ZustandAction {
  setIsSearchActive: () => void;
  setIsFilterChatActive: () => void;
  setShowPopupMenu: () => void;
  setClosePopupMenu: () => void;
  setIsNewChatActive: (data: boolean) => void;
  setIsKomunitasActive: (data: boolean) => void;
  setIsProfileActive: (data: boolean) => void;
}

export interface ZustandStore extends ZustandState, ZustandAction {}
