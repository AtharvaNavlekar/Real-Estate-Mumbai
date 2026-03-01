import { useCallback } from 'react';

export function useNotifications() {
    const requestPermission = useCallback(async (): Promise<boolean> => {
        if (!('Notification' in window)) return false;
        if (Notification.permission === 'granted') return true;
        if (Notification.permission === 'denied') return false;
        const result = await Notification.requestPermission();
        return result === 'granted';
    }, []);

    const sendNotification = useCallback((title: string, body: string, icon?: string) => {
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        new Notification(title, {
            body,
            icon: icon || '/favicon.ico',
            badge: '/favicon.ico',
        });
    }, []);

    const isGranted = () => ('Notification' in window) && Notification.permission === 'granted';
    const isDenied = () => ('Notification' in window) && Notification.permission === 'denied';
    const isSupported = () => 'Notification' in window;

    return { requestPermission, sendNotification, isGranted, isDenied, isSupported };
}
