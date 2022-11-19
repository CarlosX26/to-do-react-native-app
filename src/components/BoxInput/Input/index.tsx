import { useState } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTodoContext } from "../../../contexts/TodoContext";

export const Input = () => {
  const [input, setInput] = useState<string>();

  const { addTodo } = useTodoContext();

  const addTodoName = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa"
        placeholderTextColor="#B2B2B2"
        onChangeText={setInput}
        value={input}
      />
      <TouchableOpacity style={styles.btn} onPress={addTodoName}>
        <Icon name="arrow-forward-ios" size={28} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    borderRadius: 8,
    position: "absolute",
    left: 16,
    bottom: -28,
  },
  input: {
    backgroundColor: "#FFF",
    height: 64,
    width: "80%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 16,
  },
  btn: {
    backgroundColor: "#FFF",
    height: 64,
    width: "20%",
    borderLeftWidth: 2,
    borderLeftColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  btnIcon: {
    color: "red",
  },
});
