import * as process from "process";

interface SearchParams {
  [key: string]: string;
}
export const generateUrl = (
  searchParams: SearchParams = {},
  path = "invoices",
  origin: string = process.env.REQUEST_API_URL
) => {
  const url = new URL(path, origin);
  for (const key in searchParams) {
    url.searchParams.set(key, searchParams[key]);
  }
  return url.toString();
};
