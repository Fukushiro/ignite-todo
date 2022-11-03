import { Text, TextInput, View } from "react-native";
import { Plus } from "../../assets/Plus";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TodoList } from "../../components/TodoList";
import { styles } from "./styles";
import { useState } from "react";
import { TodoData } from "../../types/todo";

export function Home() {
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [todos, setTodos] = useState<TodoData[]>([]);
  // functions
  function addTodo(newTodo: string) {
    if (todos.filter((v) => v.text === newTodo).length > 0) {
      return;
    }
    setTodos((oldValue) => [...oldValue, { text: newTodo, complete: false }]);
  }
  // handle
  function handleAddNewTodo() {
    addTodo(newTaskContent);
    setNewTaskContent("");
  }
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            style={styles.formInput}
            placeholder="Adicione uma nova tarefa"
            value={newTaskContent}
            onChangeText={setNewTaskContent}
          />
          <Button variant="icon" icon={<Plus />} onPress={handleAddNewTodo} />
        </View>
        <TodoList
          style={styles.todoContainer}
          todos={todos}
          setTodos={setTodos}
        />
      </View>
    </>
  );
}
