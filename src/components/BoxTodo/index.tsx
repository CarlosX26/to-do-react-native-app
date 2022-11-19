import { View, StyleSheet, FlatList } from "react-native";
import { useTodoContext } from "../../contexts/TodoContext";
import { TodoCard } from "./TodoCard";

export const BoxTodo = () => {
  const { todoList } = useTodoContext();

  return (
    <View style={styles.box}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoCard
            key={item.id}
            name={item.name}
            finished={item.finished}
            todo={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "85%",
    paddingTop: 40,
  },
});
