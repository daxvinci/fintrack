export type  Transaction = {
  id?: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export type Transactionlog = Transaction[];

export type DashboardSummary = {
  title: string;
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export type TableHeadData = {
  date: string;
  remark: string;
  amount: string;
  currency: string;
  type: string;
}