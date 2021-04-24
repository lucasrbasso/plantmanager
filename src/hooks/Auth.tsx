import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    username: string;
}

interface AuthState {
    user: User;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn: (user: User) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    const signIn = useCallback(async (user: User) => {
        await AsyncStorage.setItem('@PlantManager:user', JSON.stringify(user));
        setData({ user });
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.removeItem('@PlantManager:user');

        setData({} as AuthState);
    }, []);

    useEffect(() => {
        async function loadStoragedData(): Promise<void> {
            const user = await AsyncStorage.getItem('@PlantManager:user');

            if (user) {
                setData({ user: JSON.parse(user) });
            }
            setLoading(false);
        }

        loadStoragedData();
    }, []);

    return (
        <AuthContext.Provider
            value={{ user: data.user, signIn, signOut, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
