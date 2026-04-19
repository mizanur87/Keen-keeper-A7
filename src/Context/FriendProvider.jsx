import { FriendContext } from "./FriendContext";

// 1. Use lowercase 'children'
const FriendProvider = ({ children }) => {
  const data = {
    test: "demo",
  };

  return (
    // 2. Use lowercase 'children' here as well
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
