export interface ZustandState {
  isSearchActive: boolean;
  isFilterChatActive: boolean;
  showPupupMenu: boolean;
  isNewChatActive: boolean;
}

export interface ZustandAction {
  setIsSearchActive: (data: boolean) => void;
  setIsFilterChatActive: () => void;
  setShowPopupMenu: () => void;
  setClosePopupMenu: () => void;
  setIsNewChatActive: (data: boolean) => void;
}

export interface ZustandStore extends ZustandState, ZustandAction {}
