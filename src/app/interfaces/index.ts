export interface TableData {
  name: string;
  type: 'person' | 'company';
  email: string;
  phoneNo: string;
  companyName: string;
  address: string;
  children?: TableData[];
  isExpanded?: boolean;
  [key: string]: any;
}
