import { createNativeStackNavigator } from "@react-navigation/native-stack";
const DetailStack = createNativeStackNavigator();

// import Detail from "./Detail";

export default function Show(id) {
    const { data, isPending, error } = API_Show(id);
    console.log(data);
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen name="Detail Produk">
                <View>
                    <Text>{data.name}</Text>
                    <Text>{data.image}</Text>
                    <Text>{data.id}</Text>
                </View>
            </DetailStack.Screen>
        </DetailStack.Navigator>
    );
}
