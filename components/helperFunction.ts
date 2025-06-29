import { differenceInYears, parse } from "date-fns";

export const calculateAge = (dob: string = "27/09/2000"): number => {
  const date = parse(dob, "dd/MM/yyyy", new Date());
  const age = differenceInYears(new Date(), date);
  return age;
};
