import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';

export const useFormStore = create(
    persist(
        (set) => ({
            name: '',
            country: '',
            setName: (name) => set(produce((state) => { state.name = name; })),
            setCountry: (country) => set(produce((state) => { state.country = country; })),
            setFormData: (data) => set(produce((state) => {
                state.name = data.name;
                state.country = data.country;
            })),
        }),
        {
            name: 'qoutation-data',
            getStorage: () => AsyncStorage
        }
    )
);
