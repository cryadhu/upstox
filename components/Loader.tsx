import { ActivityIndicator } from "react-native";

type SizeProp = "small" | "large" | undefined;

const Loader = ({ size = "small" }: { size?: SizeProp }) => {
  return <ActivityIndicator size={size} />;
};

export default Loader;
