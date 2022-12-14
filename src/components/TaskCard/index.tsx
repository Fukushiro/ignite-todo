import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import { Trash } from "../../assets/Trash";
import { TodoData } from "../../types/todo";
import { Checkbox } from "./Checkbox";
import { styles } from "./styles";
interface TaskCardProps extends ViewProps {
  Todo: TodoData;
  setTodos: (
    newTodo: TodoData[] | ((prevVar: TodoData[]) => TodoData[])
  ) => void;
}
export function TaskCard({ Todo, setTodos, ...rest }: TaskCardProps) {
  // handles
  function handleChangeCheck() {
    console.log(Todo.text);
    setTodos((oldVal) =>
      oldVal.map((val) => {
        if (val.text === Todo.text) {
          return {
            ...val,
            complete: !val.complete,
          };
        }
        return val;
      })
    );
  }
  function handleDeleteTask() {
    setTodos((old) => old.filter((val) => val.text !== Todo.text));
  }
  //

  return (
    <View {...rest} style={[styles.container, rest.style]}>
      <Checkbox checked={Todo.complete} onClick={handleChangeCheck} />
      <Text style={Todo.complete ? styles.textComplete : styles.text}>
        {Todo.text}
      </Text>
      <TouchableOpacity onPress={handleDeleteTask}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
