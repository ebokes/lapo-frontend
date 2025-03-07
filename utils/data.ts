"use client";

import { RecentCardRequestTableType } from "@/types/card-request-table";

export const monthlyAnalyticsData = [
  { month: "Jan", personalized: 49, instant: 42 },
  { month: "Feb", personalized: 31, instant: 40 },
  { month: "Mar", personalized: 45, instant: 30 },
  { month: "Apr", personalized: 41, instant: 14 },
  { month: "May", personalized: 10, instant: 40 },
  { month: "June", personalized: 20, instant: 45 },
  { month: "July", personalized: 8, instant: 20 },
  { month: "Aug", personalized: 9, instant: 50 },
  { month: "Sep", personalized: 10, instant: 40 },
  { month: "Oct", personalized: 15, instant: 60 },
  { month: "Nov", personalized: 10, instant: 55 },
];

export const weeklyAnalyticsData = [
  { day: "Mon", income: 50 },
  { day: "Tue", income: 30 },
  { day: "Wed", income: 55 },
  { day: "Thu", income: 40 },
  { day: "Fri", income: 65 },
  { day: "Sat", income: 20 },
  { day: "Sun", income: 80 },
];

export const recentCardRequestsData: RecentCardRequestTableType[] = [
  {
    id: 1,
    branch: "Lagos Main",
    cardType: "Visa Debit",
    quantity: "200",
    status: "ready",
  },
  {
    id: 2,
    branch: "Abuja HQ",
    cardType: "MasterCard Credit",
    quantity: "150",
    status: "inProgress",
  },
  {
    id: 3,
    branch: "Port Harcourt",
    cardType: "Verve",
    quantity: "300",
    status: "acknowledged",
  },
  {
    id: 4,
    branch: "Kano",
    cardType: "Visa Debit",
    quantity: "500",
    status: "pending",
  },
];
