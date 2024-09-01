import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


export const useZusStore = create(devtools(
    (set) => ({

        aiData: {},
        
        setAiData: (user) => set({ aiData: user }),
        userTrip: {},
        setUserTrip: (trip) => set({ userTrip: trip }),
        
      
    })
));