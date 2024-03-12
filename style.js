import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  headerview: {
    backgroundColor: "whitesmoke",
    height: 40,
    justifyContent: "center",
  },
  headertext: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputbox: {
    backgroundColor: "whitesmoke",
    height: 45,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "lightblue",
    width: 300,
  },
  inputview: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  addpress: {
    backgroundColor: "lightblue",
    marginLeft: 4,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
  },
  listshow: {
    margin: 10,
    padding: 10,
    height: 40,
    paddingLeft: 15,
    borderRadius: 10,
    width: 300,
    fontSize: 20,
  },
  listcontainer: {
    display: "flex",
    flexDirection: "row",
  },
  deletePress: {
    width: 55,
    backgroundColor: "#8a060c",
    marginBottom: 10,
    marginTop: 9,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: -5,
  },
});
export default style;
