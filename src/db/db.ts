import { TableHeadData, Transactionlog } from "@/lib/types";

type Summary = {
  title: string;
  value: number;
  percentage: string;
}[];

export const summaryData:Summary = [
  {
    title: "Total Balance",
    value: 12345,
    percentage:"+5%",
  },
  {
    title: "Total Credits",
    value: 7890,
    percentage:"+3%",
  },
  {
    title: "Total Debits",
    value: 4455,
    percentage:"-2%",
  },
  {
    title: "Transactions",
    value: 150,
    percentage:"+10%",
  },
]

export const tableHeadData:TableHeadData = {
  date: "Date",
  remark: "Remark",
  amount: "Amount",
  currency: "Currency",
  type: "Type",
}

export const TableData:Transactionlog = [
  {
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
]