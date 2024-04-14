import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Container, Button, Text, NativeBaseProvider} from 'native-base';


const NuevaOrden = () => {

    return (
        <NativeBaseProvider>
            <Container>
                <View>
                    <Button>
                        <Text>
                            Nueva Orden 
                        </Text>
                    </Button>
                </View>
            </Container>
        </NativeBaseProvider>
    )
    
}

export default NuevaOrden