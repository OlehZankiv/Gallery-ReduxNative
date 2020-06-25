import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GalleryPhotoContainer from "./src/components/Gallery/GalleryPhotoContainer";
import FullPhoto from "./src/components/FullPhoto/FullPhoto";

export default function App() {
    const Stack = createStackNavigator();
    const optionsStyleHeader = {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerText,
    };
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Gallery">
                    <Stack.Screen options={optionsStyleHeader} name="Gallery" component={GalleryPhotoContainer} />
                    <Stack.Screen
                        options={({ route }) => ({
                            title: route.params.userName,
                            headerTintColor: "#fff",
                            ...optionsStyleHeader,
                        })}
                        name="FullPhoto"
                        component={FullPhoto}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
    },
    headerText: {
        textAlign: "center",
        color: "white",
        letterSpacing: 1,
    },
});
