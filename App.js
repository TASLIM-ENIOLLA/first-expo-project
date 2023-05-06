import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Fragment, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="" /> */}
      <ScrollView>
        <DefaultComponent />
        <HelloWorld />
        <StateChange />
        <ListView />
        <Inputs />
      </ScrollView>
    </View>
  );
}

const GlobalComponent = ({title, children}) => {
  return (
    <Fragment>
      <Text style={styles.globalComponent}>{title}</Text>
      {children}
    </Fragment>
  )
}

const DefaultComponent = ({title}) => (
  <GlobalComponent title="Default Component">
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </GlobalComponent>
)

const HelloWorld = ({title}) => (
  <GlobalComponent title="Hello World">
    <Text>Welcome to Tutorialspoint</Text>
  </GlobalComponent>
)

const StateChange = ({title}) => {
  const [counter, setCounter] = useState(0)

  return (
    <GlobalComponent title="State Changes">
      <Text onPress={() => setCounter((n) => (n + 1))}>Click to increment counter: {counter}</Text>
    </GlobalComponent>
  )
}

const ListView = () => {
  const list = [
    {id: 0, name: 'ben'},
    {id: 1, name: 'susan'},
    {id: 2, name: 'robert'},
    {id: 3, name: 'mary'},
    {id: 4, name: 'paul'},
  ]

  function capitalize (string) {
    const strArr = string.split('')
    const firstLetter = strArr.shift()

    return `${String(firstLetter).toUpperCase()}${strArr.join('')}`
  }

  return (
    <GlobalComponent title="List View">{
      list.map(({id, name}) => (
        <TouchableOpacity style={styles.listItem} key={id} onPress={() => alert(capitalize(name))}>
          <Text>{capitalize(name)}</Text>
        </TouchableOpacity>
      ))
    }</GlobalComponent>
  )
}

const Inputs = () => {
  return (
    <GlobalComponent title="Inputs">
      <TextInput
        underlineColorAndroid="transparent"
        style={{
          paddingVertical: 7,
          paddingHorizontal: 10,
          marginBottom: 10,
          borderColor: 'lightgrey',
          borderWidth: 2,
          borderRadius: 25
        }}
        placeholder="Email"

      />
    </GlobalComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: 10
    // justifyContent: 'space-between',
  },
  globalComponent: {
    marginTop: 50,
    marginBottom: 10,
    color: 'steelblue'
  },
  listItem: {
    padding: 10,
    backgroundColor: 'orange',
    marginBottom: 5,
    borderRadius: 10,
    textTransform: 'uppercase',
    width: 200
  }
});