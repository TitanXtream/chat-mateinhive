'use client';

import React, { createContext, useContext, useState } from 'react';

type ChatPageSupportProvicerValueType = {
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};
const ChatContext = createContext<ChatPageSupportProvicerValueType | null>(
  null
);

const ChatPageSupportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <ChatContext.Provider value={{ isSearching, setIsSearching }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatPageSupportProvider;

export const useChatSupportContext = () =>
  useContext(ChatContext) as ChatPageSupportProvicerValueType;
