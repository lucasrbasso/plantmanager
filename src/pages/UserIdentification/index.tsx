import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';
import {
    Container,
    Content,
    Title,
    Form,
    FormText,
    TextInput,
    Footer,
} from './styles';

const UserIdentification: React.FC = () => {
    const { navigate } = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState('');

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputChange = useCallback((value: string) => {
        setIsFilled(!!value);
        setName(value);
    }, []);

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Me diz como chamar você 😪');
            return;
        }

        try {
            AsyncStorage.setItem('@PlantManager:user', name).then(() =>
                navigate('Confirmation', {
                    title: `Prontinho, ${name}`,
                    subtitle:
                        'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
                    buttonTitle: 'Começar',
                    icon: 'smile',
                    nextScreen: 'PlantSelect',
                }),
            );
        } catch {
            Alert.alert('Não foi possível cadastrar seu nome 😪');
        }
    }, [navigate, name]);

    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    touchSoundDisabled
                >
                    <Content>
                        <Form>
                            <FormText>{isFilled ? '😄' : '😃'}</FormText>
                            <Title>
                                Como podemos {'\n'}
                                chamar você?
                            </Title>
                            <TextInput
                                isFilled={isFilled}
                                isFocused={isFocused}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <Footer>
                                <Button
                                    isDisabled={!isFilled}
                                    enabled={!!isFilled}
                                    onPress={handleSubmit}
                                >
                                    Confirmar
                                </Button>
                            </Footer>
                        </Form>
                    </Content>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default UserIdentification;
