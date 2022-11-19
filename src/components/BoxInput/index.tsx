import { View, StyleSheet, Text } from "react-native";
import { useTodoContext } from "../../contexts/TodoContext";
import { Input } from "./Input";

export const BoxInput = () => {
  const { todoList } = useTodoContext();

  return (
    <View style={styles.box}>
      <View style={styles.boxHead}>
        <Text style={styles.textLogo}>To.do</Text>
        <Text style={styles.textInfo}>
          você tem {todoList.length}{" "}
          {todoList.length < 2 ? "tarefa" : "tarefas"}
        </Text>
      </View>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "15%",
    backgroundColor: "#8257E5",
    paddingHorizontal: 16,
    position: "relative",
  },
  boxHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLogo: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 32,
  },
  textInfo: {
    color: "#FFF",
    fontSize: 20,
  },
});
