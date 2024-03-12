import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import style from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Task");
      if (value !== null) {
        setList(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("Task", jsonValue);

      console.log("Store Successfully");
    } catch (e) {
      console.log("error");
      // saving error
    }
  };
  const onChange = (text) => {
    setValue(text);
  };

  const onPress = () => {
    if (value === "") {
      Alert.alert("Please enter the task", "Information");
    } else {
      const todolist = {
        id: list.length,
        value: value,
      };
      const update = [...list, todolist];
      console.log(update);
      setList(update);
      setValue("");
      storeData(list);
    }
  };

  const deleteTask = (id) => {
    const restList = list.filter((item) => item.id !== id);
    setList(restList);
    storeData(restList);
  };

  const edittext = (id, newvalue) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newvalue } : item))
    );

    setEdit(id);
    storeData(list);
  };

  return (
    <SafeAreaView>
      <View style={style.headerview}>
        <Text style={style.headertext}>To do List</Text>
      </View>
      <View style={style.inputview}>
        <TextInput
          placeholder="Enter your task.."
          style={style.inputbox}
          onChangeText={onChange}
          value={value}
        />
        <Pressable style={style.addpress} onPress={onPress}>
          <Text style={{ fontSize: 20 }}>Add</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={style.listcontainer}>
              <TextInput
                value={item.value}
                editable={true}
                style={[
                  style.listshow,
                  { backgroundColor: edit === item.id ? "#c8e8fa" : "grey" },
                ]}
                onBlur={() => setEdit(null)}
                onChangeText={(newvalue) => edittext(item.id, newvalue)}
              />
              <Pressable
                style={style.deletePress}
                onPress={() => deleteTask(item.id)}
              >
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 13 }}
                >
                  Delete
                </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
