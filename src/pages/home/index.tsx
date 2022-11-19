import { StyleSheet, SafeAreaView } from "react-native";
import { BoxInput } from "../../components/BoxInput";
import { BoxTodo } from "../../components/BoxTodo";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BoxInput />
      <BoxTodo />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
