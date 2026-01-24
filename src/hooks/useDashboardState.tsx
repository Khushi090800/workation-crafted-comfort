import { useState, useEffect, useCallback } from 'react';

export interface BookingState {
  confirmedEvents: number[];
  bookedLogistics: number[];
  reservedEquipment: number[];
  bookedActivities: number[];
  volcanoTrekBooked: boolean;
}

const STORAGE_KEY = 'deskaway_dashboard_bookings';

const defaultState: BookingState = {
  confirmedEvents: [],
  bookedLogistics: [],
  reservedEquipment: [],
  bookedActivities: [],
  volcanoTrekBooked: false,
};

export const useDashboardState = () => {
  const [bookings, setBookings] = useState<BookingState>(() => {
    if (typeof window === 'undefined') return defaultState;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultState;
    } catch {
      return defaultState;
    }
  });

  // Persist to localStorage whenever bookings change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings:', e);
    }
  }, [bookings]);

  const confirmEvent = useCallback((eventId: number) => {
    setBookings(prev => ({
      ...prev,
      confirmedEvents: [...prev.confirmedEvents, eventId],
    }));
  }, []);

  const bookLogistic = useCallback((serviceId: number) => {
    setBookings(prev => ({
      ...prev,
      bookedLogistics: [...prev.bookedLogistics, serviceId],
    }));
  }, []);

  const reserveEquipment = useCallback((equipmentId: number) => {
    setBookings(prev => ({
      ...prev,
      reservedEquipment: [...prev.reservedEquipment, equipmentId],
    }));
  }, []);

  const bookActivity = useCallback((activityId: number) => {
    setBookings(prev => ({
      ...prev,
      bookedActivities: [...prev.bookedActivities, activityId],
    }));
  }, []);

  const bookVolcanoTrek = useCallback(() => {
    setBookings(prev => ({
      ...prev,
      volcanoTrekBooked: true,
    }));
  }, []);

  const isEventConfirmed = useCallback((eventId: number) => {
    return bookings.confirmedEvents.includes(eventId);
  }, [bookings.confirmedEvents]);

  const isLogisticBooked = useCallback((serviceId: number) => {
    return bookings.bookedLogistics.includes(serviceId);
  }, [bookings.bookedLogistics]);

  const isEquipmentReserved = useCallback((equipmentId: number) => {
    return bookings.reservedEquipment.includes(equipmentId);
  }, [bookings.reservedEquipment]);

  const isActivityBooked = useCallback((activityId: number) => {
    return bookings.bookedActivities.includes(activityId);
  }, [bookings.bookedActivities]);

  // Get timeline items based on current bookings
  const getTimelineItems = useCallback(() => {
    const items: Array<{
      id: string;
      title: string;
      status: 'confirmed' | 'active';
      time: string;
      description: string;
    }> = [];

    if (bookings.confirmedEvents.includes(1)) {
      items.push({
        id: 'event-1',
        title: 'Nomad Dinner RSVP',
        status: 'confirmed',
        time: 'Jan 27, 7:00 PM',
        description: 'Table reserved for community dinner',
      });
    }

    if (bookings.confirmedEvents.includes(2)) {
      items.push({
        id: 'event-2',
        title: 'Sunrise Surf Session',
        status: 'confirmed',
        time: 'Jan 30, 6:00 AM',
        description: 'Board and wetsuit ready at beach',
      });
    }

    if (bookings.bookedLogistics.includes(1)) {
      items.push({
        id: 'logistic-1',
        title: 'Laundry Service',
        status: 'active',
        time: 'Ready in 24hrs',
        description: 'Drop off at reception desk',
      });
    }

    if (bookings.bookedLogistics.includes(2)) {
      items.push({
        id: 'logistic-2',
        title: 'Bike Rental Active',
        status: 'active',
        time: 'Jan 25 - Jan 28',
        description: 'Beach cruiser ready at reception',
      });
    }

    if (bookings.bookedLogistics.includes(3)) {
      items.push({
        id: 'logistic-3',
        title: 'Airport Transfer',
        status: 'confirmed',
        time: 'Scheduled',
        description: 'Driver will contact via WhatsApp',
      });
    }

    if (bookings.bookedLogistics.includes(4)) {
      items.push({
        id: 'logistic-4',
        title: 'Local SIM Card',
        status: 'active',
        time: 'Ready for pickup',
        description: 'Collect at reception with ID',
      });
    }

    if (bookings.volcanoTrekBooked) {
      items.push({
        id: 'volcano-trek',
        title: 'Volcano Trek Booked',
        status: 'confirmed',
        time: 'Full Day Adventure',
        description: 'Guide will contact for details',
      });
    }

    return items.length > 0 ? items : [
      {
        id: 'welcome',
        title: 'Welcome to DeskAway!',
        status: 'active' as const,
        time: 'Getting Started',
        description: 'Book events and services to see your journey',
      },
    ];
  }, [bookings]);

  return {
    bookings,
    confirmEvent,
    bookLogistic,
    reserveEquipment,
    bookActivity,
    bookVolcanoTrek,
    isEventConfirmed,
    isLogisticBooked,
    isEquipmentReserved,
    isActivityBooked,
    getTimelineItems,
  };
};
