import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserStore = create(
    persist(
        (set) => ({
            user: [],

            // Function to update the user data (completely)
            addUser: (userData) => set(() => ({
                user: userData,  // Replace user data entirely
            })),


            // Function to update specific user field and also keep the default values updated


            // Reset to default values if needed
            resetUser: () => set((state) => ({ user: { ...state.user } })),
        }),
        {
            name: 'USER_DETAILS',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);

export default useUserStore;
