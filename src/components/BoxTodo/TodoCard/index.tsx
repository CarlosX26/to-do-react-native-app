import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import CheckIcon from "react-native-vector-icons/MaterialIcons";
import TrashIcon from "react-native-vector-icons/Feather";
import { iPropsTodoCard } from "./types";
import { useTodoContext } from "../../../contexts/TodoContext";
import { LinearGradient } from "expo-linear-gradient";

export const TodoCard = ({ name, finished, todo }: iPropsTodoCard) => {
  const { deleteTodo, finishingTodo } = useTodoContext();

  return (
    <LinearGradient
      colors={
        todo.id % 2 === 0
          ? ["rgba(196,196,196,0.5)", "rgba(196,196,196,0.1)"]
          : ["transparent", "transparent"]
      }
      style={styles.box}
      start={{ x: 0.2, y: 0.2 }}
    >
      <View style={styles.boxCheckAndName}>
        <TouchableOpacity onPress={() => finishingTodo(todo)}>
          {finished ? (
            <CheckIcon name="check-box" size={24} color="#1DB863" />
          ) : (
            <CheckIcon
              name="check-box-outline-blank"
              size={24}
              color="#B2B2B2"
            />
          )}
        </TouchableOpacity>
        <Text
          style={finished ? styles.todoNameFinished : styles.todoNameDefault}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(todo)}>
        <TrashIcon name="trash-2" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    paddingHorizontal: 16,
  },
  boxCheckAndName: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoNameFinished: {
    color: "#1DB863",
    fontSize: 16,
    paddingLeft: 16,
    textDecorationLine: "line-through",
  },
  todoNameDefault: {
    color: "#666666",
    fontSize: 16,
    paddingLeft: 16,
  },
});
