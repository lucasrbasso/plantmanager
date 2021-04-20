import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';

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
        navigate('Confirmation');
    }, []);

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
