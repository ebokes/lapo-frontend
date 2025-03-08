"use client";

import {
  CardRequestTableType,
  RecentCardRequestTableType,
} from "@/types/card-request-table";
import active from "@/assets/dashboard-icons/active.svg";
import pending from "@/assets/dashboard-icons/pending.svg";
import total from "@/assets/dashboard-icons/total.svg";
import revenue from "@/assets/dashboard-icons/revenue.svg";
import { ProfileType } from "@/types/profile-table";
import { AnalyticsCardProps } from "@/types/dashboard";

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

export const analyticsCardData: AnalyticsCardProps[] = [
  {
    title: "Total Active Cards",
    value: "26,478",
    change: "+9%",
    changeInfo: "this month",
    icon: active,
  },
  {
    title: "Total Personalized Cards",
    value: "15,703",
    change: "+8.5%",
    changeInfo: "this month",
    icon: total,
  },
  {
    title: "Today's Revenue",
    value: "₦9.3M",
    change: "+6%",
    changeInfo: "vs yesterday",
    icon: revenue,
  },
  {
    title: "Pending Requests",
    value: "38",
    change: "Requires attention",
    icon: pending,
    action: "attention",
  },
];

export const cardRequests: CardRequestTableType[] = [
  {
    id: 1,
    branch: "Lagos Main Branch",
    initiator: "John Doe",
    quantity: "50",
    batch: 101,
    dateRequested: "2025-03-01T10:30:00Z",
    status: "ready",
  },
  {
    id: 2,
    branch: "Abuja HQ",
    initiator: "Jane Smith",
    quantity: "100",
    batch: 102,
    dateRequested: "2025-03-02T14:15:00Z",
    status: "ready",
  },
  {
    id: 3,
    branch: "Port Harcourt Branch",
    initiator: "Samuel Adams",
    quantity: "75",
    batch: 103,
    dateRequested: "2025-03-03T09:45:00Z",
    status: "inProgress",
  },
  {
    id: 4,
    branch: "Kano Branch",
    initiator: "Amina Yusuf",
    quantity: "30",
    batch: 104,
    dateRequested: "2025-03-04T11:00:00Z",
    status: "pending",
  },
  {
    id: 5,
    branch: "Enugu Branch",
    initiator: "Chibuokem Egbuchulam",
    quantity: "120",
    batch: 105,
    dateRequested: "2025-03-05T16:20:00Z",
    status: "acknowledged",
  },
];

export const profileTableData: ProfileType[] = [
  {
    id: 1,
    cardName: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 2,
    cardName: "Verve-2",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 3,
    cardName: "Verve-3",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 4,
    cardName: "Verve-4",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
];
